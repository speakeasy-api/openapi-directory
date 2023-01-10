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
            Parent: "labore",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "doloribus",
            Alt: "media",
            Callback: "labore",
            DocumentID: "pariatur",
            Fields: "natus",
            Key: "optio",
            OauthToken: "praesentium",
            PrettyPrint: false,
            QuotaUser: "accusantium",
            UploadType: "in",
            UploadProtocol: "voluptatum",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "reprehenderit",
            JSONData: "veniam",
            Name: "eos",
            ParentDocumentID: "ut",
            SchemaID: "laboriosam",
            StructData: map[string]interface{}{
                "labore": "est",
                "similique": "aliquam",
                "commodi": "hic",
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