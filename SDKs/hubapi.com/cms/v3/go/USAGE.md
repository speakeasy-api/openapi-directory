<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetCmsV3DomainsGetPageRequest{
        Security: operations.GetCmsV3DomainsGetPageSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetCmsV3DomainsGetPageQueryParams{
            After: "unde",
            Archived: false,
            CreatedAfter: "2022-08-25T03:25:07.102Z",
            CreatedAt: "2022-07-11T11:40:43.233Z",
            CreatedBefore: "2022-05-25T08:58:10.670Z",
            Limit: 602763,
            Sort: []string{
                "perspiciatis",
                "nulla",
                "nihil",
                "fuga",
            },
            UpdatedAfter: "2022-08-05T18:42:18.164Z",
            UpdatedAt: "2022-11-09T05:33:13.166Z",
            UpdatedBefore: "2022-10-20T19:28:24.516Z",
        },
    }

    ctx := context.Background()
    res, err := s.Domains.GetCmsV3DomainsGetPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseWithTotalDomainForwardPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->