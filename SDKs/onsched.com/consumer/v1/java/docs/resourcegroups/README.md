# resourceGroups

### Available Operations

* [getConsumerV1Resourcegroups](#getconsumerv1resourcegroups) - List Resource Groups
* [getConsumerV1ResourcegroupsId](#getconsumerv1resourcegroupsid) - Get Resource Group

## getConsumerV1Resourcegroups

<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcegroupsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcegroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ResourcegroupsRequest req = new GetConsumerV1ResourcegroupsRequest() {{
                deleted = false;
                limit = 646265;
                locationId = "quam";
                offset = 214880;
            }};            

            GetConsumerV1ResourcegroupsResponse res = sdk.resourceGroups.getConsumerV1Resourcegroups(req);

            if (res.resourceGroupListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1ResourcegroupsId

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcegroupsIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1ResourcegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1ResourcegroupsIdRequest req = new GetConsumerV1ResourcegroupsIdRequest("qui");            

            GetConsumerV1ResourcegroupsIdResponse res = sdk.resourceGroups.getConsumerV1ResourcegroupsId(req);

            if (res.resourceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
