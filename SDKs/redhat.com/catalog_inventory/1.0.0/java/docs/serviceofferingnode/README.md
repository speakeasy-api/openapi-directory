# serviceOfferingNode

### Available Operations

* [listServiceOfferingNodes](#listserviceofferingnodes) - List ServiceOfferingNodes
* [showServiceOfferingNode](#showserviceofferingnode) - Show an existing ServiceOfferingNode

## listServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceOfferingNodesRequest;
import org.openapis.openapi.models.operations.ListServiceOfferingNodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceOfferingNodesRequest req = new ListServiceOfferingNodesRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("rerum", "dicta");
                    put("magnam", "cumque");
                    put("facere", "ea");
                    put("aliquid", "laborum");
                }};
                limit = 881104L;
                offset = 249796L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("enim", "accusamus");
                    put("delectus", "quidem");
                    put("provident", "nam");
                }};
            }};            

            ListServiceOfferingNodesResponse res = sdk.serviceOfferingNode.listServiceOfferingNodes(req);

            if (res.serviceOfferingNodesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceOfferingNode

Returns a ServiceOfferingNode object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceOfferingNodeRequest;
import org.openapis.openapi.models.operations.ShowServiceOfferingNodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "blanditiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceOfferingNodeRequest req = new ShowServiceOfferingNodeRequest("deleniti");            

            ShowServiceOfferingNodeResponse res = sdk.serviceOfferingNode.showServiceOfferingNode(req);

            if (res.serviceOfferingNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
