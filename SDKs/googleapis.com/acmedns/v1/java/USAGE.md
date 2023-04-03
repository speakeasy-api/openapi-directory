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

            AcmednsAcmeChallengeSetsGetRequest req = new AcmednsAcmeChallengeSetsGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                rootDomain = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            AcmednsAcmeChallengeSetsGetResponse res = sdk.acmeChallengeSets.acmednsAcmeChallengeSetsGet(req);

            if (res.acmeChallengeSet.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->