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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.BatchInputCallbackCompletionBatchRequest{
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
    }

    ctx := context.Background()
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCompleteCompleteBatch(ctx, req, operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity{
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


### Callbacks

* `PostAutomationV4ActionsCallbacksCompleteCompleteBatch` - Complete a batch of callbacks
* `PostAutomationV4ActionsCallbacksCallbackIDCompleteComplete` - Complete a callback

### Definitions

* `DeleteAutomationV4ActionsAppIDDefinitionIDArchive` - Archive a custom action
* `GetAutomationV4ActionsAppIDDefinitionIDGetByID` - Get a custom action
* `GetAutomationV4ActionsAppIDGetPage` - Get all custom actions
* `PatchAutomationV4ActionsAppIDDefinitionIDUpdate` - Update a custom action
* `PostAutomationV4ActionsAppIDCreate` - Create new custom action

### Functions

* `DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive` - Delete a custom action function
* `DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType` - Delete a custom action function
* `GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID` - Get a custom action function
* `GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType` - Get a custom action function
* `GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage` - Get all custom action functions
* `PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace` - Create or replace a custom action function
* `PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType` - Create or replace a custom action function

### Revisions

* `GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID` - Get a revision for a custom action
* `GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage` - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
