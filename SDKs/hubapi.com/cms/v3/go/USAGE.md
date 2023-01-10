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
            After: "facilis",
            Archived: true,
            CreatedAfter: "1986-06-07T03:55:52Z",
            CreatedAt: "1984-11-19T16:36:42Z",
            CreatedBefore: "1999-01-08T19:20:15Z",
            Limit: 4971810752955050478,
            Sort: []string{
                "nihil",
            },
            UpdatedAfter: "1974-11-10T11:52:43Z",
            UpdatedAt: "1981-04-27T18:35:46Z",
            UpdatedBefore: "2010-08-14T06:06:02Z",
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