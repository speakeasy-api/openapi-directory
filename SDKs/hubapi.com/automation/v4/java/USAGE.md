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