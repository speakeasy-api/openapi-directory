# services

### Available Operations

* [getConsumerV1Services](#getconsumerv1services) - List Services
* [getConsumerV1ServicesAllocationsId](#getconsumerv1servicesallocationsid) - Get Service Allocation
* [getConsumerV1ServicesId](#getconsumerv1servicesid) - Get Service
* [getConsumerV1ServicesIdAllocations](#getconsumerv1servicesidallocations) - List Service Allocations
* [getConsumerV1ServicesIdResources](#getconsumerv1servicesidresources) - List Resources for Service

## getConsumerV1Services

<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceSortOrderEnum;
import org.openapis.openapi.models.shared.ServicesScopeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicesRequest req = new GetConsumerV1ServicesRequest() {{
                allLocations = false;
                defaultService = false;
                limit = 92596;
                locationId = "saepe";
                name = "Carolyn Rohan";
                offset = 584476;
                scope = ServicesScopeEnum.COMPANY;
                serviceGroupId = 961937;
                serviceId = "dolorem";
                sortDescending = false;
                sortOrder = ServiceSortOrderEnum.NATURAL;
            }};            

            GetConsumerV1ServicesResponse res = sdk.services.getConsumerV1Services(req);

            if (res.serviceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ServicesAllocationsId

<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesAllocationsIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesAllocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicesAllocationsIdRequest req = new GetConsumerV1ServicesAllocationsIdRequest("adipisci");            

            GetConsumerV1ServicesAllocationsIdResponse res = sdk.services.getConsumerV1ServicesAllocationsId(req);

            if (res.serviceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ServicesId

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicesIdRequest req = new GetConsumerV1ServicesIdRequest(100294);            

            GetConsumerV1ServicesIdResponse res = sdk.services.getConsumerV1ServicesId(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ServicesIdAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdAllocationsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdAllocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicesIdAllocationsRequest req = new GetConsumerV1ServicesIdAllocationsRequest("aut") {{
                endDate = OffsetDateTime.parse("2021-02-21T10:38:46.777Z");
                limit = 9240;
                locationId = "est";
                offset = 833038;
                resourceId = "porro";
                startDate = OffsetDateTime.parse("2022-02-26T12:07:57.580Z");
            }};            

            GetConsumerV1ServicesIdAllocationsResponse res = sdk.services.getConsumerV1ServicesIdAllocations(req);

            if (res.serviceAllocationListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ServicesIdResources

<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdResourcesRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicesIdResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicesIdResourcesRequest req = new GetConsumerV1ServicesIdResourcesRequest("cupiditate") {{
                limit = 181631;
                locationId = "quae";
                offset = 512393;
            }};            

            GetConsumerV1ServicesIdResourcesResponse res = sdk.services.getConsumerV1ServicesIdResources(req);

            if (res.resourceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
