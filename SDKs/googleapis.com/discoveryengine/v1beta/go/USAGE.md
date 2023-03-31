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
        DollarXgafv: "2",
        GoogleCloudDiscoveryengineV1betaDocument: &shared.GoogleCloudDiscoveryengineV1betaDocument{
            ID: "provident",
            JSONData: "distinctio",
            Name: "quibusdam",
            ParentDocumentID: "unde",
            SchemaID: "nulla",
            StructData: map[string]interface{}{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        AccessToken: "magnam",
        Alt: "proto",
        Callback: "ipsa",
        DocumentID: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, req, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->