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
import org.openapis.openapi.models.operations.Oauth2TokeninfoRequest;
import org.openapis.openapi.models.operations.Oauth2TokeninfoResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Oauth2TokeninfoRequest req = new Oauth2TokeninfoRequest() {{
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                fields = "provident";
                idToken = "distinctio";
                key = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "corrupti";
            }};            

            Oauth2TokeninfoResponse res = sdk.oauth2Tokeninfo(req);

            if (res.tokeninfo != null) {
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

### [SDK](docs/sdk/README.md)

* [oauth2Tokeninfo](docs/sdk/README.md#oauth2tokeninfo) - Get token info

### [userinfo](docs/userinfo/README.md)

* [oauth2UserinfoGet](docs/userinfo/README.md#oauth2userinfoget) - Get user info
* [oauth2UserinfoV2MeGet](docs/userinfo/README.md#oauth2userinfov2meget) - Get user info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
