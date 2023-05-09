# Dependabot

## Overview

Endpoints to manage Dependabot.

### Available Operations

* [DependabotAddSelectedRepoToOrgSecret](#dependabotaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [DependabotCreateOrUpdateOrgSecret](#dependabotcreateorupdateorgsecret) - Create or update an organization secret
* [DependabotCreateOrUpdateRepoSecret](#dependabotcreateorupdatereposecret) - Create or update a repository secret
* [DependabotDeleteOrgSecret](#dependabotdeleteorgsecret) - Delete an organization secret
* [DependabotDeleteRepoSecret](#dependabotdeletereposecret) - Delete a repository secret
* [DependabotGetOrgPublicKey](#dependabotgetorgpublickey) - Get an organization public key
* [DependabotGetOrgSecret](#dependabotgetorgsecret) - Get an organization secret
* [DependabotGetRepoPublicKey](#dependabotgetrepopublickey) - Get a repository public key
* [DependabotGetRepoSecret](#dependabotgetreposecret) - Get a repository secret
* [DependabotListOrgSecrets](#dependabotlistorgsecrets) - List organization secrets
* [DependabotListRepoSecrets](#dependabotlistreposecrets) - List repository secrets
* [DependabotListSelectedReposForOrgSecret](#dependabotlistselectedreposfororgsecret) - List selected repositories for an organization secret
* [DependabotRemoveSelectedRepoFromOrgSecret](#dependabotremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [DependabotSetSelectedReposForOrgSecret](#dependabotsetselectedreposfororgsecret) - Set selected repositories for an organization secret

## DependabotAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#add-selected-repository-to-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotAddSelectedRepoToOrgSecret(ctx, operations.DependabotAddSelectedRepoToOrgSecretRequest{
        Org: "error",
        RepositoryID: 575751,
        SecretName: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotCreateOrUpdateOrgSecret

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotCreateOrUpdateOrgSecret(ctx, operations.DependabotCreateOrUpdateOrgSecretRequest{
        RequestBody: operations.DependabotCreateOrUpdateOrgSecretRequestBody{
            EncryptedValue: sdk.String("possimus"),
            KeyID: sdk.String("quia"),
            SelectedRepositoryIds: []string{
                "asperiores",
                "facere",
                "veritatis",
                "consequuntur",
            },
            Visibility: operations.DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnumAll,
        },
        Org: "similique",
        SecretName: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## DependabotCreateOrUpdateRepoSecret

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotCreateOrUpdateRepoSecret(ctx, operations.DependabotCreateOrUpdateRepoSecretRequest{
        RequestBody: operations.DependabotCreateOrUpdateRepoSecretRequestBody{
            EncryptedValue: sdk.String("aliquid"),
            KeyID: sdk.String("tenetur"),
        },
        Owner: "quae",
        Repo: "earum",
        SecretName: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## DependabotDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#delete-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotDeleteOrgSecret(ctx, operations.DependabotDeleteOrgSecretRequest{
        Org: "in",
        SecretName: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#delete-a-repository-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotDeleteRepoSecret(ctx, operations.DependabotDeleteRepoSecretRequest{
        Owner: "libero",
        Repo: "illum",
        SecretName: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-an-organization-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotGetOrgPublicKey(ctx, operations.DependabotGetOrgPublicKeyRequest{
        Org: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotPublicKey != nil {
        // handle response
    }
}
```

## DependabotGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotGetOrgSecret(ctx, operations.DependabotGetOrgSecretRequest{
        Org: "aliquam",
        SecretName: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationDependabotSecret != nil {
        // handle response
    }
}
```

## DependabotGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-a-repository-public-key>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotGetRepoPublicKey(ctx, operations.DependabotGetRepoPublicKeyRequest{
        Owner: "dicta",
        Repo: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotPublicKey != nil {
        // handle response
    }
}
```

## DependabotGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#get-a-repository-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotGetRepoSecret(ctx, operations.DependabotGetRepoSecretRequest{
        Owner: "reprehenderit",
        Repo: "ullam",
        SecretName: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotSecret != nil {
        // handle response
    }
}
```

## DependabotListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-organization-secrets>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotListOrgSecrets(ctx, operations.DependabotListOrgSecretsRequest{
        Org: "aut",
        Page: sdk.Int64(531849),
        PerPage: sdk.Int64(185232),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListOrgSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-repository-secrets>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotListRepoSecrets(ctx, operations.DependabotListRepoSecretsRequest{
        Owner: "quibusdam",
        Page: sdk.Int64(401259),
        PerPage: sdk.Int64(536275),
        Repo: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListRepoSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotListSelectedReposForOrgSecret(ctx, operations.DependabotListSelectedReposForOrgSecretRequest{
        Org: "dolorum",
        Page: sdk.Int64(99615),
        PerPage: sdk.Int64(609178),
        SecretName: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListSelectedReposForOrgSecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotRemoveSelectedRepoFromOrgSecret(ctx, operations.DependabotRemoveSelectedRepoFromOrgSecretRequest{
        Org: "quasi",
        RepositoryID: 869489,
        SecretName: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Dependabot.DependabotSetSelectedReposForOrgSecret(ctx, operations.DependabotSetSelectedReposForOrgSecretRequest{
        RequestBody: operations.DependabotSetSelectedReposForOrgSecretRequestBody{
            SelectedRepositoryIds: []int64{
                55965,
                326701,
            },
        },
        Org: "veritatis",
        SecretName: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
