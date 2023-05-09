# servicePlan

### Available Operations

* [listServicePlans](#listserviceplans) - List ServicePlans
* [showServicePlan](#showserviceplan) - Show an existing ServicePlan

## listServicePlans

Returns an array of ServicePlan objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicePlansRequest;
import org.openapis.openapi.models.operations.ListServicePlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "amet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServicePlansRequest req = new ListServicePlansRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("nisi", "vel");
                    put("natus", "omnis");
                    put("molestiae", "perferendis");
                }};
                limit = 470132L;
                offset = 301575L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("id", "labore");
                    put("labore", "suscipit");
                    put("natus", "nobis");
                }};
            }};            

            ListServicePlansResponse res = sdk.servicePlan.listServicePlans(req);

            if (res.servicePlansCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServicePlan

Returns a ServicePlan object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServicePlanRequest;
import org.openapis.openapi.models.operations.ShowServicePlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServicePlanRequest req = new ShowServicePlanRequest("aspernatur");            

            ShowServicePlanResponse res = sdk.servicePlan.showServicePlan(req);

            if (res.servicePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
