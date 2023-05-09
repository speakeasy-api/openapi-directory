# apiUsage

### Available Operations

* [getOrganizationApiRequests](#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data

## getOrganizationApiRequests

List the API requests made by an organization

### Example Usage

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
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsRequest req = new GetOrganizationApiRequestsRequest("debitis") {{
                adminId = "ipsa";
                endingBefore = "delectus";
                method = "tempora";
                path = "suscipit";
                perPage = 477665L;
                responseCode = 791725L;
                sourceIp = "placeat";
                startingAfter = "voluptatum";
                t0 = "iusto";
                t1 = "excepturi";
                timespan = 3927.85;
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

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewRequest req = new GetOrganizationApiRequestsOverviewRequest("temporibus") {{
                t0 = "ab";
                t1 = "quis";
                timespan = 871.29;
            }};            

            GetOrganizationApiRequestsOverviewResponse res = sdk.apiUsage.getOrganizationApiRequestsOverview(req);

            if (res.getOrganizationApiRequestsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
