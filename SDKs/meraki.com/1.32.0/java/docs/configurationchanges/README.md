# configurationChanges

### Available Operations

* [getOrganizationConfigurationChanges](#getorganizationconfigurationchanges) - View the Change Log for your organization

## getOrganizationConfigurationChanges

View the Change Log for your organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigurationChangesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigurationChangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigurationChangesRequest req = new GetOrganizationConfigurationChangesRequest("aspernatur") {{
                adminId = "sequi";
                endingBefore = "sint";
                networkId = "accusamus";
                perPage = 535801L;
                startingAfter = "earum";
                t0 = "consequuntur";
                t1 = "enim";
                timespan = 7926.76;
            }};            

            GetOrganizationConfigurationChangesResponse res = sdk.configurationChanges.getOrganizationConfigurationChanges(req);

            if (res.getOrganizationConfigurationChanges200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
