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

            RealtimebiddingBiddersCreativesWatchRequest req = new RealtimebiddingBiddersCreativesWatchRequest() {{
                security = new RealtimebiddingBiddersCreativesWatchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RealtimebiddingBiddersCreativesWatchPathParams() {{
                    parent = "consequatur";
                }};
                queryParams = new RealtimebiddingBiddersCreativesWatchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "consequatur";
                    alt = "media";
                    callback = "amet";
                    fields = "quia";
                    key = "sed";
                    oauthToken = "ut";
                    prettyPrint = false;
                    quotaUser = "repudiandae";
                    uploadType = "tempore";
                    uploadProtocol = "et";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "voluptas");
                    put("sint", "animi");
                }};
            }};

            RealtimebiddingBiddersCreativesWatchResponse res = sdk.bidders.realtimebiddingBiddersCreativesWatch(req);

            if (res.watchCreativesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->