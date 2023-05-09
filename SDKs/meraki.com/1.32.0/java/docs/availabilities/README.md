# availabilities

### Available Operations

* [getOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesAvailabilitiesRequest req = new GetOrganizationDevicesAvailabilitiesRequest("aliquid") {{
                endingBefore = "repellat";
                networkIds = new String[]{{
                    add("consectetur"),
                    add("eligendi"),
                    add("ullam"),
                    add("nihil"),
                }};
                perPage = 262891L;
                productTypes = new String[]{{
                    add("corporis"),
                    add("perferendis"),
                }};
                serials = new String[]{{
                    add("amet"),
                }};
                startingAfter = "corporis";
                tags = new String[]{{
                    add("officiis"),
                    add("dolore"),
                }};
                tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesAvailabilitiesResponse res = sdk.availabilities.getOrganizationDevicesAvailabilities(req);

            if (res.getOrganizationDevicesAvailabilities200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
