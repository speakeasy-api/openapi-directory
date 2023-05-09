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
import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsGetRequest;
import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcmednsAcmeChallengeSetsGetRequest req = new AcmednsAcmeChallengeSetsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            AcmednsAcmeChallengeSetsGetResponse res = sdk.acmeChallengeSets.acmednsAcmeChallengeSetsGet(req);

            if (res.acmeChallengeSet != null) {
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


### [acmeChallengeSets](docs/acmechallengesets/README.md)

* [acmednsAcmeChallengeSetsGet](docs/acmechallengesets/README.md#acmednsacmechallengesetsget) - Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
* [acmednsAcmeChallengeSetsRotateChallenges](docs/acmechallengesets/README.md#acmednsacmechallengesetsrotatechallenges) - Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
