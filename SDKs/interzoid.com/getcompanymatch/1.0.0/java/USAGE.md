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

            GetcompanymatchRequest req = new GetcompanymatchRequest() {{
                queryParams = new GetcompanymatchQueryParams() {{
                    company = "eveniet";
                    license = "vero";
                }};
            }};

            GetcompanymatchResponse res = sdk.companyNameSimilarityKey.getcompanymatch(req);

            if (res.getcompanymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->