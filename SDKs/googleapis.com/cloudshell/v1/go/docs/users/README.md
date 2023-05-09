# Users

### Available Operations

* [CloudshellUsersEnvironmentsAddPublicKey](#cloudshellusersenvironmentsaddpublickey) - Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.
* [CloudshellUsersEnvironmentsAuthorize](#cloudshellusersenvironmentsauthorize) - Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.
* [CloudshellUsersEnvironmentsGet](#cloudshellusersenvironmentsget) - Gets an environment. Returns NOT_FOUND if the environment does not exist.
* [CloudshellUsersEnvironmentsRemovePublicKey](#cloudshellusersenvironmentsremovepublickey) - Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.
* [CloudshellUsersEnvironmentsStart](#cloudshellusersenvironmentsstart) - Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

## CloudshellUsersEnvironmentsAddPublicKey

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.CloudshellUsersEnvironmentsAddPublicKey(ctx, operations.CloudshellUsersEnvironmentsAddPublicKeyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddPublicKeyRequest: &shared.AddPublicKeyRequest{
            Key: sdk.String("commodi"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Environment: "impedit",
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.CloudshellUsersEnvironmentsAddPublicKeySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudshellUsersEnvironmentsAuthorize

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.CloudshellUsersEnvironmentsAuthorize(ctx, operations.CloudshellUsersEnvironmentsAuthorizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizeEnvironmentRequest: &shared.AuthorizeEnvironmentRequest{
            AccessToken: sdk.String("natus"),
            ExpireTime: sdk.String("sed"),
            IDToken: sdk.String("iste"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        Name: "Harvey Hessel",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.CloudshellUsersEnvironmentsAuthorizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudshellUsersEnvironmentsGet

Gets an environment. Returns NOT_FOUND if the environment does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.CloudshellUsersEnvironmentsGet(ctx, operations.CloudshellUsersEnvironmentsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        Name: "Della Halvorson",
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(570197),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.CloudshellUsersEnvironmentsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## CloudshellUsersEnvironmentsRemovePublicKey

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.CloudshellUsersEnvironmentsRemovePublicKey(ctx, operations.CloudshellUsersEnvironmentsRemovePublicKeyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemovePublicKeyRequest: &shared.RemovePublicKeyRequest{
            Key: sdk.String("architecto"),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Environment: "consequuntur",
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
    }, operations.CloudshellUsersEnvironmentsRemovePublicKeySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudshellUsersEnvironmentsStart

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.CloudshellUsersEnvironmentsStart(ctx, operations.CloudshellUsersEnvironmentsStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StartEnvironmentRequest: &shared.StartEnvironmentRequest{
            AccessToken: sdk.String("velit"),
            PublicKeys: []string{
                "quia",
                "quis",
                "vitae",
            },
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        Name: "Mandy Hills",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.CloudshellUsersEnvironmentsStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
