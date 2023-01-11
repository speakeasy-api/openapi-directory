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

            RealtimebiddingBiddersBiddingFunctionsActivateRequest req = new RealtimebiddingBiddersBiddingFunctionsActivateRequest() {{
                security = new RealtimebiddingBiddersBiddingFunctionsActivateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RealtimebiddingBiddersBiddingFunctionsActivatePathParams() {{
                    name = "repudiandae";
                }};
                queryParams = new RealtimebiddingBiddersBiddingFunctionsActivateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eligendi";
                    alt = "json";
                    callback = "est";
                    fields = "ut";
                    key = "distinctio";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "deserunt";
                    uploadType = "sed";
                    uploadProtocol = "ipsa";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("qui", "voluptatum");
                    put("inventore", "quis");
                }};
            }};

            RealtimebiddingBiddersBiddingFunctionsActivateResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsActivate(req);

            if (res.biddingFunction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->