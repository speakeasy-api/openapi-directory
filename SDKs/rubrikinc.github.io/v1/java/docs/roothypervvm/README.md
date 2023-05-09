# rootHypervVm

### Available Operations

* [getHypervVirtualMachineForceFullSpec](#gethypervvirtualmachineforcefullspec) - Retrieve the configuration which has been set for forcing a full snapshot for a Hyper-V Virtual Machine
* [requestHypervVirtualMachineForceFullSnapshot](#requesthypervvirtualmachineforcefullsnapshot) - Request a full snapshot during next backup job of a Hyper-V virtual machine

## getHypervVirtualMachineForceFullSpec

Retrieve the configuration created to force a full snapshot for a Hyper-V Virtual Machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHypervVirtualMachineForceFullSpecRequest;
import org.openapis.openapi.models.operations.GetHypervVirtualMachineForceFullSpecResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "iste") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHypervVirtualMachineForceFullSpecRequest req = new GetHypervVirtualMachineForceFullSpecRequest("itaque");            

            GetHypervVirtualMachineForceFullSpecResponse res = sdk.rootHypervVm.getHypervVirtualMachineForceFullSpec(req);

            if (res.hypervVirtualMachineForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestHypervVirtualMachineForceFullSnapshot

Request a full snapshot during the next backup job of a Hyper-V virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestHypervVirtualMachineForceFullSnapshotRequest;
import org.openapis.openapi.models.operations.RequestHypervVirtualMachineForceFullSnapshotResponse;
import org.openapis.openapi.models.shared.HypervVirtualDiskForceFullInfo;
import org.openapis.openapi.models.shared.HypervVirtualMachineForceFullRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "nisi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestHypervVirtualMachineForceFullSnapshotRequest req = new RequestHypervVirtualMachineForceFullSnapshotRequest(                new HypervVirtualMachineForceFullRequest() {{
                                virtualDiskInfos = new org.openapis.openapi.models.shared.HypervVirtualDiskForceFullInfo[]{{
                                    add(new HypervVirtualDiskForceFullInfo(false, "laborum") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "velit";
                                    }}),
                                    add(new HypervVirtualDiskForceFullInfo(false, "dolor") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "non";
                                    }}),
                                    add(new HypervVirtualDiskForceFullInfo(false, "sit") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "iusto";
                                    }}),
                                    add(new HypervVirtualDiskForceFullInfo(false, "consequatur") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "doloremque";
                                    }}),
                                }};
                            }};, "officia");            

            RequestHypervVirtualMachineForceFullSnapshotResponse res = sdk.rootHypervVm.requestHypervVirtualMachineForceFullSnapshot(req);

            if (res.hypervVirtualMachineForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
