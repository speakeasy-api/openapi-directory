# payorsPrivate

### Available Operations

* [createPayorLinks](#createpayorlinks) - Create a Payor Link

## createPayorLinks

This endpoint allows you to create a payor link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayorLinksResponse;
import org.openapis.openapi.models.operations.CreatePayorLinksSecurity;
import org.openapis.openapi.models.shared.CreatePayorLinkRequest;
import org.openapis.openapi.models.shared.CreatePayorLinkRequestLinkTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePayorLinkRequest req = new CreatePayorLinkRequest("d782259e-3ea4-4b51-97f9-2443da7ce52b", CreatePayorLinkRequestLinkTypeEnum.PARENT_OF, "895c537c-6454-4efb-8b34-896c3ca5acfb");            

            CreatePayorLinksResponse res = sdk.payorsPrivate.createPayorLinks(req, new CreatePayorLinksSecurity("vero") {{
                oAuthVeloBackOffice = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
