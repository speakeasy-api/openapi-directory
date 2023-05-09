# changeLog

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
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigurationChangesRequest req = new GetOrganizationConfigurationChangesRequest("deserunt") {{
                adminId = "quam";
                endingBefore = "ipsum";
                networkId = "incidunt";
                perPage = 186458L;
                startingAfter = "cupiditate";
                t0 = "maxime";
                t1 = "pariatur";
                timespan = 7470.8;
            }};            

            GetOrganizationConfigurationChangesResponse res = sdk.changeLog.getOrganizationConfigurationChanges(req);

            if (res.getOrganizationConfigurationChanges200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
