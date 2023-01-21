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
            After: "sit",
            Archived: false,
            CreatedAfter: "1978-05-13T03:50:47Z",
            CreatedAt: "2019-04-21T07:38:14Z",
            CreatedBefore: "1997-12-26T13:41:25Z",
            Limit: 2669985732393126063,
            Sort: []string{
                "voluptas",
                "fugit",
            },
            UpdatedAfter: "2011-08-12T10:11:12Z",
            UpdatedAt: "2003-05-13T04:57:12Z",
            UpdatedBefore: "2004-06-02T10:14:12Z",
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