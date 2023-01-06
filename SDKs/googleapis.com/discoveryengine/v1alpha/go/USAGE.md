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
            Parent: "quia",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "laudantium",
            Alt: "proto",
            Callback: "veniam",
            DocumentID: "voluptate",
            Fields: "qui",
            Key: "in",
            OauthToken: "blanditiis",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "eveniet",
            UploadProtocol: "aut",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "a",
            JSONData: "assumenda",
            Name: "voluptas",
            ParentDocumentID: "earum",
            SchemaID: "inventore",
            StructData: map[string]interface{}{
                "sit": "aliquam",
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