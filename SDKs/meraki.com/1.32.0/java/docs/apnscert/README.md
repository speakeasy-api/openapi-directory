# apnsCert

### Available Operations

* [getOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate

## getOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmApnsCertRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmApnsCertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmApnsCertRequest req = new GetOrganizationSmApnsCertRequest("consequatur");            

            GetOrganizationSmApnsCertResponse res = sdk.apnsCert.getOrganizationSmApnsCert(req);

            if (res.getOrganizationSmApnsCert200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
