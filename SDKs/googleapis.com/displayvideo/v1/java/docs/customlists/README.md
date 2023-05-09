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

            DisplayvideoCustomListsGetRequest req = new DisplayvideoCustomListsGetRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                advertiserId = "atque";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "temporibus";
                key = "a";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "suscipit";
                uploadProtocol = "reiciendis";
            }};            

            DisplayvideoCustomListsGetResponse res = sdk.customLists.displayvideoCustomListsGet(req, new DisplayvideoCustomListsGetSecurity("repellendus", "delectus") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                advertiserId = "possimus";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "quam";
                filter = "animi";
                key = "debitis";
                oauthToken = "voluptatum";
                orderBy = "voluptatem";
                pageSize = 789286L;
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "architecto";
                uploadProtocol = "sint";
            }};            

            DisplayvideoCustomListsListResponse res = sdk.customLists.displayvideoCustomListsList(req, new DisplayvideoCustomListsListSecurity("eligendi", "occaecati") {{
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
