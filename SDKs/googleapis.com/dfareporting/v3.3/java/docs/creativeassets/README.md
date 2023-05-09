# creativeAssets

### Available Operations

* [dfareportingCreativeAssetsInsert](#dfareportingcreativeassetsinsert) - Inserts a new creative asset.

## dfareportingCreativeAssetsInsert

Inserts a new creative asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeAssetsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeAssetsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeAssetsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClickTag;
import org.openapis.openapi.models.shared.CreativeAssetId;
import org.openapis.openapi.models.shared.CreativeAssetIdTypeEnum;
import org.openapis.openapi.models.shared.CreativeAssetMetadata;
import org.openapis.openapi.models.shared.CreativeAssetMetadataDetectedFeaturesEnum;
import org.openapis.openapi.models.shared.CreativeAssetMetadataWarnedValidationRulesEnum;
import org.openapis.openapi.models.shared.CreativeClickThroughUrl;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeAssetsInsertRequest req = new DfareportingCreativeAssetsInsertRequest("quaerat", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "deserunt".getBytes();
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "consequuntur";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "ratione";
                uploadProtocol = "nisi";
            }};            

            DfareportingCreativeAssetsInsertResponse res = sdk.creativeAssets.dfareportingCreativeAssetsInsert(req, new DfareportingCreativeAssetsInsertSecurity("perspiciatis", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeAssetMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
