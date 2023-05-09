# products

### Available Operations

* [cloudchannelProductsList](#cloudchannelproductslist) - Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [cloudchannelProductsSkusList](#cloudchannelproductsskuslist) - Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

## cloudchannelProductsList

Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelProductsListRequest;
import org.openapis.openapi.models.operations.CloudchannelProductsListResponse;
import org.openapis.openapi.models.operations.CloudchannelProductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelProductsListRequest req = new CloudchannelProductsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                account = "suscipit";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "sunt";
                languageCode = "recusandae";
                oauthToken = "dolorum";
                pageSize = 829898L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "doloremque";
                uploadProtocol = "repudiandae";
            }};            

            CloudchannelProductsListResponse res = sdk.products.cloudchannelProductsList(req, new CloudchannelProductsListSecurity("dicta", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelProductsSkusList

Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelProductsSkusListRequest;
import org.openapis.openapi.models.operations.CloudchannelProductsSkusListResponse;
import org.openapis.openapi.models.operations.CloudchannelProductsSkusListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelProductsSkusListRequest req = new CloudchannelProductsSkusListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "enim";
                account = "laboriosam";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "molestias";
                key = "magnam";
                languageCode = "saepe";
                oauthToken = "consequuntur";
                pageSize = 580107L;
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "in";
                uploadProtocol = "adipisci";
            }};            

            CloudchannelProductsSkusListResponse res = sdk.products.cloudchannelProductsSkusList(req, new CloudchannelProductsSkusListSecurity("eveniet", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudChannelV1ListSkusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
