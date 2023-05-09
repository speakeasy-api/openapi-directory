<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsRequest req = new GetOrganizationApiRequestsRequest("provident") {{
                adminId = "distinctio";
                endingBefore = "quibusdam";
                method = "unde";
                path = "nulla";
                perPage = 544883L;
                responseCode = 847252L;
                sourceIp = "vel";
                startingAfter = "error";
                t0 = "deserunt";
                t1 = "suscipit";
                timespan = 4375.87;
            }};            

            GetOrganizationApiRequestsResponse res = sdk.apiUsage.getOrganizationApiRequests(req);

            if (res.getOrganizationApiRequests200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->