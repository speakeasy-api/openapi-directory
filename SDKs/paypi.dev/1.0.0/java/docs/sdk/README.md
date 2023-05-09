# SDK

## Overview

OTP email verification API by PayPI. <br/><br/>
EmailVerify provides a simple way to verify email addresses. We send emails ourselves taking the burden of setting up email systems and tracking codes. <br/><br/>
To learn more about this API, check out [EmailVerify documentation](https://emailverify.paypi.dev/) <br/><br/>

## Authentication
All requests to the EmailVerify API must be authenticated with an API Key. To get an API key, subscribe to the EmailVerify [here](https://app.paypi.dev/subscribe/c2VydmljZTo1OGQxZDNmMy05OWQ5LTQ3ZjYtOWJkNi02OWNkMTY1OGFmOWU=).  \
Set your `Authorization` header to `Bearer YOUR-API-KEY`. 
```
curl
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR-API-KEY" \
...
```


### Available Operations

* [postCheckCode](#postcheckcode) - Check verification code
* [postSendCode](#postsendcode) - Send verification code

## postCheckCode

Checks the user's emailed code is valid. 
If this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckCodeRequestBody;
import org.openapis.openapi.models.operations.PostCheckCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostCheckCodeRequestBody req = new PostCheckCodeRequestBody() {{
                code = "error";
                email = "Gerda89@yahoo.com";
            }};            

            PostCheckCodeResponse res = sdk.sdk.postCheckCode(req);

            if (res.postCheckCode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendCode

This request send's a code to the given email address, which should be returned to check it is correct.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSendCodeRequestBody;
import org.openapis.openapi.models.operations.PostSendCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostSendCodeRequestBody req = new PostSendCodeRequestBody() {{
                email = "Donny_Hoppe@hotmail.com";
            }};            

            PostSendCodeResponse res = sdk.sdk.postSendCode(req);

            if (res.postSendCode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
