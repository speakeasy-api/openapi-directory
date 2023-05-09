# callbacks

## Overview

Operations to complete callbacks for custom workflow actions.

### Available Operations

* [postAutomationV4ActionsCallbacksCompleteCompleteBatch](#postautomationv4actionscallbackscompletecompletebatch) - Complete a batch of callbacks
* [postAutomationV4ActionsCallbacksCallbackIdCompleteComplete](#postautomationv4actionscallbackscallbackidcompletecomplete) - Complete a callback

## postAutomationV4ActionsCallbacksCompleteCompleteBatch

Completes the given action callbacks.

### Example Usage

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
                                add(new CallbackCompletionBatchRequest("hic",                 new java.util.HashMap<String, String>() {{
                                                    put("totam", "beatae");
                                                    put("commodi", "molestiae");
                                                    put("modi", "qui");
                                                    put("impedit", "cum");
                                                }}) {{
                                    callbackId = "porro";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                        put("fugit", "deleniti");
                                    }};
                                }}),
                                add(new CallbackCompletionBatchRequest("perferendis",                 new java.util.HashMap<String, String>() {{
                                                    put("natus", "sed");
                                                    put("iste", "dolor");
                                                }}) {{
                                    callbackId = "esse";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "aspernatur");
                                    }};
                                }}),
                                add(new CallbackCompletionBatchRequest("corporis",                 new java.util.HashMap<String, String>() {{
                                                    put("iure", "saepe");
                                                    put("quidem", "architecto");
                                                    put("ipsa", "reiciendis");
                                                }}) {{
                                    callbackId = "natus";
                                    outputFields = new java.util.HashMap<String, String>() {{
                                        put("hic", "saepe");
                                        put("fuga", "in");
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

## postAutomationV4ActionsCallbacksCallbackIdCompleteComplete

Completes the given action callback.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse;
import org.openapis.openapi.models.operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;
import org.openapis.openapi.models.shared.CallbackCompletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest req = new PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest(                new CallbackCompletionRequest(                new java.util.HashMap<String, String>() {{
                                                put("mollitia", "laborum");
                                                put("dolores", "dolorem");
                                                put("corporis", "explicabo");
                                            }});, "nobis");            

            PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse res = sdk.callbacks.postAutomationV4ActionsCallbacksCallbackIdCompleteComplete(req, new PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity() {{
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
