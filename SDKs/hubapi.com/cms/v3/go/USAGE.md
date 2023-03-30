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
            CreatedAfter: "2022-08-25T15:24:16.356Z",
            CreatedAt: "2022-07-11T23:39:52.487Z",
            CreatedBefore: "2022-05-25T20:57:19.924Z",
            Limit: 602763,
            Sort: []string{
                "perspiciatis",
                "nulla",
                "nihil",
                "fuga",
            },
            UpdatedAfter: "2022-08-06T06:41:27.418Z",
            UpdatedAt: "2022-11-09T17:32:22.420Z",
            UpdatedBefore: "2022-10-21T07:27:33.770Z",
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