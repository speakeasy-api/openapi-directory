# rootVmwareHierarchy

## Overview

VMware hierarchy.

### Available Operations

* [getVmwareHierarchyExport](#getvmwarehierarchyexport) - Get Available VMware Hierarchy Objects for Export Operations
* [getVmwareHierarchyObject](#getvmwarehierarchyobject) - Get VMware Hierarchy Object Information

## getVmwareHierarchyExport

Get VMware Clusters, Hosts, and Resource Pool hierarchy objects that are available as the target for Virtual Machine Export operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareHierarchyExportRequest;
import org.openapis.openapi.models.operations.GetVmwareHierarchyExportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reiciendis", "labore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareHierarchyExportRequest req = new GetVmwareHierarchyExportRequest() {{
                rootId = "vero";
            }};            

            GetVmwareHierarchyExportResponse res = sdk.rootVmwareHierarchy.getVmwareHierarchyExport(req);

            if (res.vmwareHierarchyInfoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareHierarchyObject

Get VMware Clusters, Hosts, and Resource Pool hierarchy object detail information by object ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareHierarchyObjectRequest;
import org.openapis.openapi.models.operations.GetVmwareHierarchyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eos", "quas") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareHierarchyObjectRequest req = new GetVmwareHierarchyObjectRequest("quasi");            

            GetVmwareHierarchyObjectResponse res = sdk.rootVmwareHierarchy.getVmwareHierarchyObject(req);

            if (res.vmwareHierarchyInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
