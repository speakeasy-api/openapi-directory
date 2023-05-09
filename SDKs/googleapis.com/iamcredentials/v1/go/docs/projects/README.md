# Projects

### Available Operations

* [IamcredentialsProjectsServiceAccountsGenerateAccessToken](#iamcredentialsprojectsserviceaccountsgenerateaccesstoken) - Generates an OAuth 2.0 access token for a service account.
* [IamcredentialsProjectsServiceAccountsGenerateIDToken](#iamcredentialsprojectsserviceaccountsgenerateidtoken) - Generates an OpenID Connect ID token for a service account.
* [IamcredentialsProjectsServiceAccountsSignBlob](#iamcredentialsprojectsserviceaccountssignblob) - Signs a blob using a service account's system-managed private key.
* [IamcredentialsProjectsServiceAccountsSignJwt](#iamcredentialsprojectsserviceaccountssignjwt) - Signs a JWT using a service account's system-managed private key.

## IamcredentialsProjectsServiceAccountsGenerateAccessToken

Generates an OAuth 2.0 access token for a service account.

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
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateAccessToken(ctx, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateAccessTokenRequest: &shared.GenerateAccessTokenRequest{
            Delegates: []string{
                "recusandae",
                "temporibus",
            },
            Lifetime: sdk.String("ab"),
            Scope: []string{
                "veritatis",
                "deserunt",
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        Name: "Teri Strosin",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```

## IamcredentialsProjectsServiceAccountsGenerateIDToken

Generates an OpenID Connect ID token for a service account.

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
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsGenerateIDToken(ctx, operations.IamcredentialsProjectsServiceAccountsGenerateIDTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateIDTokenRequest: &shared.GenerateIDTokenRequest{
            Audience: sdk.String("dolorum"),
            Delegates: []string{
                "nam",
            },
            IncludeEmail: sdk.Bool(false),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        Name: "Everett Breitenberg",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.IamcredentialsProjectsServiceAccountsGenerateIDTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateIDTokenResponse != nil {
        // handle response
    }
}
```

## IamcredentialsProjectsServiceAccountsSignBlob

Signs a blob using a service account's system-managed private key.

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
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsSignBlob(ctx, operations.IamcredentialsProjectsServiceAccountsSignBlobRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SignBlobRequest: &shared.SignBlobRequest{
            Delegates: []string{
                "excepturi",
            },
            Payload: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        Name: "Faye Howe",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.IamcredentialsProjectsServiceAccountsSignBlobSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignBlobResponse != nil {
        // handle response
    }
}
```

## IamcredentialsProjectsServiceAccountsSignJwt

Signs a JWT using a service account's system-managed private key.

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
    res, err := s.Projects.IamcredentialsProjectsServiceAccountsSignJwt(ctx, operations.IamcredentialsProjectsServiceAccountsSignJwtRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SignJwtRequest: &shared.SignJwtRequest{
            Delegates: []string{
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
            },
            Payload: sdk.String("est"),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        Name: "Della Halvorson",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.IamcredentialsProjectsServiceAccountsSignJwtSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignJwtResponse != nil {
        // handle response
    }
}
```
