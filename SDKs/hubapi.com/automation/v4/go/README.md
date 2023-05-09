# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/automation/v4/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCompleteCompleteBatch(ctx, shared.BatchInputCallbackCompletionBatchRequest{
        Inputs: []shared.CallbackCompletionBatchRequest{
            shared.CallbackCompletionBatchRequest{
                CallbackID: "provident",
                OutputFields: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
            },
            shared.CallbackCompletionBatchRequest{
                CallbackID: "error",
                OutputFields: map[string]string{
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
            },
            shared.CallbackCompletionBatchRequest{
                CallbackID: "tempora",
                OutputFields: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            },
        },
    }, operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Callbacks](docs/callbacks/README.md)

* [PostAutomationV4ActionsCallbacksCompleteCompleteBatch](docs/callbacks/README.md#postautomationv4actionscallbackscompletecompletebatch) - Complete a batch of callbacks
* [PostAutomationV4ActionsCallbacksCallbackIDCompleteComplete](docs/callbacks/README.md#postautomationv4actionscallbackscallbackidcompletecomplete) - Complete a callback

### [Definitions](docs/definitions/README.md)

* [DeleteAutomationV4ActionsAppIDDefinitionIDArchive](docs/definitions/README.md#deleteautomationv4actionsappiddefinitionidarchive) - Archive a custom action
* [GetAutomationV4ActionsAppIDDefinitionIDGetByID](docs/definitions/README.md#getautomationv4actionsappiddefinitionidgetbyid) - Get a custom action
* [GetAutomationV4ActionsAppIDGetPage](docs/definitions/README.md#getautomationv4actionsappidgetpage) - Get all custom actions
* [PatchAutomationV4ActionsAppIDDefinitionIDUpdate](docs/definitions/README.md#patchautomationv4actionsappiddefinitionidupdate) - Update a custom action
* [PostAutomationV4ActionsAppIDCreate](docs/definitions/README.md#postautomationv4actionsappidcreate) - Create new custom action

### [Functions](docs/functions/README.md)

* [DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive](docs/functions/README.md#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidarchive) - Delete a custom action function
* [DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType](docs/functions/README.md#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypearchivebyfunctiontype) - Delete a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidgetbyid) - Get a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsfunctiontypegetbyfunctiontype) - Get a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage](docs/functions/README.md#getautomationv4actionsappiddefinitionidfunctionsgetpage) - Get all custom action functions
* [PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace](docs/functions/README.md#putautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidcreateorreplace) - Create or replace a custom action function
* [PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType](docs/functions/README.md#putautomationv4actionsappiddefinitionidfunctionsfunctiontypecreateorreplacebyfunctiontype) - Create or replace a custom action function

### [Revisions](docs/revisions/README.md)

* [GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID](docs/revisions/README.md#getautomationv4actionsappiddefinitionidrevisionsrevisionidgetbyid) - Get a revision for a custom action
* [GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage](docs/revisions/README.md#getautomationv4actionsappiddefinitionidrevisionsgetpage) - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
