# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_autopilot_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, operations.CreateAssistantCreateAssistantRequest{
        CallbackEvents: sdk.String("corrupti"),
        CallbackURL: sdk.String("https://salty-stag.name"),
        Defaults: sdk.String("nulla"),
        FriendlyName: sdk.String("corrupti"),
        LogQueries: sdk.Bool(false),
        StyleSheet: sdk.String("illum"),
        UniqueName: sdk.String("vel"),
    }, operations.CreateAssistantSecurity{
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

### [SDK](docs/sdk/README.md)

* [CreateAssistant](docs/sdk/README.md#createassistant)
* [CreateField](docs/sdk/README.md#createfield)
* [CreateFieldType](docs/sdk/README.md#createfieldtype)
* [CreateFieldValue](docs/sdk/README.md#createfieldvalue)
* [CreateModelBuild](docs/sdk/README.md#createmodelbuild)
* [CreateQuery](docs/sdk/README.md#createquery)
* [CreateSample](docs/sdk/README.md#createsample)
* [CreateTask](docs/sdk/README.md#createtask)
* [CreateWebhook](docs/sdk/README.md#createwebhook)
* [DeleteAssistant](docs/sdk/README.md#deleteassistant)
* [DeleteField](docs/sdk/README.md#deletefield)
* [DeleteFieldType](docs/sdk/README.md#deletefieldtype)
* [DeleteFieldValue](docs/sdk/README.md#deletefieldvalue)
* [DeleteModelBuild](docs/sdk/README.md#deletemodelbuild)
* [DeleteQuery](docs/sdk/README.md#deletequery)
* [DeleteSample](docs/sdk/README.md#deletesample)
* [DeleteTask](docs/sdk/README.md#deletetask)
* [DeleteWebhook](docs/sdk/README.md#deletewebhook)
* [FetchAssistant](docs/sdk/README.md#fetchassistant)
* [FetchDefaults](docs/sdk/README.md#fetchdefaults)
* [FetchDialogue](docs/sdk/README.md#fetchdialogue)
* [FetchField](docs/sdk/README.md#fetchfield)
* [FetchFieldType](docs/sdk/README.md#fetchfieldtype)
* [FetchFieldValue](docs/sdk/README.md#fetchfieldvalue)
* [FetchModelBuild](docs/sdk/README.md#fetchmodelbuild)
* [FetchQuery](docs/sdk/README.md#fetchquery)
* [FetchSample](docs/sdk/README.md#fetchsample)
* [FetchStyleSheet](docs/sdk/README.md#fetchstylesheet) - Returns Style sheet JSON object for the Assistant
* [FetchTask](docs/sdk/README.md#fetchtask)
* [FetchTaskActions](docs/sdk/README.md#fetchtaskactions) - Returns JSON actions for the Task.
* [FetchTaskStatistics](docs/sdk/README.md#fetchtaskstatistics)
* [FetchWebhook](docs/sdk/README.md#fetchwebhook)
* [ListAssistant](docs/sdk/README.md#listassistant)
* [ListField](docs/sdk/README.md#listfield)
* [ListFieldType](docs/sdk/README.md#listfieldtype)
* [ListFieldValue](docs/sdk/README.md#listfieldvalue)
* [ListModelBuild](docs/sdk/README.md#listmodelbuild)
* [ListQuery](docs/sdk/README.md#listquery)
* [ListSample](docs/sdk/README.md#listsample)
* [ListTask](docs/sdk/README.md#listtask)
* [ListWebhook](docs/sdk/README.md#listwebhook)
* [UpdateAssistant](docs/sdk/README.md#updateassistant)
* [UpdateDefaults](docs/sdk/README.md#updatedefaults)
* [UpdateFieldType](docs/sdk/README.md#updatefieldtype)
* [UpdateModelBuild](docs/sdk/README.md#updatemodelbuild)
* [UpdateQuery](docs/sdk/README.md#updatequery)
* [UpdateRestoreAssistant](docs/sdk/README.md#updaterestoreassistant)
* [UpdateSample](docs/sdk/README.md#updatesample)
* [UpdateStyleSheet](docs/sdk/README.md#updatestylesheet) - Updates the style sheet for an Assistant identified by `assistant_sid`.
* [UpdateTask](docs/sdk/README.md#updatetask)
* [UpdateTaskActions](docs/sdk/README.md#updatetaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [UpdateWebhook](docs/sdk/README.md#updatewebhook)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
