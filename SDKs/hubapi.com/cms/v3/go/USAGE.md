<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetCmsV3DomainsGetPageRequest{
        Security: operations.GetCmsV3DomainsGetPageSecurity{
            PrivateAppsLegacy: &shared.SchemePrivateAppsLegacy{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetCmsV3DomainsGetPageQueryParams{
            After: "non",
            Archived: false,
            CreatedAfter: "2010-06-10T21:00:40Z",
            CreatedAt: "2014-07-10T09:12:30Z",
            CreatedBefore: "1985-06-27T20:21:36Z",
            Limit: 8829946588659094811,
            Sort: []string{
                "voluptas",
            },
            UpdatedAfter: "2008-10-24T19:33:13Z",
            UpdatedAt: "1970-05-27T13:21:49Z",
            UpdatedBefore: "1990-01-26T13:39:56Z",
        },
    }
    
    res, err := s.Domains.GetCmsV3DomainsGetPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseWithTotalDomainForwardPaging != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->