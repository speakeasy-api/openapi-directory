# rootVmwareHost

## Overview

VMware hypervisor hosts.

### Available Operations

* [getVmwareHost](#getvmwarehost) - Get details of a ESXi hypervisor
* [getVmwareHostDatastore](#getvmwarehostdatastore) - Get details of datastores in a ESXi hypervisor
* [queryVmwareHost](#queryvmwarehost) - Get summary of all the ESXi hypervisor
* [updateVmwareHost](#updatevmwarehost) - Update the SLA Domain for an ESXi hypervisor

## getVmwareHost

Get details of a ESXi hypervisor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareHostRequest;
import org.openapis.openapi.models.operations.GetVmwareHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("architecto", "praesentium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareHostRequest req = new GetVmwareHostRequest("iusto");            

            GetVmwareHostResponse res = sdk.rootVmwareHost.getVmwareHost(req);

            if (res.vmwareHostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareHostDatastore

Get details of datastores in a ESXi hypervisor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareHostDatastoreRequest;
import org.openapis.openapi.models.operations.GetVmwareHostDatastoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugiat", "enim") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareHostDatastoreRequest req = new GetVmwareHostDatastoreRequest("iure");            

            GetVmwareHostDatastoreResponse res = sdk.rootVmwareHost.getVmwareHostDatastore(req);

            if (res.vmwareHostDatastoreDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVmwareHost

Get summary of all the ESXi hypervisor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVmwareHostRequest;
import org.openapis.openapi.models.operations.QueryVmwareHostResponse;
import org.openapis.openapi.models.operations.QueryVmwareHostSnappableStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laudantium", "modi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVmwareHostRequest req = new QueryVmwareHostRequest() {{
                computeClusterId = "magnam";
                primaryClusterId = "accusamus";
                snappableStatus = QueryVmwareHostSnappableStatusEnum.PROTECTABLE;
            }};            

            QueryVmwareHostResponse res = sdk.rootVmwareHost.queryVmwareHost(req);

            if (res.vmwareHostSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVmwareHost

Update the SLA Domain that is configured for an ESXi hypervisor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVmwareHostRequest;
import org.openapis.openapi.models.operations.UpdateVmwareHostResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VmwareHostUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nulla", "repudiandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVmwareHostRequest req = new UpdateVmwareHostRequest(                new VmwareHostUpdate() {{
                                configuredSlaDomainId = "quibusdam";
                            }};, "praesentium");            

            UpdateVmwareHostResponse res = sdk.rootVmwareHost.updateVmwareHost(req);

            if (res.vmwareHostDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
