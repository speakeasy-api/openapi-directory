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
        DollarXgafv: "2",
        GoogleCloudDatacatalogV1SearchCatalogRequest: &shared.GoogleCloudDatacatalogV1SearchCatalogRequest{
            OrderBy: "provident",
            PageSize: 715190,
            PageToken: "quibusdam",
            Query: "unde",
            Scope: &shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: false,
                IncludeOrgIds: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                IncludeProjectIds: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                IncludePublicTagTemplates: false,
                RestrictedLocations: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                StarredOnly: false,
            },
        },
        AccessToken: "molestiae",
        Alt: "proto",
        Callback: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        PrettyPrint: false,
        QuotaUser: "nisi",
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, req, operations.DatacatalogCatalogSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1SearchCatalogResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->