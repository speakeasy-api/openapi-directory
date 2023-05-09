# Tokens

### Available Operations

* [DirectoryTokensDelete](#directorytokensdelete) - Deletes all access tokens issued by a user for an application.
* [DirectoryTokensGet](#directorytokensget) - Gets information about an access token issued by a user.
* [DirectoryTokensList](#directorytokenslist) - Returns the set of tokens specified user has issued to 3rd party applications.

## DirectoryTokensDelete

Deletes all access tokens issued by a user for an application.

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
    res, err := s.Tokens.DirectoryTokensDelete(ctx, operations.DirectoryTokensDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        ClientID: "nemo",
        Fields: sdk.String("illum"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("asperiores"),
        UserKey: "recusandae",
    }, operations.DirectoryTokensDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryTokensGet

Gets information about an access token issued by a user.

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
    res, err := s.Tokens.DirectoryTokensGet(ctx, operations.DirectoryTokensGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        ClientID: "sit",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("nesciunt"),
        UserKey: "delectus",
    }, operations.DirectoryTokensGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## DirectoryTokensList

Returns the set of tokens specified user has issued to 3rd party applications.

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
    res, err := s.Tokens.DirectoryTokensList(ctx, operations.DirectoryTokensListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("at"),
        UserKey: "dolorem",
    }, operations.DirectoryTokensListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokens != nil {
        // handle response
    }
}
```
