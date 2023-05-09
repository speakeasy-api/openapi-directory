# customerUsageReports

### Available Operations

* [reportsCustomerUsageReportsGet](#reportscustomerusagereportsget) - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

## reportsCustomerUsageReportsGet

Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsCustomerUsageReportsGetRequest;
import org.openapis.openapi.models.operations.ReportsCustomerUsageReportsGetResponse;
import org.openapis.openapi.models.operations.ReportsCustomerUsageReportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsCustomerUsageReportsGetRequest req = new ReportsCustomerUsageReportsGetRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                customerId = "quibusdam";
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                pageToken = "aliquid";
                parameters = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            ReportsCustomerUsageReportsGetResponse res = sdk.customerUsageReports.reportsCustomerUsageReportsGet(req, new ReportsCustomerUsageReportsGetSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usageReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
