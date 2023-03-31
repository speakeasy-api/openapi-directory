<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsPathParams;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsQueryParams;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    merakiApiKey = new SchemeMerakiAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetOrganizationApiRequestsRequest req = new GetOrganizationApiRequestsRequest() {{
                pathParams = new GetOrganizationApiRequestsPathParams() {{
                    organizationId = "corrupti";
                }};
                queryParams = new GetOrganizationApiRequestsQueryParams() {{
                    adminId = "provident";
                    endingBefore = "distinctio";
                    method = "quibusdam";
                    path = "unde";
                    perPage = 857946;
                    responseCode = 544883;
                    sourceIp = "illum";
                    startingAfter = "vel";
                    t0 = "error";
                    t1 = "deserunt";
                    timespan = 3843.82;
                }};
            }};            

            GetOrganizationApiRequestsResponse res = sdk.apiUsage.getOrganizationApiRequests(req);

            if (res.getOrganizationApiRequests200ApplicationJSONObjects.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->