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
            Name: "accusantium",
        },
        QueryParams: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "proto",
            Callback: "sunt",
            Fields: "odit",
            Key: "sit",
            OauthToken: "maiores",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "et",
            UploadProtocol: "vel",
        },
        Request: map[string]interface{}{
            "consequatur": "sint",
            "officia": "aspernatur",
            "enim": "sit",
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