# dependabot

## Overview

Endpoints to manage Dependabot.

### Available Operations

* [dependabotAddSelectedRepoToOrgSecret](#dependabotaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [dependabotCreateOrUpdateOrgSecret](#dependabotcreateorupdateorgsecret) - Create or update an organization secret
* [dependabotCreateOrUpdateRepoSecret](#dependabotcreateorupdatereposecret) - Create or update a repository secret
* [dependabotDeleteOrgSecret](#dependabotdeleteorgsecret) - Delete an organization secret
* [dependabotDeleteRepoSecret](#dependabotdeletereposecret) - Delete a repository secret
* [dependabotGetOrgPublicKey](#dependabotgetorgpublickey) - Get an organization public key
* [dependabotGetOrgSecret](#dependabotgetorgsecret) - Get an organization secret
* [dependabotGetRepoPublicKey](#dependabotgetrepopublickey) - Get a repository public key
* [dependabotGetRepoSecret](#dependabotgetreposecret) - Get a repository secret
* [dependabotListOrgSecrets](#dependabotlistorgsecrets) - List organization secrets
* [dependabotListRepoSecrets](#dependabotlistreposecrets) - List repository secrets
* [dependabotListSelectedReposForOrgSecret](#dependabotlistselectedreposfororgsecret) - List selected repositories for an organization secret
* [dependabotRemoveSelectedRepoFromOrgSecret](#dependabotremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [dependabotSetSelectedReposForOrgSecret](#dependabotsetselectedreposfororgsecret) - Set selected repositories for an organization secret

## dependabotAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#add-selected-repository-to-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotAddSelectedRepoToOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotAddSelectedRepoToOrgSecretRequest();
    $request->org = 'possimus';
    $request->repositoryId = 157632;
    $request->secretName = 'eveniet';

    $response = $sdk->dependabot->dependabotAddSelectedRepoToOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
permission to use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotCreateOrUpdateOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DependabotCreateOrUpdateOrgSecretRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotCreateOrUpdateOrgSecretRequest();
    $request->requestBody = new DependabotCreateOrUpdateOrgSecretRequestBody();
    $request->requestBody->encryptedValue = 'asperiores';
    $request->requestBody->keyId = 'facere';
    $request->requestBody->selectedRepositoryIds = [
        'consequuntur',
    ];
    $request->requestBody->visibility = DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum::ALL;
    $request->org = 'similique';
    $request->secretName = 'culpa';

    $response = $sdk->dependabot->dependabotCreateOrUpdateOrgSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
permission to use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotCreateOrUpdateRepoSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DependabotCreateOrUpdateRepoSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotCreateOrUpdateRepoSecretRequest();
    $request->requestBody = new DependabotCreateOrUpdateRepoSecretRequestBody();
    $request->requestBody->encryptedValue = 'aliquid';
    $request->requestBody->keyId = 'tenetur';
    $request->owner = 'quae';
    $request->repo = 'earum';
    $request->secretName = 'vel';

    $response = $sdk->dependabot->dependabotCreateOrUpdateRepoSecret($request);

    if ($response->emptyObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#delete-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotDeleteOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotDeleteOrgSecretRequest();
    $request->org = 'in';
    $request->secretName = 'eius';

    $response = $sdk->dependabot->dependabotDeleteOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#delete-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotDeleteRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotDeleteRepoSecretRequest();
    $request->owner = 'libero';
    $request->repo = 'illum';
    $request->secretName = 'soluta';

    $response = $sdk->dependabot->dependabotDeleteRepoSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-an-organization-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotGetOrgPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotGetOrgPublicKeyRequest();
    $request->org = 'accusantium';

    $response = $sdk->dependabot->dependabotGetOrgPublicKey($request);

    if ($response->dependabotPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotGetOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotGetOrgSecretRequest();
    $request->org = 'aliquam';
    $request->secretName = 'sapiente';

    $response = $sdk->dependabot->dependabotGetOrgSecret($request);

    if ($response->organizationDependabotSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-a-repository-public-key>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotGetRepoPublicKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotGetRepoPublicKeyRequest();
    $request->owner = 'dicta';
    $request->repo = 'ullam';

    $response = $sdk->dependabot->dependabotGetRepoPublicKey($request);

    if ($response->dependabotPublicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-a-repository-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotGetRepoSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotGetRepoSecretRequest();
    $request->owner = 'reprehenderit';
    $request->repo = 'ullam';
    $request->secretName = 'nisi';

    $response = $sdk->dependabot->dependabotGetRepoSecret($request);

    if ($response->dependabotSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-organization-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotListOrgSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotListOrgSecretsRequest();
    $request->org = 'aut';
    $request->page = 531849;
    $request->perPage = 185232;

    $response = $sdk->dependabot->dependabotListOrgSecrets($request);

    if ($response->dependabotListOrgSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-repository-secrets>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotListRepoSecretsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotListRepoSecretsRequest();
    $request->owner = 'quibusdam';
    $request->page = 401259;
    $request->perPage = 536275;
    $request->repo = 'itaque';

    $response = $sdk->dependabot->dependabotListRepoSecrets($request);

    if ($response->dependabotListRepoSecrets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotListSelectedReposForOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotListSelectedReposForOrgSecretRequest();
    $request->org = 'dolorum';
    $request->page = 99615;
    $request->perPage = 609178;
    $request->secretName = 'tenetur';

    $response = $sdk->dependabot->dependabotListSelectedReposForOrgSecret($request);

    if ($response->dependabotListSelectedReposForOrgSecret200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotRemoveSelectedRepoFromOrgSecretRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotRemoveSelectedRepoFromOrgSecretRequest();
    $request->org = 'quasi';
    $request->repositoryId = 869489;
    $request->secretName = 'et';

    $response = $sdk->dependabot->dependabotRemoveSelectedRepoFromOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dependabotSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DependabotSetSelectedReposForOrgSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DependabotSetSelectedReposForOrgSecretRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DependabotSetSelectedReposForOrgSecretRequest();
    $request->requestBody = new DependabotSetSelectedReposForOrgSecretRequestBody();
    $request->requestBody->selectedRepositoryIds = [
        55965,
        326701,
    ];
    $request->org = 'veritatis';
    $request->secretName = 'consectetur';

    $response = $sdk->dependabot->dependabotSetSelectedReposForOrgSecret($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
