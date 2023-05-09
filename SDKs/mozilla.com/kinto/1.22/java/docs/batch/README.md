# batch

### Available Operations

* [batch](#batch)

## batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchBatchPayloadSchema;
import org.openapis.openapi.models.operations.BatchBatchPayloadSchemaDefaults;
import org.openapis.openapi.models.operations.BatchBatchPayloadSchemaDefaultsMethodEnum;
import org.openapis.openapi.models.operations.BatchBatchPayloadSchemaRequests;
import org.openapis.openapi.models.operations.BatchBatchPayloadSchemaRequestsMethodEnum;
import org.openapis.openapi.models.operations.BatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchBatchPayloadSchema req = new BatchBatchPayloadSchema(                new org.openapis.openapi.models.operations.BatchBatchPayloadSchemaRequests[]{{
                                add(new BatchBatchPayloadSchemaRequests("excepturi") {{
                                    body = new java.util.HashMap<String, Object>() {{
                                        put("suscipit", "iure");
                                        put("magnam", "debitis");
                                        put("ipsa", "delectus");
                                    }};
                                    headers = new java.util.HashMap<String, Object>() {{
                                        put("suscipit", "molestiae");
                                        put("minus", "placeat");
                                    }};
                                    method = BatchBatchPayloadSchemaRequestsMethodEnum.TRACE;
                                    path = "iusto";
                                }}),
                                add(new BatchBatchPayloadSchemaRequests("sapiente") {{
                                    body = new java.util.HashMap<String, Object>() {{
                                        put("recusandae", "temporibus");
                                        put("ab", "quis");
                                    }};
                                    headers = new java.util.HashMap<String, Object>() {{
                                        put("deserunt", "perferendis");
                                    }};
                                    method = BatchBatchPayloadSchemaRequestsMethodEnum.DELETE;
                                    path = "repellendus";
                                }}),
                                add(new BatchBatchPayloadSchemaRequests("hic") {{
                                    body = new java.util.HashMap<String, Object>() {{
                                        put("odit", "at");
                                        put("at", "maiores");
                                        put("molestiae", "quod");
                                        put("quod", "esse");
                                    }};
                                    headers = new java.util.HashMap<String, Object>() {{
                                        put("porro", "dolorum");
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                    }};
                                    method = BatchBatchPayloadSchemaRequestsMethodEnum.HEAD;
                                    path = "deleniti";
                                }}),
                            }}) {{
                defaults = new BatchBatchPayloadSchemaDefaults() {{
                    body = new java.util.HashMap<String, Object>() {{
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                        put("modi", "qui");
                        put("impedit", "cum");
                    }};
                    headers = new java.util.HashMap<String, Object>() {{
                        put("ipsum", "excepturi");
                        put("aspernatur", "perferendis");
                    }};
                    method = BatchBatchPayloadSchemaDefaultsMethodEnum.DELETE;
                    path = "natus";
                }};;
            }};            

            BatchResponse res = sdk.batch.batch(req);

            if (res.batchResponseBodySchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
