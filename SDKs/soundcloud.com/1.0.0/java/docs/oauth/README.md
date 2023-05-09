# oauth

## Overview

Authentication and Authorization Endpoints.

### Available Operations

* [getConnect](#getconnect) - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
* [postOauth2Token](#postoauth2token) - This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

## getConnect

<h3>Security Advice</h3>
* Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectRequest;
import org.openapis.openapi.models.operations.GetConnectResponse;
import org.openapis.openapi.models.operations.GetConnectSecurity;
import org.openapis.openapi.models.shared.ResponseTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectRequest req = new GetConnectRequest("aspernatur", "perferendis", ResponseTypeEnum.CODE, "natus") {{
                state = "sed";
            }};            

            GetConnectResponse res = sdk.oauth.getConnect(req, new GetConnectSecurity("iste", "dolor") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOauth2Token

This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOauth2TokenResponse;
import org.openapis.openapi.models.operations.PostOauth2TokenSecurity;
import org.openapis.openapi.models.shared.AuthorizationCode;
import org.openapis.openapi.models.shared.AuthorizationCodeGrantTypeEnum;
import org.openapis.openapi.models.shared.Password;
import org.openapis.openapi.models.shared.PasswordGrantTypeEnum;
import org.openapis.openapi.models.shared.RefreshToken;
import org.openapis.openapi.models.shared.RefreshTokenGrantTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new RefreshToken() {{
                clientId = "laboriosam";
                clientSecret = "hic";
                grantType = RefreshTokenGrantTypeEnum.REFRESH_TOKEN;
                redirectUri = "saepe";
                refreshToken = "fuga";
            }}            

            PostOauth2TokenResponse res = sdk.oauth.postOauth2Token(req, new PostOauth2TokenSecurity("in") {{
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
