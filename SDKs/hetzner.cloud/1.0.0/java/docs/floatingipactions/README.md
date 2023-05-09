# floatingIPActions

### Available Operations

* [getFloatingIpsIdActions](#getfloatingipsidactions) - Get all Actions for a Floating IP
* [getFloatingIpsIdActionsActionId](#getfloatingipsidactionsactionid) - Get an Action for a Floating IP
* [postFloatingIpsIdActionsAssign](#postfloatingipsidactionsassign) - Assign a Floating IP to a Server
* [postFloatingIpsIdActionsChangeDnsPtr](#postfloatingipsidactionschangednsptr) - Change reverse DNS entry for a Floating IP
* [postFloatingIpsIdActionsChangeProtection](#postfloatingipsidactionschangeprotection) - Change Floating IP Protection
* [postFloatingIpsIdActionsUnassign](#postfloatingipsidactionsunassign) - Unassign a Floating IP

## getFloatingIpsIdActions

Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsRequest;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsResponse;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFloatingIpsIdActionsRequest req = new GetFloatingIpsIdActionsRequest(586513L) {{
                sort = GetFloatingIpsIdActionsSortParameterSortEnum.PROGRESS;
                status = GetFloatingIpsIdActionsStatusParameterStatusEnum.RUNNING;
            }};            

            GetFloatingIpsIdActionsResponse res = sdk.floatingIPActions.getFloatingIpsIdActions(req);

            if (res.getFloatingIpsIdActions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFloatingIpsIdActionsActionId

Returns a specific Action object for a Floating IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetFloatingIpsIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFloatingIpsIdActionsActionIdRequest req = new GetFloatingIpsIdActionsActionIdRequest(164940L, 828940L);            

            GetFloatingIpsIdActionsActionIdResponse res = sdk.floatingIPActions.getFloatingIpsIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFloatingIpsIdActionsAssign

Assigns a Floating IP to a Server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsAssignAssignFloatingIPRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsAssignRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsAssignResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFloatingIpsIdActionsAssignRequest req = new PostFloatingIpsIdActionsAssignRequest(369808L) {{
                requestBody = new PostFloatingIpsIdActionsAssignAssignFloatingIPRequest(42L);;
            }};            

            PostFloatingIpsIdActionsAssignResponse res = sdk.floatingIPActions.postFloatingIpsIdActionsAssign(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFloatingIpsIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to this Floating IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeDnsPtrRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeDnsPtrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFloatingIpsIdActionsChangeDnsPtrRequest req = new PostFloatingIpsIdActionsChangeDnsPtrRequest(4695L) {{
                requestBody = new PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest("server02.example.com", "1.2.3.4");;
            }};            

            PostFloatingIpsIdActionsChangeDnsPtrResponse res = sdk.floatingIPActions.postFloatingIpsIdActionsChangeDnsPtr(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFloatingIpsIdActionsChangeProtection

Changes the protection configuration of the Floating IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFloatingIpsIdActionsChangeProtectionRequest req = new PostFloatingIpsIdActionsChangeProtectionRequest(146441L) {{
                requestBody = new PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest() {{
                    delete = true;
                }};;
            }};            

            PostFloatingIpsIdActionsChangeProtectionResponse res = sdk.floatingIPActions.postFloatingIpsIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFloatingIpsIdActionsUnassign

Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsUnassignRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsIdActionsUnassignResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFloatingIpsIdActionsUnassignRequest req = new PostFloatingIpsIdActionsUnassignRequest(677817L);            

            PostFloatingIpsIdActionsUnassignResponse res = sdk.floatingIPActions.postFloatingIpsIdActionsUnassign(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
