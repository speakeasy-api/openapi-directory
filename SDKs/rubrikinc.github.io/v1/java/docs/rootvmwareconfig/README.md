# rootVmwareConfig

### Available Operations

* [getPreferredCdpNetworkProtocol](#getpreferredcdpnetworkprotocol) - Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer
* [getVmwareRecoveryNetworks](#getvmwarerecoverynetworks) - Get all the VMware recovery networks for a compute resource ID
* [setPreferredCdpNetworkProtocol](#setpreferredcdpnetworkprotocol) - Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer

## getPreferredCdpNetworkProtocol

Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPreferredCdpNetworkProtocolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("neque", "quis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPreferredCdpNetworkProtocolResponse res = sdk.rootVmwareConfig.getPreferredCdpNetworkProtocol();

            if (res.preferredCdpNetworkProtocolObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareRecoveryNetworks

Get all the networks for snapshot recovery for the specified compute resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareRecoveryNetworksComputeResourceTypeEnum;
import org.openapis.openapi.models.operations.GetVmwareRecoveryNetworksRequest;
import org.openapis.openapi.models.operations.GetVmwareRecoveryNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("in", "sed") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareRecoveryNetworksRequest req = new GetVmwareRecoveryNetworksRequest("non", GetVmwareRecoveryNetworksComputeResourceTypeEnum.RESOURCE_POOL);            

            GetVmwareRecoveryNetworksResponse res = sdk.rootVmwareConfig.getVmwareRecoveryNetworks(req);

            if (res.vmwareNetworkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPreferredCdpNetworkProtocol

Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPreferredCdpNetworkProtocolResponse;
import org.openapis.openapi.models.shared.PreferredCdpNetworkProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugiat", "soluta") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.PreferredCdpNetworkProtocolEnum req = PreferredCdpNetworkProtocolEnum.I_PV4            

            SetPreferredCdpNetworkProtocolResponse res = sdk.rootVmwareConfig.setPreferredCdpNetworkProtocol(req);

            if (res.preferredCdpNetworkProtocolObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
