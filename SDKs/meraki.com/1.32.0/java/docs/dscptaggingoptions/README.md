# dscpTaggingOptions

### Available Operations

* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingDscpTaggingOptionsRequest req = new GetNetworkTrafficShapingDscpTaggingOptionsRequest("fuga");            

            GetNetworkTrafficShapingDscpTaggingOptionsResponse res = sdk.dscpTaggingOptions.getNetworkTrafficShapingDscpTaggingOptions(req);

            if (res.getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
