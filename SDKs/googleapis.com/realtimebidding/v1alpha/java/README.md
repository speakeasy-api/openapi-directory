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
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersBiddingFunctionsActivateRequest req = new RealtimebiddingBiddersBiddingFunctionsActivateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            RealtimebiddingBiddersBiddingFunctionsActivateResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsActivate(req, new RealtimebiddingBiddersBiddingFunctionsActivateSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.biddingFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bidders](docs/bidders/README.md)

* [realtimebiddingBiddersBiddingFunctionsActivate](docs/bidders/README.md#realtimebiddingbiddersbiddingfunctionsactivate) - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* [realtimebiddingBiddersBiddingFunctionsArchive](docs/bidders/README.md#realtimebiddingbiddersbiddingfunctionsarchive) - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* [realtimebiddingBiddersBiddingFunctionsCreate](docs/bidders/README.md#realtimebiddingbiddersbiddingfunctionscreate) - Creates a new bidding function.
* [realtimebiddingBiddersBiddingFunctionsList](docs/bidders/README.md#realtimebiddingbiddersbiddingfunctionslist) - Lists the bidding functions that a bidder currently has registered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
