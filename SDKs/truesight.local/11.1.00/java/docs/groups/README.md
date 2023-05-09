# groups

## Overview

API operations to interact with the monitored Groups.

### Available Operations

* [getGroups](#getgroups) - Gets all group summaries.
* [getOneGroup](#getonegroup) - Gets detailed information about a specific group.
* [updateEnergyCost](#updateenergycost) - Updates the values of the energy footprint parameter for a specific group.

## getGroups

Lists the available GroupSummary instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsDirectionEnum;
import org.openapis.openapi.models.operations.GetGroupsRequest;
import org.openapis.openapi.models.operations.GetGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsRequest req = new GetGroupsRequest() {{
                direction = GetGroupsDirectionEnum.ASC;
                limit = 264555;
                page = "qui";
                sort = "impedit";
            }};            

            GetGroupsResponse res = sdk.groups.getGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneGroup

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneGroupRequest;
import org.openapis.openapi.models.operations.GetOneGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneGroupRequest req = new GetOneGroupRequest("cum");            

            GetOneGroupResponse res = sdk.groups.getOneGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnergyCost

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnergyCostRequest;
import org.openapis.openapi.models.operations.UpdateEnergyCostResponse;
import org.openapis.openapi.models.shared.GroupConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEnergyCostRequest req = new UpdateEnergyCostRequest("esse") {{
                groupConfiguration = new GroupConfiguration() {{
                    co2Emission = 0.3;
                    energyCost = 0.3;
                    groupNameFilter = "Group [0-9]+";
                }};;
            }};            

            UpdateEnergyCostResponse res = sdk.groups.updateEnergyCost(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
