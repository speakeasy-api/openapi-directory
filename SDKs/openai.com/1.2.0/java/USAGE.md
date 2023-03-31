<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CancelFineTunePathParams;
import org.openapis.openapi.models.operations.CancelFineTuneRequest;
import org.openapis.openapi.models.operations.CancelFineTuneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelFineTuneRequest req = new CancelFineTuneRequest() {{
                pathParams = new CancelFineTunePathParams() {{
                    fineTuneId = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";
                }};
            }};            

            CancelFineTuneResponse res = sdk.openAI.cancelFineTune(req);

            if (res.fineTune.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->