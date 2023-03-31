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

import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelPathParams;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelRequest;
import org.openapis.openapi.models.operations.AndroidpublisherPurchasesCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherPurchasesCancelRequest req = new AndroidpublisherPurchasesCancelRequest() {{
                security = new AndroidpublisherPurchasesCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherPurchasesCancelPathParams() {{
                    packageName = "corrupti";
                    subscriptionId = "provident";
                    token = "distinctio";
                }};
                queryParams = new AndroidpublisherPurchasesCancelQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
            }};            

            AndroidpublisherPurchasesCancelResponse res = sdk.purchases.androidpublisherPurchasesCancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### purchases

* `androidpublisherPurchasesCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisherPurchasesGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
