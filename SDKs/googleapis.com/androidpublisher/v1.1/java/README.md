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
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInapppurchasesGetRequest req = new AndroidpublisherInapppurchasesGetRequest("corrupti", "provident", "distinctio") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                userIp = "illum";
            }};            

            AndroidpublisherInapppurchasesGetResponse res = sdk.inapppurchases.androidpublisherInapppurchasesGet(req, new AndroidpublisherInapppurchasesGetSecurity("vel", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
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


### [inapppurchases](docs/inapppurchases/README.md)

* [androidpublisherInapppurchasesGet](docs/inapppurchases/README.md#androidpublisherinapppurchasesget) - Checks the purchase and consumption status of an inapp item.

### [purchases](docs/purchases/README.md)

* [androidpublisherPurchasesCancel](docs/purchases/README.md#androidpublisherpurchasescancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesGet](docs/purchases/README.md#androidpublisherpurchasesget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
