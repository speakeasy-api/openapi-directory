# contentFilteringRules

### Available Operations

* [getNetworkContentFiltering](#getnetworkcontentfiltering) - Return the content filtering settings for an MX network
* [updateNetworkContentFiltering](#updatenetworkcontentfiltering) - Update the content filtering settings for an MX network

## getNetworkContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkContentFilteringRequest;
import org.openapis.openapi.models.operations.GetNetworkContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkContentFilteringRequest req = new GetNetworkContentFilteringRequest("eligendi");            

            GetNetworkContentFilteringResponse res = sdk.contentFilteringRules.getNetworkContentFiltering(req);

            if (res.getNetworkContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkContentFilteringRequest;
import org.openapis.openapi.models.operations.UpdateNetworkContentFilteringRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkContentFilteringRequest req = new UpdateNetworkContentFilteringRequest("alias") {{
                requestBody = new UpdateNetworkContentFilteringRequestBody() {{
                    allowedUrlPatterns = new String[]{{
                        add("tempora"),
                        add("ipsam"),
                        add("ea"),
                    }};
                    blockedUrlCategories = new String[]{{
                        add("vel"),
                    }};
                    blockedUrlPatterns = new String[]{{
                        add("magnam"),
                        add("ratione"),
                        add("ex"),
                        add("laudantium"),
                    }};
                    urlCategoryListSize = UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum.FULL_LIST;
                }};;
            }};            

            UpdateNetworkContentFilteringResponse res = sdk.contentFilteringRules.updateNetworkContentFiltering(req);

            if (res.updateNetworkContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
