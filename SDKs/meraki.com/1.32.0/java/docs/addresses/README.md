# addresses

### Available Operations

* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksAddressesByDeviceRequest req = new GetOrganizationDevicesUplinksAddressesByDeviceRequest("exercitationem") {{
                endingBefore = "earum";
                networkIds = new String[]{{
                    add("numquam"),
                    add("doloribus"),
                    add("suscipit"),
                    add("reiciendis"),
                }};
                perPage = 697142L;
                productTypes = new String[]{{
                    add("necessitatibus"),
                    add("dolore"),
                    add("sunt"),
                    add("asperiores"),
                }};
                serials = new String[]{{
                    add("non"),
                }};
                startingAfter = "amet";
                tags = new String[]{{
                    add("dignissimos"),
                }};
                tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesUplinksAddressesByDeviceResponse res = sdk.addresses.getOrganizationDevicesUplinksAddressesByDevice(req);

            if (res.getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
