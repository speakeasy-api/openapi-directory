# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_autopilot_v1/1.40.0/go
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

    req := operations.CreateAssistantCreateAssistantRequest{
        CallbackEvents: "corrupti",
        CallbackURL: "https://salty-stag.name",
        Defaults: "nulla",
        FriendlyName: "corrupti",
        LogQueries: false,
        StyleSheet: "illum",
        UniqueName: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, req, operations.CreateAssistantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateAssistant`
* `CreateField`
* `CreateFieldType`
* `CreateFieldValue`
* `CreateModelBuild`
* `CreateQuery`
* `CreateSample`
* `CreateTask`
* `CreateWebhook`
* `DeleteAssistant`
* `DeleteField`
* `DeleteFieldType`
* `DeleteFieldValue`
* `DeleteModelBuild`
* `DeleteQuery`
* `DeleteSample`
* `DeleteTask`
* `DeleteWebhook`
* `FetchAssistant`
* `FetchDefaults`
* `FetchDialogue`
* `FetchField`
* `FetchFieldType`
* `FetchFieldValue`
* `FetchModelBuild`
* `FetchQuery`
* `FetchSample`
* `FetchStyleSheet` - Returns Style sheet JSON object for the Assistant
* `FetchTask`
* `FetchTaskActions` - Returns JSON actions for the Task.
* `FetchTaskStatistics`
* `FetchWebhook`
* `ListAssistant`
* `ListField`
* `ListFieldType`
* `ListFieldValue`
* `ListModelBuild`
* `ListQuery`
* `ListSample`
* `ListTask`
* `ListWebhook`
* `UpdateAssistant`
* `UpdateDefaults`
* `UpdateFieldType`
* `UpdateModelBuild`
* `UpdateQuery`
* `UpdateRestoreAssistant`
* `UpdateSample`
* `UpdateStyleSheet` - Updates the style sheet for an Assistant identified by `assistant_sid`.
* `UpdateTask`
* `UpdateTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `UpdateWebhook`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
