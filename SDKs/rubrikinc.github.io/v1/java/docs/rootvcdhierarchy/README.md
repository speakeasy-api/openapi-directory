# rootVcdHierarchy

## Overview

vCloud hierarchy.

### Available Operations

* [getVcdHierarchyChildrenV1](#getvcdhierarchychildrenv1) - Get immediate descendant objects
* [getVcdHierarchyDescendantsV1](#getvcdhierarchydescendantsv1) - Get list of descendant objects
* [getVcdHierarchyObjectV1](#getvcdhierarchyobjectv1) - Get summary of a vCD hierarchy object

## getVcdHierarchyChildrenV1

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1ObjectTypeEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1Request;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1Response;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1SLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1SnappableStatusEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1SortByEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyChildrenV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloremque", "tempora") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdHierarchyChildrenV1Request req = new GetVcdHierarchyChildrenV1Request("perspiciatis") {{
                effectiveSlaDomainId = "quam";
                isRelic = false;
                limit = 541009;
                name = "Brett Brakus";
                objectType = GetVcdHierarchyChildrenV1ObjectTypeEnum.CLUSTER;
                offset = 801816;
                primaryClusterId = "a";
                slaAssignment = GetVcdHierarchyChildrenV1SLAAssignmentEnum.DERIVED;
                snappableStatus = GetVcdHierarchyChildrenV1SnappableStatusEnum.PROTECTABLE;
                sortBy = GetVcdHierarchyChildrenV1SortByEnum.NAME;
                sortOrder = GetVcdHierarchyChildrenV1SortOrderEnum.ASC;
            }};            

            GetVcdHierarchyChildrenV1Response res = sdk.rootVcdHierarchy.getVcdHierarchyChildrenV1(req);

            if (res.vcdHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcdHierarchyDescendantsV1

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1ObjectTypeEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1Request;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1Response;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1SLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1SnappableStatusEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1SortByEnum;
import org.openapis.openapi.models.operations.GetVcdHierarchyDescendantsV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("atque", "totam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdHierarchyDescendantsV1Request req = new GetVcdHierarchyDescendantsV1Request("tenetur") {{
                effectiveSlaDomainId = "voluptate";
                isRelic = false;
                limit = 461754;
                name = "Justin Willms";
                objectType = GetVcdHierarchyDescendantsV1ObjectTypeEnum.ORG;
                offset = 77992;
                primaryClusterId = "facere";
                slaAssignment = GetVcdHierarchyDescendantsV1SLAAssignmentEnum.UNASSIGNED;
                snappableStatus = GetVcdHierarchyDescendantsV1SnappableStatusEnum.PROTECTABLE;
                sortBy = GetVcdHierarchyDescendantsV1SortByEnum.CONNECTION_STATUS;
                sortOrder = GetVcdHierarchyDescendantsV1SortOrderEnum.ASC;
            }};            

            GetVcdHierarchyDescendantsV1Response res = sdk.rootVcdHierarchy.getVcdHierarchyDescendantsV1(req);

            if (res.vcdHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcdHierarchyObjectV1

Retrieve details for the specified object in the vCD hierarchy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdHierarchyObjectV1Request;
import org.openapis.openapi.models.operations.GetVcdHierarchyObjectV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ex", "consectetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdHierarchyObjectV1Request req = new GetVcdHierarchyObjectV1Request("maiores");            

            GetVcdHierarchyObjectV1Response res = sdk.rootVcdHierarchy.getVcdHierarchyObjectV1(req);

            if (res.vcdHierarchyObjectSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
