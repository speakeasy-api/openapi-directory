# fundingManagerPrivate

### Available Operations

* [createFundingAccountV2](#createfundingaccountv2) - Create Funding Account
* [deleteSourceAccountV3](#deletesourceaccountv3) - Delete a source account by ID

## createFundingAccountV2

Create Funding Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundingAccountV2Response;
import org.openapis.openapi.models.shared.CreateFundingAccountRequestV2;
import org.openapis.openapi.models.shared.CreateFundingAccountRequestV2TypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateFundingAccountRequestV2 req = new CreateFundingAccountRequestV2("sapiente", "3a669970-74ba-4446-9b6e-2141959890af", CreateFundingAccountRequestV2TypeEnum.WUBS_DECOUPLED) {{
                accountName = "ad";
                accountNumber = "eum";
                currency = "USD";
                routingNumber = "dolor";
            }};            

            CreateFundingAccountV2Response res = sdk.fundingManagerPrivate.createFundingAccountV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSourceAccountV3

Mark a source account as deleted by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceAccountV3Request;
import org.openapis.openapi.models.operations.DeleteSourceAccountV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSourceAccountV3Request req = new DeleteSourceAccountV3Request("2516fe4c-8b71-41e5-b7fd-2ed028921cdd");            

            DeleteSourceAccountV3Response res = sdk.fundingManagerPrivate.deleteSourceAccountV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
