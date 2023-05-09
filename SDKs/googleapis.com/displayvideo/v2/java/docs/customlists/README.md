# customLists

### Available Operations

* [displayvideoCustomListsGet](#displayvideocustomlistsget) - Gets a custom list.
* [displayvideoCustomListsList](#displayvideocustomlistslist) - Lists custom lists. The order is defined by the order_by parameter.

## displayvideoCustomListsGet

Gets a custom list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomListsGetRequest req = new DisplayvideoCustomListsGetRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                advertiserId = "ea";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "quidem";
                key = "asperiores";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "repudiandae";
                uploadProtocol = "nemo";
            }};            

            DisplayvideoCustomListsGetResponse res = sdk.customLists.displayvideoCustomListsGet(req, new DisplayvideoCustomListsGetSecurity("molestias", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomListsList

Lists custom lists. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomListsListRequest req = new DisplayvideoCustomListsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                advertiserId = "praesentium";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "repudiandae";
                filter = "maiores";
                key = "ipsum";
                oauthToken = "commodi";
                orderBy = "vitae";
                pageSize = 147297L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "neque";
                uploadProtocol = "quod";
            }};            

            DisplayvideoCustomListsListResponse res = sdk.customLists.displayvideoCustomListsList(req, new DisplayvideoCustomListsListSecurity("eos", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
