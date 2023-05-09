# placementGroups

## Overview

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different instances within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of instances within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some instances might fail together.


### Available Operations

* [deletePlacementGroupsId](#deleteplacementgroupsid) - Delete a PlacementGroup
* [getPlacementGroups](#getplacementgroups) - Get all PlacementGroups
* [getPlacementGroupsId](#getplacementgroupsid) - Get a PlacementGroup
* [postPlacementGroups](#postplacementgroups) - Create a PlacementGroup
* [putPlacementGroupsId](#putplacementgroupsid) - Update a PlacementGroup

## deletePlacementGroupsId

Deletes a PlacementGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePlacementGroupsIdRequest;
import org.openapis.openapi.models.operations.DeletePlacementGroupsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePlacementGroupsIdRequest req = new DeletePlacementGroupsIdRequest(58029L);            

            DeletePlacementGroupsIdResponse res = sdk.placementGroups.deletePlacementGroupsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlacementGroups

Returns all PlacementGroup objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlacementGroupsRequest;
import org.openapis.openapi.models.operations.GetPlacementGroupsResponse;
import org.openapis.openapi.models.operations.GetPlacementGroupsSortEnum;
import org.openapis.openapi.models.operations.GetPlacementGroupsTypeParameterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlacementGroupsRequest req = new GetPlacementGroupsRequest() {{
                labelSelector = "ipsa";
                name = "Viola Hahn";
                sort = GetPlacementGroupsSortEnum.CREATED_DESC;
                type = GetPlacementGroupsTypeParameterTypeEnum.SPREAD;
            }};            

            GetPlacementGroupsResponse res = sdk.placementGroups.getPlacementGroups(req);

            if (res.placementGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlacementGroupsId

Gets a specific PlacementGroup object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlacementGroupsIdRequest;
import org.openapis.openapi.models.operations.GetPlacementGroupsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlacementGroupsIdRequest req = new GetPlacementGroupsIdRequest(377752L);            

            GetPlacementGroupsIdResponse res = sdk.placementGroups.getPlacementGroupsId(req);

            if (res.placementGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPlacementGroups

Creates a new PlacementGroup.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPlacementGroupsCreatePlacementGroupRequest;
import org.openapis.openapi.models.operations.PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
import org.openapis.openapi.models.operations.PostPlacementGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPlacementGroupsCreatePlacementGroupRequest req = new PostPlacementGroupsCreatePlacementGroupRequest("my Placement Group", PostPlacementGroupsCreatePlacementGroupRequestTypeEnum.SPREAD) {{
                labels = new java.util.HashMap<String, Object>() {{
                    put("eos", "atque");
                    put("sit", "fugiat");
                    put("ab", "soluta");
                }};
            }};            

            PostPlacementGroupsResponse res = sdk.placementGroups.postPlacementGroups(req);

            if (res.createPlacementGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPlacementGroupsId

Updates the PlacementGroup properties.

Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPlacementGroupsIdRequest;
import org.openapis.openapi.models.operations.PutPlacementGroupsIdResponse;
import org.openapis.openapi.models.operations.PutPlacementGroupsIdUpdatePlacementGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPlacementGroupsIdRequest req = new PutPlacementGroupsIdRequest(679393L) {{
                requestBody = new PutPlacementGroupsIdUpdatePlacementGroupRequest() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("voluptate", "dolorum");
                        put("deleniti", "omnis");
                    }};
                    name = "my Placement Group";
                }};;
            }};            

            PutPlacementGroupsIdResponse res = sdk.placementGroups.putPlacementGroupsId(req);

            if (res.placementGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
