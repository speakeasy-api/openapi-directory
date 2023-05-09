<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Domains.GetCmsV3DomainsGetPage(ctx, operations.GetCmsV3DomainsGetPageRequest{
        After: sdk.String("corrupti"),
        Archived: sdk.Bool(false),
        CreatedAfter: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
        CreatedAt: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
        CreatedBefore: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
        Limit: sdk.Int(847252),
        Sort: []string{
            "error",
            "deserunt",
        },
        UpdatedAfter: types.MustTimeFromString("2022-07-25T06:44:09.184Z"),
        UpdatedAt: types.MustTimeFromString("2022-02-09T12:04:06.508Z"),
        UpdatedBefore: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
    }, operations.GetCmsV3DomainsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseWithTotalDomainForwardPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->