# Locations

### Available Operations

* [DlpLocationsInfoTypesList](#dlplocationsinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## DlpLocationsInfoTypesList

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
    res, err := s.Locations.DlpLocationsInfoTypesList(ctx, operations.DlpLocationsInfoTypesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        LanguageCode: sdk.String("sapiente"),
        LocationID: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DlpLocationsInfoTypesListSecurity{
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
