# categories

### Available Operations

* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network

## getNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceContentFilteringCategoriesRequest req = new GetNetworkApplianceContentFilteringCategoriesRequest("dolore");            

            GetNetworkApplianceContentFilteringCategoriesResponse res = sdk.categories.getNetworkApplianceContentFilteringCategories(req);

            if (res.getNetworkApplianceContentFilteringCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
