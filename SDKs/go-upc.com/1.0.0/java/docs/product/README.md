# product

### Available Operations

* [getProductInfo](#getproductinfo) - Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

## getProductInfo

Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductInfoRequest;
import org.openapis.openapi.models.operations.GetProductInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductInfoRequest req = new GetProductInfoRequest("quibusdam");            

            GetProductInfoResponse res = sdk.product.getProductInfo(req);

            if (res.getProductInfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
