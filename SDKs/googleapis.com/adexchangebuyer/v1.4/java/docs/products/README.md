# products

### Available Operations

* [adexchangebuyerProductsGet](#adexchangebuyerproductsget) - Gets the requested product by id.
* [adexchangebuyerProductsSearch](#adexchangebuyerproductssearch) - Gets the requested product.

## adexchangebuyerProductsGet

Gets the requested product by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProductsGetRequest req = new AdexchangebuyerProductsGetRequest("alias") {{
                alt = AltEnum.JSON;
                fields = "asperiores";
                key = "rem";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "earum";
            }};            

            AdexchangebuyerProductsGetResponse res = sdk.products.adexchangebuyerProductsGet(req, new AdexchangebuyerProductsGetSecurity("doloribus", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProductsSearch

Gets the requested product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsSearchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsSearchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProductsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProductsSearchRequest req = new AdexchangebuyerProductsSearchRequest() {{
                alt = AltEnum.JSON;
                fields = "eius";
                key = "esse";
                oauthToken = "in";
                pqlQuery = "eligendi";
                prettyPrint = false;
                quotaUser = "quasi";
                userIp = "neque";
            }};            

            AdexchangebuyerProductsSearchResponse res = sdk.products.adexchangebuyerProductsSearch(req, new AdexchangebuyerProductsSearchSecurity("vero", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
