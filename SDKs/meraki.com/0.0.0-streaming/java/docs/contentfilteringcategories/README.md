# contentFilteringCategories

### Available Operations

* [getNetworkContentFilteringCategories](#getnetworkcontentfilteringcategories) - List all available content filtering categories for an MX network

## getNetworkContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkContentFilteringCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkContentFilteringCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkContentFilteringCategoriesRequest req = new GetNetworkContentFilteringCategoriesRequest("doloribus");            

            GetNetworkContentFilteringCategoriesResponse res = sdk.contentFilteringCategories.getNetworkContentFilteringCategories(req);

            if (res.getNetworkContentFilteringCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
