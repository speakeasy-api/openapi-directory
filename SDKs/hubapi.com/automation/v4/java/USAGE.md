<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;
import org.openapis.openapi.models.shared.BatchInputCallbackCompletionBatchRequest;
import org.openapis.openapi.models.shared.CallbackCompletionBatchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchInputCallbackCompletionBatchRequest req = new BatchInputCallbackCompletionBatchRequest(                new org.openapis.openapi.models.shared.CallbackCompletionBatchRequest[]{{
                                add(new CallbackCompletionBatchRequest("error",                 new java.util.HashMap<String, String>() {{
                                                    put("suscipit", "iure");
                                                    put("magnam", "debitis");
                                                    put("ipsa", "delectus");
                                                }}) {{
                                    callbackId = "provident";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("quibusdam", "unde");
                                        put("nulla", "corrupti");
                                        put("illum", "vel");
                                    }};
                                }}),
                                add(new CallbackCompletionBatchRequest("iusto",                 new java.util.HashMap<String, String>() {{
                                                    put("nisi", "recusandae");
                                                    put("temporibus", "ab");
                                                    put("quis", "veritatis");
                                                }}) {{
                                    callbackId = "tempora";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("molestiae", "minus");
                                        put("placeat", "voluptatum");
                                    }};
                                }}),
                                add(new CallbackCompletionBatchRequest("sapiente",                 new java.util.HashMap<String, String>() {{
                                                    put("odit", "at");
                                                    put("at", "maiores");
                                                    put("molestiae", "quod");
                                                    put("quod", "esse");
                                                }}) {{
                                    callbackId = "deserunt";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("ipsam", "repellendus");
                                    }};
                                }}),
                            }});            

            PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse res = sdk.callbacks.postAutomationV4ActionsCallbacksCompleteCompleteBatch(req, new PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->