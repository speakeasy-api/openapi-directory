<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetAffectedGenomicModelsUsingGetRequest req = new GetAffectedGenomicModelsUsingGetRequest() {{
                pathParams = new GetAffectedGenomicModelsUsingGetPathParams() {{
                    taxonId = "ullam";
                }};
            }};

            GetAffectedGenomicModelsUsingGetResponse res = sdk.agr.getAffectedGenomicModelsUsingGet(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->