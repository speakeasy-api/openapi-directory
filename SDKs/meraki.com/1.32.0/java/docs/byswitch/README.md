# bySwitch

### Available Operations

* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchRequest;
import org.openapis.openapi.models.operations.GetOrganizationSwitchPortsBySwitchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSwitchPortsBySwitchRequest req = new GetOrganizationSwitchPortsBySwitchRequest("eveniet") {{
                configurationUpdatedAfter = "voluptate";
                endingBefore = "hic";
                mac = "at";
                macs = new String[]{{
                    add("in"),
                }};
                name = "Susan Adams";
                networkIds = new String[]{{
                    add("voluptatum"),
                    add("facere"),
                    add("consequuntur"),
                    add("natus"),
                }};
                perPage = 830473L;
                portProfileIds = new String[]{{
                    add("illo"),
                    add("facere"),
                    add("fugiat"),
                    add("ducimus"),
                }};
                serial = "aut";
                serials = new String[]{{
                    add("voluptate"),
                    add("tempore"),
                    add("ullam"),
                }};
                startingAfter = "illum";
            }};            

            GetOrganizationSwitchPortsBySwitchResponse res = sdk.bySwitch.getOrganizationSwitchPortsBySwitch(req);

            if (res.getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
