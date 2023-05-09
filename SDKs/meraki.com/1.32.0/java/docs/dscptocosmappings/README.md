# dscpToCosMappings

### Available Operations

* [getNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [updateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings

## getNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDscpToCosMappingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDscpToCosMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDscpToCosMappingsRequest req = new GetNetworkSwitchDscpToCosMappingsRequest("fuga");            

            GetNetworkSwitchDscpToCosMappingsResponse res = sdk.dscpToCosMappings.getNetworkSwitchDscpToCosMappings(req);

            if (res.getNetworkSwitchDscpToCosMappings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDscpToCosMappingsRequest req = new UpdateNetworkSwitchDscpToCosMappingsRequest(                new UpdateNetworkSwitchDscpToCosMappingsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[]{{
                                                add(new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(52082L, 735969L) {{
                                                    cos = 387213L;
                                                    dscp = 524925L;
                                                    title = "Mr.";
                                                }}),
                                                add(new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(808944L, 732387L) {{
                                                    cos = 54210L;
                                                    dscp = 98148L;
                                                    title = "Miss";
                                                }}),
                                                add(new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(125944L, 965909L) {{
                                                    cos = 798494L;
                                                    dscp = 49335L;
                                                    title = "Mrs.";
                                                }}),
                                                add(new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(604590L, 843086L) {{
                                                    cos = 147235L;
                                                    dscp = 792902L;
                                                    title = "Mr.";
                                                }}),
                                            }});, "tempore");            

            UpdateNetworkSwitchDscpToCosMappingsResponse res = sdk.dscpToCosMappings.updateNetworkSwitchDscpToCosMappings(req);

            if (res.updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
