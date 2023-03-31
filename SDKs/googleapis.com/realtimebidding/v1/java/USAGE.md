<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchSecurity;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchPathParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchQueryParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RealtimebiddingBiddersCreativesWatchQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
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