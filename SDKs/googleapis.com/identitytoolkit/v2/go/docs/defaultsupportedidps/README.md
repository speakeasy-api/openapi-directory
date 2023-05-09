# DefaultSupportedIdps

### Available Operations

* [IdentitytoolkitDefaultSupportedIdpsList](#identitytoolkitdefaultsupportedidpslist) - List all default supported Idps.

## IdentitytoolkitDefaultSupportedIdpsList

List all default supported Idps.

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
    res, err := s.DefaultSupportedIdps.IdentitytoolkitDefaultSupportedIdpsList(ctx, operations.IdentitytoolkitDefaultSupportedIdpsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(164940),
        PageToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.IdentitytoolkitDefaultSupportedIdpsListSecurity{
        Option1: &operations.IdentitytoolkitDefaultSupportedIdpsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse != nil {
        // handle response
    }
}
```
