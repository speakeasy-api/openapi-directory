<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CircuitsCircuitTerminationsCreateRequest req = new CircuitsCircuitTerminationsCreateRequest() {{
                request = new WritableCircuitTerminationInput() {{
                    cable = new NestedCableInput() {{
                        label = "sit";
                    }};
                    circuit = 2259404117704393152;
                    connectionStatus = true;
                    description = "expedita";
                    portSpeed = 3390393562759376202;
                    ppInfo = "dolor";
                    site = 1774932891286980153;
                    termSide = "Z";
                    upstreamSpeed = 8274930044578894929;
                    xconnectId = "et";
                }};
            }};

            CircuitsCircuitTerminationsCreateResponse res = sdk.circuits.circuitsCircuitTerminationsCreate(req);

            if (res.circuitTermination.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->