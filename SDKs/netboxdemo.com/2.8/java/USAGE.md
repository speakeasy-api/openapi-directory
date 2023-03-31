<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CircuitsCircuitTerminationsCreateRequest;
import org.openapis.openapi.models.operations.CircuitsCircuitTerminationsCreateResponse;
import org.openapis.openapi.models.shared.WritableCircuitTerminationConnectionStatusEnum;
import org.openapis.openapi.models.shared.WritableCircuitTerminationTerminationEnum;
import org.openapis.openapi.models.shared.WritableCircuitTerminationInput;
import org.openapis.openapi.models.shared.NestedCableInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CircuitsCircuitTerminationsCreateRequest req = new CircuitsCircuitTerminationsCreateRequest() {{
                request = new WritableCircuitTerminationInput() {{
                    cable = new NestedCableInput() {{
                        label = "corrupti";
                    }};
                    circuit = 592845;
                    connectionStatus = "true";
                    description = "quibusdam";
                    portSpeed = 602763;
                    ppInfo = "nulla";
                    site = 544883;
                    termSide = "Z";
                    upstreamSpeed = 423655;
                    xconnectId = "error";
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