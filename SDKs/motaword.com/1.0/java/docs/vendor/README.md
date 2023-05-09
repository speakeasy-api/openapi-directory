# vendor

### Available Operations

* [getAvailableVendors](#getavailablevendors) - Get a list of vendors available for the criteria given

## getAvailableVendors

Get a list of vendors available for the criteria given

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableVendorsRequest;
import org.openapis.openapi.models.operations.GetAvailableVendorsResponse;
import org.openapis.openapi.models.operations.GetAvailableVendorsWithEnum;
import org.openapis.openapi.models.shared.AvailableVendorsFilter;
import org.openapis.openapi.models.shared.AvailableVendorsFilterTypesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAvailableVendorsRequest req = new GetAvailableVendorsRequest() {{
                availableVendorsFilter = new AvailableVendorsFilter() {{
                    corporateId = 4483.69;
                    manualWorkPermission = false;
                    sourceLanguage = "ducimus";
                    targetLanguages = new String[]{{
                        add("dolores"),
                        add("error"),
                        add("veritatis"),
                    }};
                    types = new org.openapis.openapi.models.shared.AvailableVendorsFilterTypesEnum[]{{
                        add(AvailableVendorsFilterTypesEnum.PROOFREADER),
                        add(AvailableVendorsFilterTypesEnum.BOTH),
                    }};
                }};;
                with = new org.openapis.openapi.models.operations.GetAvailableVendorsWithEnum[]{{
                    add(GetAvailableVendorsWithEnum.USER),
                    add(GetAvailableVendorsWithEnum.USER),
                    add(GetAvailableVendorsWithEnum.USER),
                    add(GetAvailableVendorsWithEnum.USER),
                }};
            }};            

            GetAvailableVendorsResponse res = sdk.vendor.getAvailableVendors(req);

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
