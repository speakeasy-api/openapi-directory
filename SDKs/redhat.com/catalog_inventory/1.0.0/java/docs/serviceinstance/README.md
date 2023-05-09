# serviceInstance

### Available Operations

* [listServiceInstances](#listserviceinstances) - List ServiceInstances
* [showServiceInstance](#showserviceinstance) - Show an existing ServiceInstance

## listServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInstancesRequest;
import org.openapis.openapi.models.operations.ListServiceInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceInstancesRequest req = new ListServiceInstancesRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("commodi", "molestiae");
                }};
                limit = 264555L;
                offset = 186332L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("cum", "esse");
                    put("ipsum", "excepturi");
                    put("aspernatur", "perferendis");
                    put("ad", "natus");
                }};
            }};            

            ListServiceInstancesResponse res = sdk.serviceInstance.listServiceInstances(req);

            if (res.serviceInstancesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceInstance

Returns a ServiceInstance object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceInstanceRequest;
import org.openapis.openapi.models.operations.ShowServiceInstanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "iste") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceInstanceRequest req = new ShowServiceInstanceRequest("dolor");            

            ShowServiceInstanceResponse res = sdk.serviceInstance.showServiceInstance(req);

            if (res.serviceInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
