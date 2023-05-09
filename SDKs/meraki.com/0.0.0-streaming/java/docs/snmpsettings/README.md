# snmpSettings

### Available Operations

* [getNetworkSnmpSettings](#getnetworksnmpsettings) - Return the SNMP settings for a network
* [getOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization

## getNetworkSnmpSettings

Return the SNMP settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSnmpSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSnmpSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSnmpSettingsRequest req = new GetNetworkSnmpSettingsRequest("quisquam");            

            GetNetworkSnmpSettingsResponse res = sdk.snmpSettings.getNetworkSnmpSettings(req);

            if (res.getNetworkSnmpSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSnmp

Return the SNMP settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSnmpRequest;
import org.openapis.openapi.models.operations.GetOrganizationSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSnmpRequest req = new GetOrganizationSnmpRequest("ducimus");            

            GetOrganizationSnmpResponse res = sdk.snmpSettings.getOrganizationSnmp(req);

            if (res.getOrganizationSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
