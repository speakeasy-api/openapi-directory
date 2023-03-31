<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivatePathParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new RealtimebiddingBiddersBiddingFunctionsActivateQueryParams() {{
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

            RealtimebiddingBiddersBiddingFunctionsActivateResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsActivate(req);

            if (res.biddingFunction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->