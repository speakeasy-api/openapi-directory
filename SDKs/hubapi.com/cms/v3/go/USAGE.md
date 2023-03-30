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
            After: "corrupti",
            Archived: false,
            CreatedAfter: "2022-08-25T17:46:52.175Z",
            CreatedAt: "2022-07-12T02:02:28.306Z",
            CreatedBefore: "2022-05-25T23:19:55.743Z",
            Limit: 602763,
            Sort: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            UpdatedAfter: "2022-08-06T09:04:03.238Z",
            UpdatedAt: "2022-11-09T19:54:58.240Z",
            UpdatedBefore: "2022-10-21T09:50:09.590Z",
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