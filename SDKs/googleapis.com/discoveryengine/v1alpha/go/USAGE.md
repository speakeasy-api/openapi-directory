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
            Parent: "unde",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DocumentID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "iusto",
            JSONData: "ullam",
            Name: "saepe",
            ParentDocumentID: "inventore",
            SchemaID: "sapiente",
            StructData: map[string]interface{}{
                "eum": "voluptatum",
                "autem": "vel",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1alphaDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->