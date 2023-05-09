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

            DfareportingSizesGetRequest req = new DfareportingSizesGetRequest("possimus", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "esse";
                key = "officia";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "cumque";
                uploadProtocol = "ipsum";
            }};            

            DfareportingSizesGetResponse res = sdk.sizes.dfareportingSizesGet(req, new DfareportingSizesGetSecurity("dolorem", "culpa") {{
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

            DfareportingSizesInsertRequest req = new DfareportingSizesInsertRequest("placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                size = new Size() {{
                    height = 465148;
                    iab = false;
                    id = "amet";
                    kind = "quidem";
                    width = 270937;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "nihil";
                key = "tempore";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "exercitationem";
                uploadProtocol = "dolor";
            }};            

            DfareportingSizesInsertResponse res = sdk.sizes.dfareportingSizesInsert(req, new DfareportingSizesInsertSecurity("necessitatibus", "eius") {{
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

            DfareportingSizesListRequest req = new DfareportingSizesListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "ullam";
                height = 708881L;
                iabStandard = false;
                ids = new String[]{{
                    add("voluptatum"),
                    add("eos"),
                    add("molestiae"),
                }};
                key = "nihil";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "sapiente";
                uploadProtocol = "nisi";
                width = 844078L;
            }};            

            DfareportingSizesListResponse res = sdk.sizes.dfareportingSizesList(req, new DfareportingSizesListSecurity("odit", "possimus") {{
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
