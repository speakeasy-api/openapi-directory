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

            GetFamilyDetailsRequest req = new GetFamilyDetailsRequest() {{
                queryParams = new GetFamilyDetailsQueryParams() {{
                    id = "culpa";
                }};
            }};

            GetFamilyDetailsResponse res = sdk.languageModelDirectAccess.getFamilyDetails(req);

            if (res.getFamilyDetails200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->