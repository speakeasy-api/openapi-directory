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
            Name: "odio",
        },
        QueryParams: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "iusto",
            Alt: "json",
            Callback: "neque",
            Fields: "quaerat",
            Key: "reprehenderit",
            OauthToken: "magnam",
            PrettyPrint: true,
            QuotaUser: "quibusdam",
            UploadType: "atque",
            UploadProtocol: "distinctio",
        },
        Request: map[string]interface{}{
            "explicabo": "nemo",
        },
    }
    
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->