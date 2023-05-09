# group

## Overview

A group is a cohort of patients within an organization. The creation of groups allows for the segmentation of dashboards and analytics. For example, a group might correspond to the patients in a particular practice or the employees of a particular employer.

### Available Operations

* [createGroup](#creategroup) - Create a group
* [fetchGroup](#fetchgroup) - Get a group
* [fetchGroups](#fetchgroups) - List groups

## createGroup

Create a group record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.CreateGroupRequestInput;
import org.openapis.openapi.models.shared.GroupResourceAttributes;
import org.openapis.openapi.models.shared.GroupResourceInput;
import org.openapis.openapi.models.shared.GroupResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateGroupRequestInput req = new CreateGroupRequestInput(                new GroupResourceInput(                new GroupResourceAttributes("Team Health") {{
                                                bio = "Team Health is all about the patient experience.";
                                            }};, "57b36e3c04ad8c2224f2af38", GroupResourceTypeEnum.GROUP););            

            CreateGroupResponse res = sdk.group.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchGroup

Get a group record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchGroupRequest;
import org.openapis.openapi.models.operations.FetchGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchGroupRequest req = new FetchGroupRequest("in");            

            FetchGroupResponse res = sdk.group.fetchGroup(req);

            if (res.fetchGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchGroups

Get a list of groups matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchGroupsRequest;
import org.openapis.openapi.models.operations.FetchGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchGroupsRequest req = new FetchGroupsRequest("eius") {{
                filterName = "libero";
            }};            

            FetchGroupsResponse res = sdk.group.fetchGroups(req);

            if (res.fetchGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
