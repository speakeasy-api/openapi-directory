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
            Parent: "dolores",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "libero",
            Alt: "json",
            Callback: "optio",
            DocumentID: "voluptas",
            Fields: "iste",
            Key: "commodi",
            OauthToken: "natus",
            PrettyPrint: false,
            QuotaUser: "enim",
            UploadType: "quod",
            UploadProtocol: "suscipit",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1betaDocument{
            ID: "error",
            JSONData: "sit",
            Name: "debitis",
            ParentDocumentID: "cum",
            SchemaID: "commodi",
            StructData: map[string]interface{}{
                "aliquam": "et",
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