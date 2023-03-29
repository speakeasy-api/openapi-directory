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
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleCloudDatacatalogV1SearchCatalogRequest{
            OrderBy: "facilis",
            PageSize: 384382,
            PageToken: "iusto",
            Query: "ullam",
            Scope: &shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: false,
                IncludeOrgIds: []string{
                    "inventore",
                    "sapiente",
                    "enim",
                    "eum",
                },
                IncludeProjectIds: []string{
                    "autem",
                    "vel",
                },
                IncludePublicTagTemplates: false,
                RestrictedLocations: []string{
                    "deleniti",
                    "similique",
                    "reprehenderit",
                },
                StarredOnly: false,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1SearchCatalogResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->