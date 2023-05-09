# InfoTypes

### Available Operations

* [DlpInfoTypesList](#dlpinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## DlpInfoTypesList

Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

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
    res, err := s.InfoTypes.DlpInfoTypesList(ctx, operations.DlpInfoTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        LanguageCode: sdk.String("placeat"),
        LocationID: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        Parent: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DlpInfoTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePrivacyDlpV2ListInfoTypesResponse != nil {
        // handle response
    }
}
```
