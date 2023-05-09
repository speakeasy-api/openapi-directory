# warmSpare

### Available Operations

* [getDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [swapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [updateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings

## getDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchWarmSpareRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchWarmSpareRequest req = new GetDeviceSwitchWarmSpareRequest("vel");            

            GetDeviceSwitchWarmSpareResponse res = sdk.warmSpare.getDeviceSwitchWarmSpare(req);

            if (res.getDeviceSwitchWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceWarmSpareRequest req = new GetNetworkApplianceWarmSpareRequest("rerum");            

            GetNetworkApplianceWarmSpareResponse res = sdk.warmSpare.getNetworkApplianceWarmSpare(req);

            if (res.getNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## swapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SwapNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.SwapNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SwapNetworkApplianceWarmSpareRequest req = new SwapNetworkApplianceWarmSpareRequest("consequuntur");            

            SwapNetworkApplianceWarmSpareResponse res = sdk.warmSpare.swapNetworkApplianceWarmSpare(req);

            if (res.swapNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSwitchWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSwitchWarmSpareRequest req = new UpdateDeviceSwitchWarmSpareRequest(                new UpdateDeviceSwitchWarmSpareRequestBody(false) {{
                                spareSerial = "fugit";
                            }};, "tempore");            

            UpdateDeviceSwitchWarmSpareResponse res = sdk.warmSpare.updateDeviceSwitchWarmSpare(req);

            if (res.updateDeviceSwitchWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceWarmSpareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceWarmSpareRequest req = new UpdateNetworkApplianceWarmSpareRequest(                new UpdateNetworkApplianceWarmSpareRequestBody(false) {{
                                spareSerial = "et";
                                uplinkMode = "possimus";
                                virtualIp1 = "perspiciatis";
                                virtualIp2 = "soluta";
                            }};, "ducimus");            

            UpdateNetworkApplianceWarmSpareResponse res = sdk.warmSpare.updateNetworkApplianceWarmSpare(req);

            if (res.updateNetworkApplianceWarmSpare200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
