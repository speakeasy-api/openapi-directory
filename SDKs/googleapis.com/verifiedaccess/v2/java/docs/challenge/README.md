# challenge

### Available Operations

* [verifiedaccessChallengeGenerate](#verifiedaccesschallengegenerate) - Generates a new challenge.
* [verifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - Verifies the challenge response.

## verifiedaccessChallengeGenerate

Generates a new challenge.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeGenerateRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeGenerateResponse;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifiedaccessChallengeGenerateRequest req = new VerifiedaccessChallengeGenerateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("placeat", "voluptatum");
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            VerifiedaccessChallengeGenerateResponse res = sdk.challenge.verifiedaccessChallengeGenerate(req, new VerifiedaccessChallengeGenerateSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.challenge != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifiedaccessChallengeVerify

Verifies the challenge response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifyRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifyResponse;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VerifyChallengeResponseRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifiedaccessChallengeVerifyRequest req = new VerifiedaccessChallengeVerifyRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                verifyChallengeResponseRequest = new VerifyChallengeResponseRequest() {{
                    challengeResponse = "molestiae";
                    expectedIdentity = "quod";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            VerifiedaccessChallengeVerifyResponse res = sdk.challenge.verifiedaccessChallengeVerify(req, new VerifiedaccessChallengeVerifySecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verifyChallengeResponseResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
