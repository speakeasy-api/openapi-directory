# rootFailoverClusterHierarchy

## Overview

Failover cluster hierarchy.

### Available Operations

* [getFailoverClusterHierarchyChildren](#getfailoverclusterhierarchychildren) - Get list of immediate descendant objects
* [getFailoverClusterHierarchyDescendants](#getfailoverclusterhierarchydescendants) - Get list of descendant objects
* [getFailoverClusterHierarchyObject](#getfailoverclusterhierarchyobject) - Get summary of a hierarchy object

## getFailoverClusterHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenObjectTypeEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenRequest;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenResponse;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenSLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenSortByEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyChildrenSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("earum", "facere") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFailoverClusterHierarchyChildrenRequest req = new GetFailoverClusterHierarchyChildrenRequest("numquam") {{
                configuredSlaDomainId = "doloribus";
                limit = 381760;
                name = "Rickey Ullrich";
                objectType = GetFailoverClusterHierarchyChildrenObjectTypeEnum.FAILOVER_CLUSTER_APP;
                offset = 992012;
                operatingSystemType = GetFailoverClusterHierarchyChildrenOperatingSystemTypeEnum.AIX;
                primaryClusterId = "non";
                slaAssignment = GetFailoverClusterHierarchyChildrenSLAAssignmentEnum.DERIVED;
                sortBy = GetFailoverClusterHierarchyChildrenSortByEnum.NAME;
                sortOrder = GetFailoverClusterHierarchyChildrenSortOrderEnum.ASC;
            }};            

            GetFailoverClusterHierarchyChildrenResponse res = sdk.rootFailoverClusterHierarchy.getFailoverClusterHierarchyChildren(req);

            if (res.failoverClusterHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverClusterHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsObjectTypeEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsRequest;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsResponse;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsSLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsSortByEnum;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyDescendantsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("a", "debitis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFailoverClusterHierarchyDescendantsRequest req = new GetFailoverClusterHierarchyDescendantsRequest("consectetur") {{
                configuredSlaDomainId = "corporis";
                limit = 689768;
                name = "Melissa Von PhD";
                objectType = GetFailoverClusterHierarchyDescendantsObjectTypeEnum.HOST_FAILOVER_CLUSTER;
                offset = 272437;
                operatingSystemType = GetFailoverClusterHierarchyDescendantsOperatingSystemTypeEnum.ANY;
                primaryClusterId = "voluptas";
                slaAssignment = GetFailoverClusterHierarchyDescendantsSLAAssignmentEnum.DIRECT;
                sortBy = GetFailoverClusterHierarchyDescendantsSortByEnum.NAME;
                sortOrder = GetFailoverClusterHierarchyDescendantsSortOrderEnum.ASC;
            }};            

            GetFailoverClusterHierarchyDescendantsResponse res = sdk.rootFailoverClusterHierarchy.getFailoverClusterHierarchyDescendants(req);

            if (res.failoverClusterHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFailoverClusterHierarchyObject

Retrieve details for the specified hierarchy object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyObjectRequest;
import org.openapis.openapi.models.operations.GetFailoverClusterHierarchyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nobis", "dolorum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFailoverClusterHierarchyObjectRequest req = new GetFailoverClusterHierarchyObjectRequest("adipisci");            

            GetFailoverClusterHierarchyObjectResponse res = sdk.rootFailoverClusterHierarchy.getFailoverClusterHierarchyObject(req);

            if (res.failoverClusterHierarchyObjectSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
