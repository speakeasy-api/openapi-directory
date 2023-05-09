# namedTagScope

### Available Operations

* [createNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [getNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [updateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group

## createNetworkSmTargetGroup

Add a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmTargetGroupRequest req = new CreateNetworkSmTargetGroupRequest("non") {{
                requestBody = new CreateNetworkSmTargetGroupRequestBody() {{
                    name = "Lloyd Mayer";
                    scope = "esse";
                }};;
            }};            

            CreateNetworkSmTargetGroupResponse res = sdk.namedTagScope.createNetworkSmTargetGroup(req);

            if (res.createNetworkSmTargetGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSmTargetGroupRequest req = new DeleteNetworkSmTargetGroupRequest("reprehenderit", "est");            

            DeleteNetworkSmTargetGroupResponse res = sdk.namedTagScope.deleteNetworkSmTargetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmTargetGroup

Return a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupRequest req = new GetNetworkSmTargetGroupRequest("sint", "accusamus") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupResponse res = sdk.namedTagScope.getNetworkSmTargetGroup(req);

            if (res.getNetworkSmTargetGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmTargetGroups

List the target groups in this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupsRequest req = new GetNetworkSmTargetGroupsRequest("hic") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupsResponse res = sdk.namedTagScope.getNetworkSmTargetGroups(req);

            if (res.getNetworkSmTargetGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSmTargetGroup

Update a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmTargetGroupRequest req = new UpdateNetworkSmTargetGroupRequest("asperiores", "ex") {{
                requestBody = new UpdateNetworkSmTargetGroupRequestBody() {{
                    name = "Miss Alyssa Wintheiser";
                    scope = "laborum";
                }};;
            }};            

            UpdateNetworkSmTargetGroupResponse res = sdk.namedTagScope.updateNetworkSmTargetGroup(req);

            if (res.updateNetworkSmTargetGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
