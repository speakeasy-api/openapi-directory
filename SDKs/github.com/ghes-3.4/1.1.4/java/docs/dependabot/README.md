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

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#add-selected-repository-to-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotAddSelectedRepoToOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotAddSelectedRepoToOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotAddSelectedRepoToOrgSecretRequest req = new DependabotAddSelectedRepoToOrgSecretRequest("fugiat", 283519L, "eum");            

            DependabotAddSelectedRepoToOrgSecretResponse res = sdk.dependabot.dependabotAddSelectedRepoToOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#create-or-update-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateOrgSecretRequestBody;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotCreateOrUpdateOrgSecretRequest req = new DependabotCreateOrUpdateOrgSecretRequest(                new DependabotCreateOrUpdateOrgSecretRequestBody(DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum.PRIVATE_) {{
                                encryptedValue = "assumenda";
                                keyId = "eos";
                                selectedRepositoryIds = new String[]{{
                                    add("quisquam"),
                                    add("veritatis"),
                                    add("ipsa"),
                                }};
                            }};, "id", "quidem");            

            DependabotCreateOrUpdateOrgSecretResponse res = sdk.dependabot.dependabotCreateOrUpdateOrgSecret(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#create-or-update-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateRepoSecretRequest;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateRepoSecretRequestBody;
import org.openapis.openapi.models.operations.DependabotCreateOrUpdateRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotCreateOrUpdateRepoSecretRequest req = new DependabotCreateOrUpdateRepoSecretRequest(                new DependabotCreateOrUpdateRepoSecretRequestBody() {{
                                encryptedValue = "neque";
                                keyId = "quo";
                            }};, "illum", "quo", "fuga");            

            DependabotCreateOrUpdateRepoSecretResponse res = sdk.dependabot.dependabotCreateOrUpdateRepoSecret(req);

            if (res.emptyObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#delete-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotDeleteOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotDeleteOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotDeleteOrgSecretRequest req = new DependabotDeleteOrgSecretRequest("eius", "eos");            

            DependabotDeleteOrgSecretResponse res = sdk.dependabot.dependabotDeleteOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#delete-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotDeleteRepoSecretRequest;
import org.openapis.openapi.models.operations.DependabotDeleteRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotDeleteRepoSecretRequest req = new DependabotDeleteRepoSecretRequest("voluptas", "ab", "cupiditate");            

            DependabotDeleteRepoSecretResponse res = sdk.dependabot.dependabotDeleteRepoSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#get-an-organization-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotGetOrgPublicKeyRequest;
import org.openapis.openapi.models.operations.DependabotGetOrgPublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotGetOrgPublicKeyRequest req = new DependabotGetOrgPublicKeyRequest("consequatur");            

            DependabotGetOrgPublicKeyResponse res = sdk.dependabot.dependabotGetOrgPublicKey(req);

            if (res.dependabotPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#get-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotGetOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotGetOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotGetOrgSecretRequest req = new DependabotGetOrgSecretRequest("tempora", "debitis");            

            DependabotGetOrgSecretResponse res = sdk.dependabot.dependabotGetOrgSecret(req);

            if (res.organizationDependabotSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#get-a-repository-public-key>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotGetRepoPublicKeyRequest;
import org.openapis.openapi.models.operations.DependabotGetRepoPublicKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotGetRepoPublicKeyRequest req = new DependabotGetRepoPublicKeyRequest("ipsam", "aspernatur");            

            DependabotGetRepoPublicKeyResponse res = sdk.dependabot.dependabotGetRepoPublicKey(req);

            if (res.dependabotPublicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#get-a-repository-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotGetRepoSecretRequest;
import org.openapis.openapi.models.operations.DependabotGetRepoSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotGetRepoSecretRequest req = new DependabotGetRepoSecretRequest("sequi", "quo", "esse");            

            DependabotGetRepoSecretResponse res = sdk.dependabot.dependabotGetRepoSecret(req);

            if (res.dependabotSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#list-organization-secrets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotListOrgSecretsRequest;
import org.openapis.openapi.models.operations.DependabotListOrgSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotListOrgSecretsRequest req = new DependabotListOrgSecretsRequest("recusandae") {{
                page = 44612L;
                perPage = 715179L;
            }};            

            DependabotListOrgSecretsResponse res = sdk.dependabot.dependabotListOrgSecrets(req);

            if (res.dependabotListOrgSecrets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#list-repository-secrets>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotListRepoSecretsRequest;
import org.openapis.openapi.models.operations.DependabotListRepoSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotListRepoSecretsRequest req = new DependabotListRepoSecretsRequest("quod", "dignissimos") {{
                page = 76956L;
                perPage = 469498L;
            }};            

            DependabotListRepoSecretsResponse res = sdk.dependabot.dependabotListRepoSecrets(req);

            if (res.dependabotListRepoSecrets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotListSelectedReposForOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotListSelectedReposForOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotListSelectedReposForOrgSecretRequest req = new DependabotListSelectedReposForOrgSecretRequest("totam", "accusamus") {{
                page = 306810L;
                perPage = 488410L;
            }};            

            DependabotListSelectedReposForOrgSecretResponse res = sdk.dependabot.dependabotListSelectedReposForOrgSecret(req);

            if (res.dependabotListSelectedReposForOrgSecret200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotRemoveSelectedRepoFromOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotRemoveSelectedRepoFromOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotRemoveSelectedRepoFromOrgSecretRequest req = new DependabotRemoveSelectedRepoFromOrgSecretRequest("occaecati", 414567L, "sapiente");            

            DependabotRemoveSelectedRepoFromOrgSecretResponse res = sdk.dependabot.dependabotRemoveSelectedRepoFromOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dependabotSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependabotSetSelectedReposForOrgSecretRequest;
import org.openapis.openapi.models.operations.DependabotSetSelectedReposForOrgSecretRequestBody;
import org.openapis.openapi.models.operations.DependabotSetSelectedReposForOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependabotSetSelectedReposForOrgSecretRequest req = new DependabotSetSelectedReposForOrgSecretRequest(                new DependabotSetSelectedReposForOrgSecretRequestBody(                new Long[]{{
                                                add(645570L),
                                            }});, "molestiae", "accusantium");            

            DependabotSetSelectedReposForOrgSecretResponse res = sdk.dependabot.dependabotSetSelectedReposForOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
