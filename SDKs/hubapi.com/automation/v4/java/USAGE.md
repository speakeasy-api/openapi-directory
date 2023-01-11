<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest req = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest() {{
                security = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity() {{
                    oauth2Legacy = new SchemeOauth2Legacy() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new BatchInputCallbackCompletionBatchRequest() {{
                    inputs = new openapisdk.models.shared.CallbackCompletionBatchRequest[]() {{
                        add(new CallbackCompletionBatchRequest() {{
                            callbackId = "quas";
                            outputFields = new java.util.HashMap<String, String>() {{
                                put("et", "qui");
                                put("dolor", "modi");
                                put("sint", "nesciunt");
                            }};
                        }}),
                        add(new CallbackCompletionBatchRequest() {{
                            callbackId = "autem";
                            outputFields = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "harum");
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