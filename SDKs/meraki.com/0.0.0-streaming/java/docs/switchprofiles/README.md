# switchProfiles

### Available Operations

* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilesRequest req = new GetOrganizationConfigTemplateSwitchProfilesRequest("excepturi", "a");            

            GetOrganizationConfigTemplateSwitchProfilesResponse res = sdk.switchProfiles.getOrganizationConfigTemplateSwitchProfiles(req);

            if (res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
