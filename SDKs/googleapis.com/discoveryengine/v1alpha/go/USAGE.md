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
            Parent: "corrupti",
        },
        QueryParams: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            DocumentID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: "iure",
            JSONData: "magnam",
            Name: "debitis",
            ParentDocumentID: "ipsa",
            SchemaID: "delectus",
            StructData: map[string]interface{}{
                "suscipit": "molestiae",
                "minus": "placeat",
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