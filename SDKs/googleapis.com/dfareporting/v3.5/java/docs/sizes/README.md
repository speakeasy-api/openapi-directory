# sizes

### Available Operations

* [dfareportingSizesGet](#dfareportingsizesget) - Gets one size by ID.
* [dfareportingSizesInsert](#dfareportingsizesinsert) - Inserts a new size.
* [dfareportingSizesList](#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

## dfareportingSizesGet

Gets one size by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSizesGetRequest;
import org.openapis.openapi.models.operations.DfareportingSizesGetResponse;
import org.openapis.openapi.models.operations.DfareportingSizesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSizesGetRequest req = new DfareportingSizesGetRequest("natus", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "necessitatibus";
                key = "nihil";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "hic";
                uploadProtocol = "natus";
            }};            

            DfareportingSizesGetResponse res = sdk.sizes.dfareportingSizesGet(req, new DfareportingSizesGetSecurity("commodi", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.size != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSizesInsert

Inserts a new size.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSizesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingSizesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingSizesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSizesInsertRequest req = new DfareportingSizesInsertRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                size = new Size() {{
                    height = 199218;
                    iab = false;
                    id = "rerum";
                    kind = "temporibus";
                    width = 119962;
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "quos";
                key = "laboriosam";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "voluptatem";
                uploadProtocol = "quod";
            }};            

            DfareportingSizesInsertResponse res = sdk.sizes.dfareportingSizesInsert(req, new DfareportingSizesInsertSecurity("cumque", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.size != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSizesList

Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSizesListRequest;
import org.openapis.openapi.models.operations.DfareportingSizesListResponse;
import org.openapis.openapi.models.operations.DfareportingSizesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSizesListRequest req = new DfareportingSizesListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "minima";
                height = 931305L;
                iabStandard = false;
                ids = new String[]{{
                    add("aut"),
                }};
                key = "perspiciatis";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "optio";
                uploadProtocol = "ullam";
                width = 958283L;
            }};            

            DfareportingSizesListResponse res = sdk.sizes.dfareportingSizesList(req, new DfareportingSizesListSecurity("amet", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sizesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
