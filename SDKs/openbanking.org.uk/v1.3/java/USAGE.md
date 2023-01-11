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

            GetAtmsRequest req = new GetAtmsRequest() {{
                headers = new GetAtmsHeaders() {{
                    ifModifiedSince = "quia";
                    ifNoneMatch = "qui";
                }};
            }};

            GetAtmsResponse res = sdk.atm.getAtms(req);

            if (res.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->