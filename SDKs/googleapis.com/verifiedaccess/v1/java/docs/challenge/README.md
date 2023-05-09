# challenge

### Available Operations

* [verifiedaccessChallengeCreate](#verifiedaccesschallengecreate) - CreateChallenge API
* [verifiedaccessChallengeVerify](#verifiedaccesschallengeverify) - VerifyChallengeResponse API

## verifiedaccessChallengeCreate

CreateChallenge API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateResponse;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifiedaccessChallengeCreateRequest req = new VerifiedaccessChallengeCreateRequest() {{
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

            VerifiedaccessChallengeCreateResponse res = sdk.challenge.verifiedaccessChallengeCreate(req, new VerifiedaccessChallengeCreateSecurity("at", "at") {{
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

VerifyChallengeResponse API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifyRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifyResponse;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeVerifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SignedData;
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
                    challengeResponse = new SignedData() {{
                        data = "molestiae";
                        signature = "quod";
                    }};;
                    expectedIdentity = "quod";
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            VerifiedaccessChallengeVerifyResponse res = sdk.challenge.verifiedaccessChallengeVerify(req, new VerifiedaccessChallengeVerifySecurity("deleniti", "hic") {{
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
