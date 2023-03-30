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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleCloudDatacatalogV1SearchCatalogRequest{
            OrderBy: "deserunt",
            PageSize: 384382,
            PageToken: "iure",
            Query: "magnam",
            Scope: &shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: false,
                IncludeOrgIds: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                IncludeProjectIds: []string{
                    "minus",
                    "placeat",
                },
                IncludePublicTagTemplates: false,
                RestrictedLocations: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
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