# contentFiltering

### Available Operations

* [getNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [updateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network

## getNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceContentFilteringRequest req = new GetNetworkApplianceContentFilteringRequest("nulla");            

            GetNetworkApplianceContentFilteringResponse res = sdk.contentFiltering.getNetworkApplianceContentFiltering(req);

            if (res.getNetworkApplianceContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceContentFilteringCategoriesRequest req = new GetNetworkApplianceContentFilteringCategoriesRequest("labore");            

            GetNetworkApplianceContentFilteringCategoriesResponse res = sdk.contentFiltering.getNetworkApplianceContentFilteringCategories(req);

            if (res.getNetworkApplianceContentFilteringCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceContentFilteringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceContentFilteringRequest req = new UpdateNetworkApplianceContentFilteringRequest("animi") {{
                requestBody = new UpdateNetworkApplianceContentFilteringRequestBody() {{
                    allowedUrlPatterns = new String[]{{
                        add("eligendi"),
                    }};
                    blockedUrlCategories = new String[]{{
                        add("nesciunt"),
                        add("laborum"),
                        add("quibusdam"),
                    }};
                    blockedUrlPatterns = new String[]{{
                        add("sint"),
                        add("expedita"),
                    }};
                    urlCategoryListSize = UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum.TOP_SITES;
                }};;
            }};            

            UpdateNetworkApplianceContentFilteringResponse res = sdk.contentFiltering.updateNetworkApplianceContentFiltering(req);

            if (res.updateNetworkApplianceContentFiltering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
