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

            DfareportingSizesGetRequest req = new DfareportingSizesGetRequest("asperiores", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "perspiciatis";
                key = "impedit";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "deserunt";
                uploadProtocol = "minima";
            }};            

            DfareportingSizesGetResponse res = sdk.sizes.dfareportingSizesGet(req, new DfareportingSizesGetSecurity("aliquid", "voluptas") {{
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

            DfareportingSizesInsertRequest req = new DfareportingSizesInsertRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                size = new Size() {{
                    height = 654062;
                    iab = false;
                    id = "quaerat";
                    kind = "quis";
                    width = 173241;
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                fields = "voluptatum";
                key = "exercitationem";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cumque";
                uploadProtocol = "asperiores";
            }};            

            DfareportingSizesInsertResponse res = sdk.sizes.dfareportingSizesInsert(req, new DfareportingSizesInsertSecurity("voluptatum", "inventore") {{
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

            DfareportingSizesListRequest req = new DfareportingSizesListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "tempore";
                height = 544580L;
                iabStandard = false;
                ids = new String[]{{
                    add("eos"),
                }};
                key = "vero";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "officia";
                uploadProtocol = "modi";
                width = 405033L;
            }};            

            DfareportingSizesListResponse res = sdk.sizes.dfareportingSizesList(req, new DfareportingSizesListSecurity("inventore", "minus") {{
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
