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
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateRequest;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateResponse;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAppInput;
import org.openapis.openapi.models.shared.Organization;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaycustomappAccountsCustomAppsCreateRequest req = new PlaycustomappAccountsCustomAppsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "distinctio".getBytes();
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            PlaycustomappAccountsCustomAppsCreateResponse res = sdk.accounts.playcustomappAccountsCustomAppsCreate(req, new PlaycustomappAccountsCustomAppsCreateSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customApp != null) {
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


### [accounts](docs/accounts/README.md)

* [playcustomappAccountsCustomAppsCreate](docs/accounts/README.md#playcustomappaccountscustomappscreate) - Creates a new custom app.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
