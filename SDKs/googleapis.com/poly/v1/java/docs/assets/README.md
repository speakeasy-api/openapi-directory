# assets

### Available Operations

* [polyAssetsGet](#polyassetsget) - Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
* [polyAssetsList](#polyassetslist) - Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

## polyAssetsGet

Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolyAssetsGetRequest;
import org.openapis.openapi.models.operations.PolyAssetsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolyAssetsGetRequest req = new PolyAssetsGetRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            PolyAssetsGetResponse res = sdk.assets.polyAssetsGet(req);

            if (res.asset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## polyAssetsList

Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolyAssetsListMaxComplexityEnum;
import org.openapis.openapi.models.operations.PolyAssetsListRequest;
import org.openapis.openapi.models.operations.PolyAssetsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolyAssetsListRequest req = new PolyAssetsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                category = "recusandae";
                curated = false;
                fields = "temporibus";
                format = "ab";
                key = "quis";
                keywords = "veritatis";
                maxComplexity = PolyAssetsListMaxComplexityEnum.MEDIUM;
                oauthToken = "perferendis";
                orderBy = "ipsam";
                pageSize = 832620L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            PolyAssetsListResponse res = sdk.assets.polyAssetsList(req);

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
