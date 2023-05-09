# acmeChallengeSets

### Available Operations

* [acmednsAcmeChallengeSetsGet](#acmednsacmechallengesetsget) - Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
* [acmednsAcmeChallengeSetsRotateChallenges](#acmednsacmechallengesetsrotatechallenges) - Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

## acmednsAcmeChallengeSetsGet

Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.

### Example Usage

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

            AcmednsAcmeChallengeSetsGetRequest req = new AcmednsAcmeChallengeSetsGetRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
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

## acmednsAcmeChallengeSetsRotateChallenges

Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsRotateChallengesRequest;
import org.openapis.openapi.models.operations.AcmednsAcmeChallengeSetsRotateChallengesResponse;
import org.openapis.openapi.models.shared.AcmeTxtRecordInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RotateChallengesRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcmednsAcmeChallengeSetsRotateChallengesRequest req = new AcmednsAcmeChallengeSetsRotateChallengesRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                rotateChallengesRequestInput = new RotateChallengesRequestInput() {{
                    accessToken = "excepturi";
                    keepExpiredRecords = false;
                    recordsToAdd = new org.openapis.openapi.models.shared.AcmeTxtRecordInput[]{{
                        add(new AcmeTxtRecordInput() {{
                            digest = "recusandae";
                            fqdn = "temporibus";
                        }}),
                        add(new AcmeTxtRecordInput() {{
                            digest = "ab";
                            fqdn = "quis";
                        }}),
                    }};
                    recordsToRemove = new org.openapis.openapi.models.shared.AcmeTxtRecordInput[]{{
                        add(new AcmeTxtRecordInput() {{
                            digest = "deserunt";
                            fqdn = "perferendis";
                        }}),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            AcmednsAcmeChallengeSetsRotateChallengesResponse res = sdk.acmeChallengeSets.acmednsAcmeChallengeSetsRotateChallenges(req);

            if (res.acmeChallengeSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
