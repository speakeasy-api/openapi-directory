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
    
    req := operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest{
        Security: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams{
            Parent: "aliquid",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "praesentium",
            Alt: "media",
            Callback: "id",
            DocumentID: "non",
            Fields: "ipsam",
            Key: "qui",
            OauthToken: "explicabo",
            PrettyPrint: true,
            QuotaUser: "sapiente",
            UploadType: "quia",
            UploadProtocol: "dolorem",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1betaDocument{
            ID: "aut",
            JSONData: "molestiae",
            Name: "quod",
            ParentDocumentID: "voluptatum",
            SchemaID: "quos",
            StructData: map[string]interface{}{
                "incidunt": "ab",
                "explicabo": "fuga",
                "dignissimos": "perferendis",
            },
        },
    }
    
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaDocument != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->