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
import org.openapis.openapi.models.operations.StsTokenRequest;
import org.openapis.openapi.models.operations.StsTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsTokenRequest req = new StsTokenRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleIdentityStsV1betaExchangeTokenRequest = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "provident";
                    grantType = "distinctio";
                    options = "quibusdam";
                    requestedTokenType = "unde";
                    scope = "nulla";
                    subjectToken = "corrupti";
                    subjectTokenType = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            StsTokenResponse res = sdk.v1beta.stsToken(req);

            if (res.googleIdentityStsV1betaExchangeTokenResponse != null) {
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


### [v1beta](docs/v1beta/README.md)

* [stsToken](docs/v1beta/README.md#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
