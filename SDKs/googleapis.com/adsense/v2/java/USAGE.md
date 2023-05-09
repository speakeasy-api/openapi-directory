<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateSecurity;
import org.openapis.openapi.models.shared.AdUnitInput;
import org.openapis.openapi.models.shared.AdUnitStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentAdsSettings;
import org.openapis.openapi.models.shared.ContentAdsSettingsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsCreateRequest req = new AdsenseAccountsAdclientsAdunitsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                adUnitInput = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "distinctio";
                        type = ContentAdsSettingsTypeEnum.LINK;
                    }};;
                    displayName = "unde";
                    state = AdUnitStateEnum.ARCHIVED;
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            AdsenseAccountsAdclientsAdunitsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req, new AdsenseAccountsAdclientsAdunitsCreateSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->