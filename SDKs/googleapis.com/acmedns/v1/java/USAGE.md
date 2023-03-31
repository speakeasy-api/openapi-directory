<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsGetPathParams;
import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsGetQueryParams;
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
                pathParams = new AcmednsAcmeChallengeSetsGetPathParams() {{
                    rootDomain = "corrupti";
                }};
                queryParams = new AcmednsAcmeChallengeSetsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            AcmednsAcmeChallengeSetsGetResponse res = sdk.acmeChallengeSets.acmednsAcmeChallengeSetsGet(req);

            if (res.acmeChallengeSet.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->