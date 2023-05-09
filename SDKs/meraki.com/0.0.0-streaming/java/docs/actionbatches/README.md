# actionBatches

### Available Operations

* [createOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [deleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
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
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationActionBatchRequest req = new CreateOrganizationActionBatchRequest(                new CreateOrganizationActionBatchRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationActionBatchRequestBodyActions[]{{
                                                add(new CreateOrganizationActionBatchRequestBodyActions("maiores", "molestiae") {{
                                                    body = new java.util.HashMap<String, Object>() {{
                                                        put("repellendus", "sapiente");
                                                        put("quo", "odit");
                                                    }};
                                                    operation = "at";
                                                    resource = "at";
                                                }}),
                                            }}) {{
                                confirmed = false;
                                synchronous = false;
                            }};, "quod");            

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
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationActionBatchRequest req = new DeleteOrganizationActionBatchRequest("esse", "totam");            

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
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationActionBatchesRequest req = new GetOrganizationActionBatchesRequest("dolorum") {{
                status = GetOrganizationActionBatchesStatusEnum.COMPLETED;
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
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationActionBatchRequest req = new UpdateOrganizationActionBatchRequest("officia", "occaecati") {{
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
