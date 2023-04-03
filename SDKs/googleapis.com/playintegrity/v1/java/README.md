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

import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenSecurity;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenRequest;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DecodeIntegrityTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayintegrityDecodeIntegrityTokenRequest req = new PlayintegrityDecodeIntegrityTokenRequest() {{
                dollarXgafv = "2";
                decodeIntegrityTokenRequest = new DecodeIntegrityTokenRequest() {{
                    integrityToken = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                packageName = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            PlayintegrityDecodeIntegrityTokenResponse res = sdk.v1.playintegrityDecodeIntegrityToken(req, new PlayintegrityDecodeIntegrityTokenSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.decodeIntegrityTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `playintegrityDecodeIntegrityToken` - Decodes the integrity token and returns the token payload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
