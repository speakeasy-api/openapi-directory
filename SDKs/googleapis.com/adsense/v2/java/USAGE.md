<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new AdsenseAccountsAdclientsAdunitsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "dicta";
                        type = "TYPE_UNSPECIFIED";
                    }};
                    displayName = "voluptatum";
                    state = "STATE_UNSPECIFIED";
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