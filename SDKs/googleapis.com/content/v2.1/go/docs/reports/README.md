# Reports

### Available Operations

* [ContentReportsSearch](#contentreportssearch) - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

## ContentReportsSearch

Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

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
    res, err := s.Reports.ContentReportsSearch(ctx, operations.ContentReportsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchRequest: &shared.SearchRequest{
            PageSize: sdk.Int(686291),
            PageToken: sdk.String("at"),
            Query: sdk.String("unde"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("soluta"),
        MerchantID: "earum",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("illo"),
    }, operations.ContentReportsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
