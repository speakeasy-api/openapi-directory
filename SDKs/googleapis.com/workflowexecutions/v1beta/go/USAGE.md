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
            Name: "ea",
        },
        QueryParams: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "sapiente",
            Alt: "media",
            Callback: "libero",
            Fields: "eligendi",
            Key: "et",
            OauthToken: "culpa",
            PrettyPrint: true,
            QuotaUser: "sint",
            UploadType: "quisquam",
            UploadProtocol: "omnis",
        },
        Request: map[string]interface{}{
            "quo": "hic",
            "qui": "quas",
            "vel": "at",
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