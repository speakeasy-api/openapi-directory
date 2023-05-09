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
import org.openapis.openapi.models.shared.CreativeCustomEvent;
import org.openapis.openapi.models.shared.CreativeCustomEventAdvertiserCustomEventTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventArtworkTypeEnum;
import org.openapis.openapi.models.shared.CreativeCustomEventTargetTypeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.OffsetPosition;
import org.openapis.openapi.models.shared.PopupWindowProperties;
import org.openapis.openapi.models.shared.PopupWindowPropertiesPositionTypeEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeAssetsInsertRequest req = new DfareportingCreativeAssetsInsertRequest("consequuntur", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "quibusdam".getBytes();
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "omnis";
                key = "quibusdam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sint";
                uploadProtocol = "doloribus";
            }};            

            DfareportingCreativeAssetsInsertResponse res = sdk.creativeAssets.dfareportingCreativeAssetsInsert(req, new DfareportingCreativeAssetsInsertSecurity("magnam", "adipisci") {{
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
