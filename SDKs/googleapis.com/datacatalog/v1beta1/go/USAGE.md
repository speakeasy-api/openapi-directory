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
    
    req := operations.DatacatalogCatalogSearchRequest{
        Security: operations.DatacatalogCatalogSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DatacatalogCatalogSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest{
            OrderBy: "rerum",
            PageSize: 7837839688282259259,
            PageToken: "debitis",
            Query: "voluptatum",
            Scope: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: false,
                IncludeOrgIds: []string{
                    "dolorem",
                    "et",
                    "voluptate",
                },
                IncludeProjectIds: []string{
                    "vitae",
                    "totam",
                    "dolores",
                },
                RestrictedLocations: []string{
                    "debitis",
                    "vel",
                    "odio",
                },
            },
        },
    }
    
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1SearchCatalogResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->