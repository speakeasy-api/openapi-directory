<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFamilyDetailsQueryParams;
import org.openapis.openapi.models.operations.GetFamilyDetailsHeaders;
import org.openapis.openapi.models.operations.GetFamilyDetailsRequest;
import org.openapis.openapi.models.operations.GetFamilyDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFamilyDetailsRequest req = new GetFamilyDetailsRequest() {{
                queryParams = new GetFamilyDetailsQueryParams() {{
                    id = "{family_id}";
                }};
                headers = new GetFamilyDetailsHeaders() {{
                    ocpApimSubscriptionKey = "{{apiKey}}";
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