<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AdUnitStateEnum;
import org.openapis.openapi.models.shared.AdUnitInput;
import org.openapis.openapi.models.shared.ContentAdsSettingsTypeEnum;
import org.openapis.openapi.models.shared.ContentAdsSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsCreateRequest req = new AdsenseAccountsAdclientsAdunitsCreateRequest() {{
                dollarXgafv = "2";
                adUnitInput = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "provident";
                        type = "MATCHED_CONTENT";
                    }};
                    displayName = "quibusdam";
                    state = "ACTIVE";
                }};
                accessToken = "nulla";
                alt = "media";
                callback = "illum";
                fields = "vel";
                key = "error";
                oauthToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            AdsenseAccountsAdclientsAdunitsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req, new AdsenseAccountsAdclientsAdunitsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->