# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantCreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.operations.CreateAssistantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssistantCreateAssistantRequest req = new CreateAssistantCreateAssistantRequest() {{
                callbackEvents = "corrupti";
                callbackUrl = "https://salty-stag.name";
                defaults = "nulla";
                friendlyName = "corrupti";
                logQueries = false;
                styleSheet = "illum";
                uniqueName = "vel";
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req, new CreateAssistantSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.autopilotV1Assistant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAssistant](docs/sdk/README.md#createassistant)
* [createField](docs/sdk/README.md#createfield)
* [createFieldType](docs/sdk/README.md#createfieldtype)
* [createFieldValue](docs/sdk/README.md#createfieldvalue)
* [createModelBuild](docs/sdk/README.md#createmodelbuild)
* [createQuery](docs/sdk/README.md#createquery)
* [createSample](docs/sdk/README.md#createsample)
* [createTask](docs/sdk/README.md#createtask)
* [createWebhook](docs/sdk/README.md#createwebhook)
* [deleteAssistant](docs/sdk/README.md#deleteassistant)
* [deleteField](docs/sdk/README.md#deletefield)
* [deleteFieldType](docs/sdk/README.md#deletefieldtype)
* [deleteFieldValue](docs/sdk/README.md#deletefieldvalue)
* [deleteModelBuild](docs/sdk/README.md#deletemodelbuild)
* [deleteQuery](docs/sdk/README.md#deletequery)
* [deleteSample](docs/sdk/README.md#deletesample)
* [deleteTask](docs/sdk/README.md#deletetask)
* [deleteWebhook](docs/sdk/README.md#deletewebhook)
* [fetchAssistant](docs/sdk/README.md#fetchassistant)
* [fetchDefaults](docs/sdk/README.md#fetchdefaults)
* [fetchDialogue](docs/sdk/README.md#fetchdialogue)
* [fetchField](docs/sdk/README.md#fetchfield)
* [fetchFieldType](docs/sdk/README.md#fetchfieldtype)
* [fetchFieldValue](docs/sdk/README.md#fetchfieldvalue)
* [fetchModelBuild](docs/sdk/README.md#fetchmodelbuild)
* [fetchQuery](docs/sdk/README.md#fetchquery)
* [fetchSample](docs/sdk/README.md#fetchsample)
* [fetchStyleSheet](docs/sdk/README.md#fetchstylesheet) - Returns Style sheet JSON object for the Assistant
* [fetchTask](docs/sdk/README.md#fetchtask)
* [fetchTaskActions](docs/sdk/README.md#fetchtaskactions) - Returns JSON actions for the Task.
* [fetchTaskStatistics](docs/sdk/README.md#fetchtaskstatistics)
* [fetchWebhook](docs/sdk/README.md#fetchwebhook)
* [listAssistant](docs/sdk/README.md#listassistant)
* [listField](docs/sdk/README.md#listfield)
* [listFieldType](docs/sdk/README.md#listfieldtype)
* [listFieldValue](docs/sdk/README.md#listfieldvalue)
* [listModelBuild](docs/sdk/README.md#listmodelbuild)
* [listQuery](docs/sdk/README.md#listquery)
* [listSample](docs/sdk/README.md#listsample)
* [listTask](docs/sdk/README.md#listtask)
* [listWebhook](docs/sdk/README.md#listwebhook)
* [updateAssistant](docs/sdk/README.md#updateassistant)
* [updateDefaults](docs/sdk/README.md#updatedefaults)
* [updateFieldType](docs/sdk/README.md#updatefieldtype)
* [updateModelBuild](docs/sdk/README.md#updatemodelbuild)
* [updateQuery](docs/sdk/README.md#updatequery)
* [updateRestoreAssistant](docs/sdk/README.md#updaterestoreassistant)
* [updateSample](docs/sdk/README.md#updatesample)
* [updateStyleSheet](docs/sdk/README.md#updatestylesheet) - Updates the style sheet for an Assistant identified by `assistant_sid`.
* [updateTask](docs/sdk/README.md#updatetask)
* [updateTaskActions](docs/sdk/README.md#updatetaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWebhook](docs/sdk/README.md#updatewebhook)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
