# associationsessions

### Available Operations

* [adsensehostAssociationsessionsStart](#adsensehostassociationsessionsstart) - Create an association session for initiating an association with an AdSense user.
* [adsensehostAssociationsessionsVerify](#adsensehostassociationsessionsverify) - Verify an association session after the association callback returns from AdSense signup.

## adsensehostAssociationsessionsStart

Create an association session for initiating an association with an AdSense user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsStartProductCodeEnum;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsStartRequest;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsStartResponse;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAssociationsessionsStartRequest req = new AdsensehostAssociationsessionsStartRequest(                new org.openapis.openapi.models.operations.AdsensehostAssociationsessionsStartProductCodeEnum[]{{
                                add(AdsensehostAssociationsessionsStartProductCodeEnum.AFS),
                                add(AdsensehostAssociationsessionsStartProductCodeEnum.AFS),
                                add(AdsensehostAssociationsessionsStartProductCodeEnum.AFMC),
                                add(AdsensehostAssociationsessionsStartProductCodeEnum.AFC),
                            }}, "porro") {{
                alt = AltEnum.CSV;
                callbackUrl = "blanditiis";
                fields = "error";
                key = "eaque";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "rerum";
                userIp = "adipisci";
                userLocale = "asperiores";
                websiteLocale = "earum";
            }};            

            AdsensehostAssociationsessionsStartResponse res = sdk.associationsessions.adsensehostAssociationsessionsStart(req, new AdsensehostAssociationsessionsStartSecurity("modi", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.associationSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAssociationsessionsVerify

Verify an association session after the association callback returns from AdSense signup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsVerifyRequest;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsVerifyResponse;
import org.openapis.openapi.models.operations.AdsensehostAssociationsessionsVerifySecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAssociationsessionsVerifyRequest req = new AdsensehostAssociationsessionsVerifyRequest("dolorum") {{
                alt = AltEnum.JSON;
                fields = "pariatur";
                key = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                userIp = "delectus";
            }};            

            AdsensehostAssociationsessionsVerifyResponse res = sdk.associationsessions.adsensehostAssociationsessionsVerify(req, new AdsensehostAssociationsessionsVerifySecurity("quaerat", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.associationSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
