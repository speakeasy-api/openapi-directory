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
                    circuit = 6319784459607830719;
                    connectionStatus = true;
                    description = "est";
                    portSpeed = 6895190030986400396;
                    ppInfo = "vel";
                    site = 761917384339733708;
                    termSide = "Z";
                    upstreamSpeed = 4485499790585475891;
                    xconnectId = "commodi";
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