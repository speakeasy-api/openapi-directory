<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreatePathParams;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateQueryParams;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateResponse;
import org.openapis.openapi.models.shared.AdUnitStateEnum;
import org.openapis.openapi.models.shared.AdUnitInput;
import org.openapis.openapi.models.shared.ContentAdsSettingsTypeEnum;
import org.openapis.openapi.models.shared.ContentAdsSettings;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsCreateRequest req = new AdsenseAccountsAdclientsAdunitsCreateRequest() {{
                security = new AdsenseAccountsAdclientsAdunitsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdsenseAccountsAdclientsAdunitsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AdsenseAccountsAdclientsAdunitsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "suscipit";
                        type = "FEED";
                    }};
                    displayName = "magnam";
                    state = "ARCHIVED";
                }};
            }};            

            AdsenseAccountsAdclientsAdunitsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req);

            if (res.adUnit.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->