# csses

### Available Operations

* [contentCssesGet](#contentcssesget) - Retrieves a single CSS domain by ID.
* [contentCssesList](#contentcsseslist) - Lists CSS domains affiliated with a CSS group.
* [contentCssesUpdatelabels](#contentcssesupdatelabels) - Updates labels that are assigned to a CSS domain by its CSS group.

## contentCssesGet

Retrieves a single CSS domain by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCssesGetRequest;
import org.openapis.openapi.models.operations.ContentCssesGetResponse;
import org.openapis.openapi.models.operations.ContentCssesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCssesGetRequest req = new ContentCssesGetRequest("perspiciatis", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "dolorem";
                key = "fugit";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "ratione";
                uploadProtocol = "animi";
            }};            

            ContentCssesGetResponse res = sdk.csses.contentCssesGet(req, new ContentCssesGetSecurity("necessitatibus", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.css != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentCssesList

Lists CSS domains affiliated with a CSS group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCssesListRequest;
import org.openapis.openapi.models.operations.ContentCssesListResponse;
import org.openapis.openapi.models.operations.ContentCssesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCssesListRequest req = new ContentCssesListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "occaecati";
                key = "suscipit";
                oauthToken = "adipisci";
                pageSize = 96562L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "nulla";
                uploadProtocol = "necessitatibus";
            }};            

            ContentCssesListResponse res = sdk.csses.contentCssesList(req, new ContentCssesListSecurity("ipsa", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCssesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentCssesUpdatelabels

Updates labels that are assigned to a CSS domain by its CSS group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCssesUpdatelabelsRequest;
import org.openapis.openapi.models.operations.ContentCssesUpdatelabelsResponse;
import org.openapis.openapi.models.operations.ContentCssesUpdatelabelsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LabelIds;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCssesUpdatelabelsRequest req = new ContentCssesUpdatelabelsRequest("nihil", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                labelIds = new LabelIds() {{
                    labelIds = new String[]{{
                        add("esse"),
                        add("praesentium"),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "architecto";
                key = "fugiat";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "odio";
                uploadProtocol = "tempora";
            }};            

            ContentCssesUpdatelabelsResponse res = sdk.csses.contentCssesUpdatelabels(req, new ContentCssesUpdatelabelsSecurity("esse", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.css != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
