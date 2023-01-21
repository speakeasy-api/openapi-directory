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
            Parent: "sit",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            DocumentID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "debitis",
            JSONData: "voluptatum",
            Name: "et",
            ParentDocumentID: "ut",
            SchemaID: "dolorem",
            StructData: map[string]interface{}{
                "voluptate": "iste",
                "vitae": "totam",
            },
        },
    }
    
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1alphaDocument != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->