# groups

## Overview

Search, subscribe and unsubscribe to groups.

### Available Operations

* [getGroup](#getgroup) - Retrieve a group
* [getGroupsByIds](#getgroupsbyids) - Retrieve multiple groups
* [searchGroups](#searchgroups) - Search groups

## getGroup

Retrieve a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.operations.GetGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupRequest req = new GetGroupRequest("distinctio");            

            GetGroupResponse res = sdk.groups.getGroup(req, new GetGroupSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsByIds

Retrieve multiple groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsByIdsRequest;
import org.openapis.openapi.models.operations.GetGroupsByIdsResponse;
import org.openapis.openapi.models.operations.GetGroupsByIdsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsByIdsRequest req = new GetGroupsByIdsRequest("unde");            

            GetGroupsByIdsResponse res = sdk.groups.getGroupsByIds(req, new GetGroupsByIdsSecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchGroups

Search groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGroupsRequest;
import org.openapis.openapi.models.operations.SearchGroupsResponse;
import org.openapis.openapi.models.operations.SearchGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGroupsRequest req = new SearchGroupsRequest() {{
                country = "Mali";
                distance = 8472.52;
                latitude = 4236.55;
                longitude = 6235.64;
                name = "Rick Kertzmann";
                page = 56713L;
                perPage = 963663L;
                postalCode = "34785";
                region = "iusto";
            }};            

            SearchGroupsResponse res = sdk.groups.searchGroups(req, new SearchGroupsSecurity("excepturi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.searchGroups200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
