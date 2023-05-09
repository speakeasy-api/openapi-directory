# apiRequests

### Available Operations

* [getOrganizationApiRequests](#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

## getOrganizationApiRequests

List the API requests made by an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsMethodEnum;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsRequest req = new GetOrganizationApiRequestsRequest("quibusdam") {{
                adminId = "iure";
                endingBefore = "odit";
                method = GetOrganizationApiRequestsMethodEnum.PUT;
                operationIds = new String[]{{
                    add("magnam"),
                    add("quibusdam"),
                }};
                path = "inventore";
                perPage = 818034L;
                responseCode = 726878L;
                sourceIp = "architecto";
                startingAfter = "voluptatibus";
                t0 = "quia";
                t1 = "porro";
                timespan = 3041.98;
                userAgent = "velit";
                version = GetOrganizationApiRequestsVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsResponse res = sdk.apiRequests.getOrganizationApiRequests(req);

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
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewRequest req = new GetOrganizationApiRequestsOverviewRequest("vel") {{
                t0 = "ea";
                t1 = "beatae";
                timespan = 8777.51;
            }};            

            GetOrganizationApiRequestsOverviewResponse res = sdk.apiRequests.getOrganizationApiRequestsOverview(req);

            if (res.getOrganizationApiRequestsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest req = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest("eum") {{
                adminIds = new String[]{{
                    add("ut"),
                }};
                interval = 596433L;
                operationIds = new String[]{{
                    add("dicta"),
                    add("impedit"),
                    add("voluptatibus"),
                    add("iste"),
                }};
                sourceIps = new String[]{{
                    add("alias"),
                    add("nisi"),
                    add("itaque"),
                    add("velit"),
                }};
                t0 = "laborum";
                t1 = "non";
                timespan = 2244.67;
                userAgent = "iusto";
                version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse res = sdk.apiRequests.getOrganizationApiRequestsOverviewResponseCodesByInterval(req);

            if (res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
