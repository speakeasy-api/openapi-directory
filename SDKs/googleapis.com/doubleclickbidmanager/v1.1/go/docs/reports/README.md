# Reports

### Available Operations

* [DoubleclickbidmanagerReportsListreports](#doubleclickbidmanagerreportslistreports) - Retrieves stored reports.

## DoubleclickbidmanagerReportsListreports

Retrieves stored reports.

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
    res, err := s.Reports.DoubleclickbidmanagerReportsListreports(ctx, operations.DoubleclickbidmanagerReportsListreportsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(928082),
        PageToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "facilis",
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
    }, operations.DoubleclickbidmanagerReportsListreportsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsResponse != nil {
        // handle response
    }
}
```
