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

    req := operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest{
        Security: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams{
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
        Request: map[string]interface{}{
            "iure": "magnam",
            "debitis": "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->