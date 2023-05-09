# resources

### Available Operations

* [getConsumerV1Resources](#getconsumerv1resources) - List Resources
* [getConsumerV1ResourcesId](#getconsumerv1resourcesid) - Get Resource
* [getConsumerV1ResourcesIdServices](#getconsumerv1resourcesidservices) - Get Resource Linked Services

## getConsumerV1Resources

<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ResourcesRequest req = new GetConsumerV1ResourcesRequest() {{
                email = "Salvador67@hotmail.com";
                limit = 517379;
                locationId = "incidunt";
                name = "Bonnie Raynor";
                offset = 463150;
                resourceGroupId = 565421;
                sortOrder = "temporibus";
            }};            

            GetConsumerV1ResourcesResponse res = sdk.resources.getConsumerV1Resources(req);

            if (res.resourceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ResourcesId

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ResourcesIdRequest req = new GetConsumerV1ResourcesIdRequest(204865);            

            GetConsumerV1ResourcesIdResponse res = sdk.resources.getConsumerV1ResourcesId(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ResourcesIdServices

<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesIdServicesRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcesIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ResourcesIdServicesRequest req = new GetConsumerV1ResourcesIdServicesRequest(164959) {{
                limit = 488056;
                offset = 124833;
            }};            

            GetConsumerV1ResourcesIdServicesResponse res = sdk.resources.getConsumerV1ResourcesIdServices(req);

            if (res.resourceServiceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
