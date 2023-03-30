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
        Security: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
            Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "iure",
                "magnam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->