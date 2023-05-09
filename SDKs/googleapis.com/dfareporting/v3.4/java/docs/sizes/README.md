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

            DfareportingSizesGetRequest req = new DfareportingSizesGetRequest("iusto", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "incidunt";
                key = "quae";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "porro";
                uploadProtocol = "deleniti";
            }};            

            DfareportingSizesGetResponse res = sdk.sizes.dfareportingSizesGet(req, new DfareportingSizesGetSecurity("commodi", "voluptatibus") {{
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

            DfareportingSizesInsertRequest req = new DfareportingSizesInsertRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                size = new Size() {{
                    height = 828420;
                    iab = false;
                    id = "nostrum";
                    kind = "nisi";
                    width = 372457;
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "esse";
                key = "iusto";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "reiciendis";
                uploadProtocol = "totam";
            }};            

            DfareportingSizesInsertResponse res = sdk.sizes.dfareportingSizesInsert(req, new DfareportingSizesInsertSecurity("et", "maiores") {{
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

            DfareportingSizesListRequest req = new DfareportingSizesListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "nisi";
                height = 586095L;
                iabStandard = false;
                ids = new String[]{{
                    add("quo"),
                    add("facilis"),
                    add("ut"),
                }};
                key = "perspiciatis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "explicabo";
                uploadProtocol = "ullam";
                width = 473927L;
            }};            

            DfareportingSizesListResponse res = sdk.sizes.dfareportingSizesList(req, new DfareportingSizesListSecurity("debitis", "libero") {{
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
