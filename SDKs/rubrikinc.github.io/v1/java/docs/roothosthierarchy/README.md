# rootHostHierarchy

## Overview

Host hierarchy.

### Available Operations

* [getHostHierarchyChildren](#gethosthierarchychildren) - Get immediate descendant objects
* [getHostHierarchyObject](#gethosthierarchyobject) - Get summary of a host/share hierarchy object

## getHostHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenObjectTypeEnum;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenRequest;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenResponse;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenSLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenSortByEnum;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenSortOrderEnum;
import org.openapis.openapi.models.operations.GetHostHierarchyChildrenVendorTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("distinctio", "omnis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHostHierarchyChildrenRequest req = new GetHostHierarchyChildrenRequest("delectus") {{
                effectiveSlaDomainId = "minima";
                exportPoint = "praesentium";
                limit = 802692;
                name = "Paulette Lowe";
                objectType = GetHostHierarchyChildrenObjectTypeEnum.HOST;
                offset = 520761;
                operatingSystemType = GetHostHierarchyChildrenOperatingSystemTypeEnum.WINDOWS;
                primaryClusterId = "modi";
                slaAssignment = GetHostHierarchyChildrenSLAAssignmentEnum.UNASSIGNED;
                sortBy = GetHostHierarchyChildrenSortByEnum.HOSTNAME;
                sortOrder = GetHostHierarchyChildrenSortOrderEnum.ASC;
                templateId = "ipsam";
                vendorType = GetHostHierarchyChildrenVendorTypeEnum.NET_APP;
            }};            

            GetHostHierarchyChildrenResponse res = sdk.rootHostHierarchy.getHostHierarchyChildren(req);

            if (res.hostHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHostHierarchyObject

Retrieve details for the specified object in the host/share hierarchy.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostHierarchyObjectRequest;
import org.openapis.openapi.models.operations.GetHostHierarchyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "quasi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHostHierarchyObjectRequest req = new GetHostHierarchyObjectRequest("non");            

            GetHostHierarchyObjectResponse res = sdk.rootHostHierarchy.getHostHierarchyObject(req);

            if (res.getHostHierarchyObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
