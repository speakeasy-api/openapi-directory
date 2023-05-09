# alertTypes

### Available Operations

* [getOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesProductTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksAlertTypesRequest req = new GetOrganizationWebhooksAlertTypesRequest("corporis") {{
                productType = GetOrganizationWebhooksAlertTypesProductTypeEnum.SM;
            }};            

            GetOrganizationWebhooksAlertTypesResponse res = sdk.alertTypes.getOrganizationWebhooksAlertTypes(req);

            if (res.getOrganizationWebhooksAlertTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
