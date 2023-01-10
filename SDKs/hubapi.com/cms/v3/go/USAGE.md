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
            CreatedAfter: "1986-05-28T16:28:29Z",
            CreatedAt: "1984-11-10T05:09:19Z",
            CreatedBefore: "1998-12-30T07:52:52Z",
            Limit: 4971810752955050478,
            Sort: []string{
                "nihil",
            },
            UpdatedAfter: "1974-11-01T00:25:20Z",
            UpdatedAt: "1981-04-18T07:08:23Z",
            UpdatedBefore: "2010-08-04T18:38:39Z",
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