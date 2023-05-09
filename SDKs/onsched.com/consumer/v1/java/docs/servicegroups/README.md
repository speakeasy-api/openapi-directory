# serviceGroups

### Available Operations

* [getConsumerV1Servicegroups](#getconsumerv1servicegroups) - List Service Groups
* [getConsumerV1ServicegroupsId](#getconsumerv1servicegroupsid) - Get Service Group

## getConsumerV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicegroupsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicegroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicegroupsRequest req = new GetConsumerV1ServicegroupsRequest() {{
                limit = 722081;
                locationId = "hic";
                offset = 30452;
            }};            

            GetConsumerV1ServicegroupsResponse res = sdk.serviceGroups.getConsumerV1Servicegroups(req);

            if (res.serviceGroupListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ServicegroupsId

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ServicegroupsIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ServicegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ServicegroupsIdRequest req = new GetConsumerV1ServicegroupsIdRequest(746994);            

            GetConsumerV1ServicegroupsIdResponse res = sdk.serviceGroups.getConsumerV1ServicegroupsId(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
