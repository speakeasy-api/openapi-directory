<!-- Start SDK Example Usage -->
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
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        LanguageCode: sdk.String("illum"),
        LocationID: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        Parent: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
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
<!-- End SDK Example Usage -->