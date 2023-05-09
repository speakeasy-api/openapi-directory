# tokens

## Overview

<p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
<p>Tokens have an expiry and are one-time use only</p>


### Available Operations

* [resendToken](#resendtoken) - Resend a token

## resendToken

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendTokenRequest;
import org.openapis.openapi.models.operations.ResendTokenResponse;
import org.openapis.openapi.models.shared.ResendTokenRequest;
import org.openapis.openapi.models.shared.ResendTokenRequestTokenTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResendTokenRequest req = new ResendTokenRequest(                new ResendTokenRequest(ResendTokenRequestTokenTypeEnum.INVITE_MFA_USER) {{
                                verificationCode = "123456";
                            }};, "3db4f62c-ba3f-4894-9aeb-c0b80a6924d3");            

            ResendTokenResponse res = sdk.tokens.resendToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
