# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/workflowexecutions/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(ctx, req, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel` - Cancels an execution of the given name.
* `WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate` - Creates a new execution using the latest revision of the given workflow.
* `WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet` - Returns an execution of the given name.
* `WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList` - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
* `WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution` - Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
