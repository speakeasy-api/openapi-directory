# URLInspection

### Available Operations

* [SearchconsoleURLInspectionIndexInspect](#searchconsoleurlinspectionindexinspect) - Index inspection.

## SearchconsoleURLInspectionIndexInspect

Index inspection.

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
    res, err := s.URLInspection.SearchconsoleURLInspectionIndexInspect(ctx, operations.SearchconsoleURLInspectionIndexInspectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InspectURLIndexRequest: &shared.InspectURLIndexRequest{
            InspectionURL: sdk.String("dicta"),
            LanguageCode: sdk.String("magnam"),
            SiteURL: sdk.String("cumque"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.SearchconsoleURLInspectionIndexInspectSecurity{
        Option1: &operations.SearchconsoleURLInspectionIndexInspectSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InspectURLIndexResponse != nil {
        // handle response
    }
}
```
