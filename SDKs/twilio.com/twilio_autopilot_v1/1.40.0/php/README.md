# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAssistant`
* `createField`
* `createFieldType`
* `createFieldValue`
* `createModelBuild`
* `createQuery`
* `createSample`
* `createTask`
* `createWebhook`
* `deleteAssistant`
* `deleteField`
* `deleteFieldType`
* `deleteFieldValue`
* `deleteModelBuild`
* `deleteQuery`
* `deleteSample`
* `deleteTask`
* `deleteWebhook`
* `fetchAssistant`
* `fetchDefaults`
* `fetchDialogue`
* `fetchField`
* `fetchFieldType`
* `fetchFieldValue`
* `fetchModelBuild`
* `fetchQuery`
* `fetchSample`
* `fetchStyleSheet` - Returns Style sheet JSON object for the Assistant
* `fetchTask`
* `fetchTaskActions` - Returns JSON actions for the Task.
* `fetchTaskStatistics`
* `fetchWebhook`
* `listAssistant`
* `listField`
* `listFieldType`
* `listFieldValue`
* `listModelBuild`
* `listQuery`
* `listSample`
* `listTask`
* `listWebhook`
* `updateAssistant`
* `updateDefaults`
* `updateFieldType`
* `updateModelBuild`
* `updateQuery`
* `updateRestoreAssistant`
* `updateSample`
* `updateStyleSheet` - Updates the style sheet for an Assistant identified by `assistant_sid`.
* `updateTask`
* `updateTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `updateWebhook`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
