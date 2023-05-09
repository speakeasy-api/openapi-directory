# netflow

### Available Operations

* [getNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [updateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network

## getNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkNetflowRequest;
import org.openapis.openapi.models.operations.GetNetworkNetflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetflowRequest req = new GetNetworkNetflowRequest("ad");            

            GetNetworkNetflowResponse res = sdk.netflow.getNetworkNetflow(req);

            if (res.getNetworkNetflow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowRequest;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkNetflowRequest req = new UpdateNetworkNetflowRequest("nesciunt") {{
                requestBody = new UpdateNetworkNetflowRequestBody() {{
                    collectorIp = "officia";
                    collectorPort = 18795L;
                    etaDstPort = 614275L;
                    etaEnabled = false;
                    reportingEnabled = false;
                }};;
            }};            

            UpdateNetworkNetflowResponse res = sdk.netflow.updateNetworkNetflow(req);

            if (res.updateNetworkNetflow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
