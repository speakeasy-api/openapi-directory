# Users

### Available Operations

* [BloggerUsersGet](#bloggerusersget) - Gets one user by user_id.

## BloggerUsersGet

Gets one user by user_id.

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
    res, err := s.Users.BloggerUsersGet(ctx, operations.BloggerUsersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sed"),
        UserID: "deleniti",
    }, operations.BloggerUsersGetSecurity{
        Option1: &operations.BloggerUsersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
