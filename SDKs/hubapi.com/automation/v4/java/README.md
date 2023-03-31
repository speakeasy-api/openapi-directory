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

import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse;
import org.openapis.openapi.models.shared.BatchInputCallbackCompletionBatchRequest;
import org.openapis.openapi.models.shared.CallbackCompletionBatchRequest;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest req = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest() {{
                security = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BatchInputCallbackCompletionBatchRequest() {{
                    inputs = new org.openapis.openapi.models.shared.CallbackCompletionBatchRequest[]{{
                        add(new CallbackCompletionBatchRequest() {{
                            callbackId = "provident";
                            outputFields = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "unde");
                                put("nulla", "corrupti");
                                put("illum", "vel");
                            }};
                        }}),
                        add(new CallbackCompletionBatchRequest() {{
                            callbackId = "error";
                            outputFields = new java.util.HashMap<String, String>() {{
                                put("suscipit", "iure");
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                        }}),
                        add(new CallbackCompletionBatchRequest() {{
                            callbackId = "tempora";
                            outputFields = new java.util.HashMap<String, String>() {{
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                        }}),
                    }};
                }};
            }};            

            PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse res = sdk.callbacks.postAutomationV4ActionsCallbacksCompleteCompleteBatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### callbacks

* `postAutomationV4ActionsCallbacksCompleteCompleteBatch` - Complete a batch of callbacks
* `postAutomationV4ActionsCallbacksCallbackIdCompleteComplete` - Complete a callback

### definitions

* `deleteAutomationV4ActionsAppIdDefinitionIdArchive` - Archive a custom action
* `getAutomationV4ActionsAppIdDefinitionIdGetById` - Get a custom action
* `getAutomationV4ActionsAppIdGetPage` - Get all custom actions
* `patchAutomationV4ActionsAppIdDefinitionIdUpdate` - Update a custom action
* `postAutomationV4ActionsAppIdCreate` - Create new custom action

### functions

* `deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive` - Delete a custom action function
* `deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType` - Delete a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById` - Get a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType` - Get a custom action function
* `getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage` - Get all custom action functions
* `putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace` - Create or replace a custom action function
* `putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType` - Create or replace a custom action function

### revisions

* `getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById` - Get a revision for a custom action
* `getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage` - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
