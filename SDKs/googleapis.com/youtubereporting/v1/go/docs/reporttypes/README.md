# ReportTypes

### Available Operations

* [YoutubereportingReportTypesList](#youtubereportingreporttypeslist) - Lists report types.

## YoutubereportingReportTypesList

Lists report types.

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
    res, err := s.ReportTypes.YoutubereportingReportTypesList(ctx, operations.YoutubereportingReportTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        IncludeSystemManaged: sdk.Bool(false),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        OnBehalfOfContentOwner: sdk.String("deserunt"),
        PageSize: sdk.Int64(716327),
        PageToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.YoutubereportingReportTypesListSecurity{
        Option1: &operations.YoutubereportingReportTypesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportTypesResponse != nil {
        // handle response
    }
}
```
