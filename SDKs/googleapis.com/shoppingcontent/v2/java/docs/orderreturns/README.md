# orderreturns

### Available Operations

* [contentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.

## contentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsGetRequest req = new ContentOrderreturnsGetRequest("quidem", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "eligendi";
                key = "asperiores";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "sint";
                uploadProtocol = "repellat";
            }};            

            ContentOrderreturnsGetResponse res = sdk.orderreturns.contentOrderreturnsGet(req, new ContentOrderreturnsGetSecurity("a", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.merchantOrderReturn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderreturnsList

Lists order returns in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderreturnsListOrderByEnum;
import org.openapis.openapi.models.operations.ContentOrderreturnsListRequest;
import org.openapis.openapi.models.operations.ContentOrderreturnsListResponse;
import org.openapis.openapi.models.operations.ContentOrderreturnsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderreturnsListRequest req = new ContentOrderreturnsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                createdEndDate = "velit";
                createdStartDate = "officiis";
                fields = "enim";
                key = "officia";
                maxResults = 902979L;
                oauthToken = "eum";
                orderBy = ContentOrderreturnsListOrderByEnum.RETURN_CREATION_TIME_ASC;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "impedit";
                uploadProtocol = "quasi";
            }};            

            ContentOrderreturnsListResponse res = sdk.orderreturns.contentOrderreturnsList(req, new ContentOrderreturnsListSecurity("blanditiis", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderreturnsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
