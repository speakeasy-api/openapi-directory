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
            CreatedAfter: "2022-08-25T17:20:39.421Z",
            CreatedAt: "2022-07-12T01:36:15.552Z",
            CreatedBefore: "2022-05-25T22:53:42.989Z",
            Limit: 602763,
            Sort: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            UpdatedAfter: "2022-08-06T08:37:50.484Z",
            UpdatedAt: "2022-11-09T19:28:45.486Z",
            UpdatedBefore: "2022-10-21T09:23:56.836Z",
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