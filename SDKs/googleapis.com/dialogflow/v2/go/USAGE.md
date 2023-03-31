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

    req := operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest{
        DollarXgafv: "2",
        GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, req, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->