# targetGroups

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
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmTargetGroupRequest req = new CreateNetworkSmTargetGroupRequest("voluptatem") {{
                requestBody = new CreateNetworkSmTargetGroupRequestBody() {{
                    name = "Nick Tremblay";
                    scope = "quibusdam";
                }};;
            }};            

            CreateNetworkSmTargetGroupResponse res = sdk.targetGroups.createNetworkSmTargetGroup(req);

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
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSmTargetGroupRequest req = new DeleteNetworkSmTargetGroupRequest("tenetur", "perspiciatis");            

            DeleteNetworkSmTargetGroupResponse res = sdk.targetGroups.deleteNetworkSmTargetGroup(req);

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
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupRequest req = new GetNetworkSmTargetGroupRequest("ex", "repellat") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupResponse res = sdk.targetGroups.getNetworkSmTargetGroup(req);

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
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupsRequest req = new GetNetworkSmTargetGroupsRequest("aliquam") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupsResponse res = sdk.targetGroups.getNetworkSmTargetGroups(req);

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
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmTargetGroupRequest req = new UpdateNetworkSmTargetGroupRequest("libero", "corrupti") {{
                requestBody = new UpdateNetworkSmTargetGroupRequestBody() {{
                    name = "Charlotte Boyer";
                    scope = "reiciendis";
                }};;
            }};            

            UpdateNetworkSmTargetGroupResponse res = sdk.targetGroups.updateNetworkSmTargetGroup(req);

            if (res.updateNetworkSmTargetGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
