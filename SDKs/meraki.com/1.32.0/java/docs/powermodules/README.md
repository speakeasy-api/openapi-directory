# powerModules

### Available Operations

* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesPowerModulesStatusesByDeviceRequest req = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest("unde") {{
                endingBefore = "non";
                networkIds = new String[]{{
                    add("ducimus"),
                    add("accusantium"),
                }};
                perPage = 588401L;
                productTypes = new String[]{{
                    add("officiis"),
                }};
                serials = new String[]{{
                    add("deleniti"),
                    add("vel"),
                }};
                startingAfter = "maiores";
                tags = new String[]{{
                    add("facere"),
                    add("ipsam"),
                    add("error"),
                    add("nam"),
                }};
                tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesPowerModulesStatusesByDeviceResponse res = sdk.powerModules.getOrganizationDevicesPowerModulesStatusesByDevice(req);

            if (res.getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
