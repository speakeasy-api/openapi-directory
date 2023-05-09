# latest

### Available Operations

* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsLatestRequest req = new GetOrganizationSensorReadingsLatestRequest("aliquid") {{
                endingBefore = "excepturi";
                metrics = new String[]{{
                    add("delectus"),
                    add("quibusdam"),
                }};
                networkIds = new String[]{{
                    add("commodi"),
                    add("perferendis"),
                }};
                perPage = 982407L;
                serials = new String[]{{
                    add("nesciunt"),
                    add("nihil"),
                    add("accusamus"),
                }};
                startingAfter = "dolores";
            }};            

            GetOrganizationSensorReadingsLatestResponse res = sdk.latest.getOrganizationSensorReadingsLatest(req);

            if (res.getOrganizationSensorReadingsLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
