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
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
import org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest req = new IdentificationTokenGenerationRequest("corrupti") {{
                firstName = "Larue";
                lastName = "Rau";
            }};            

            PostVisitorIdentificationV3TokensCreateGenerateTokenResponse res = sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req, new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.identificationTokenResponse != null) {
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


### [generate](docs/generate/README.md)

* [postVisitorIdentificationV3TokensCreateGenerateToken](docs/generate/README.md#postvisitoridentificationv3tokenscreategeneratetoken) - Generate a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
