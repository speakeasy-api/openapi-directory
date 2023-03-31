# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bidders

* `realtimebiddingBiddersBiddingFunctionsActivate` - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* `realtimebiddingBiddersBiddingFunctionsArchive` - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* `realtimebiddingBiddersBiddingFunctionsCreate` - Creates a new bidding function.
* `realtimebiddingBiddersBiddingFunctionsList` - Lists the bidding functions that a bidder currently has registered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
