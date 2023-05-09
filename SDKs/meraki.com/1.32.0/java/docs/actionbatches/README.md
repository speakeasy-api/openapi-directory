# actionBatches

### Available Operations

* [createOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [deleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [getOrganizationActionBatch](#getorganizationactionbatch) - Return an action batch
* [getOrganizationActionBatches](#getorganizationactionbatches) - Return the list of action batches in the organization
* [updateOrganizationActionBatch](#updateorganizationactionbatch) - Update an action batch

## createOrganizationActionBatch

Create an action batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationActionBatchRequest;
import org.openapis.openapi.models.operations.CreateOrganizationActionBatchRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationActionBatchRequestBodyActions;
import org.openapis.openapi.models.operations.CreateOrganizationActionBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationActionBatchRequest req = new CreateOrganizationActionBatchRequest(                new CreateOrganizationActionBatchRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationActionBatchRequestBodyActions[]{{
                                                add(new CreateOrganizationActionBatchRequestBodyActions("aliquid", "laborum") {{
                                                    body = new java.util.HashMap<String, Object>() {{
                                                        put("magnam", "cumque");
                                                    }};
                                                    operation = "facere";
                                                    resource = "ea";
                                                }}),
                                                add(new CreateOrganizationActionBatchRequestBodyActions("deleniti", "sapiente") {{
                                                    body = new java.util.HashMap<String, Object>() {{
                                                        put("non", "occaecati");
                                                        put("enim", "accusamus");
                                                        put("delectus", "quidem");
                                                        put("provident", "nam");
                                                    }};
                                                    operation = "id";
                                                    resource = "blanditiis";
                                                }}),
                                                add(new CreateOrganizationActionBatchRequestBodyActions("omnis", "molestiae") {{
                                                    body = new java.util.HashMap<String, Object>() {{
                                                        put("deserunt", "nisi");
                                                    }};
                                                    operation = "vel";
                                                    resource = "natus";
                                                }}),
                                            }}) {{
                                confirmed = false;
                                synchronous = false;
                            }};, "perferendis");            

            CreateOrganizationActionBatchResponse res = sdk.actionBatches.createOrganizationActionBatch(req);

            if (res.createOrganizationActionBatch201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationActionBatch

Delete an action batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationActionBatchRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationActionBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationActionBatchRequest req = new DeleteOrganizationActionBatchRequest("magnam", "distinctio");            

            DeleteOrganizationActionBatchResponse res = sdk.actionBatches.deleteOrganizationActionBatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationActionBatch

Return an action batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationActionBatchRequest;
import org.openapis.openapi.models.operations.GetOrganizationActionBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationActionBatchRequest req = new GetOrganizationActionBatchRequest("labore", "labore");            

            GetOrganizationActionBatchResponse res = sdk.actionBatches.getOrganizationActionBatch(req);

            if (res.getOrganizationActionBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationActionBatches

Return the list of action batches in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationActionBatchesRequest;
import org.openapis.openapi.models.operations.GetOrganizationActionBatchesResponse;
import org.openapis.openapi.models.operations.GetOrganizationActionBatchesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationActionBatchesRequest req = new GetOrganizationActionBatchesRequest("natus") {{
                status = GetOrganizationActionBatchesStatusEnum.PENDING;
            }};            

            GetOrganizationActionBatchesResponse res = sdk.actionBatches.getOrganizationActionBatches(req);

            if (res.getOrganizationActionBatches200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationActionBatch

Update an action batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationActionBatchRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationActionBatchRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationActionBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationActionBatchRequest req = new UpdateOrganizationActionBatchRequest("vero", "aspernatur") {{
                requestBody = new UpdateOrganizationActionBatchRequestBody() {{
                    confirmed = false;
                    synchronous = false;
                }};;
            }};            

            UpdateOrganizationActionBatchResponse res = sdk.actionBatches.updateOrganizationActionBatch(req);

            if (res.updateOrganizationActionBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
