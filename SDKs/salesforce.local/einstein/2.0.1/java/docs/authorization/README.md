# authorization

## Overview

Resources that manage authorization tokens.

### Available Operations

* [generateTokenV2](#generatetokenv2) - Generate an OAuth Token
* [revokeRefreshTokenV2](#revokerefreshtokenv2) - Delete a Refresh Token

## generateTokenV2

Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.

authentication guid
<https://metamind.readme.io/docs/generate-an-oauth-access-token>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBody;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBodyGrantTypeEnum;
import org.openapis.openapi.models.operations.GenerateTokenV2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateTokenV2RequestBody req = new GenerateTokenV2RequestBody() {{
                assertion = "SOME_ASSERTION_STRING";
                grantType = GenerateTokenV2RequestBodyGrantTypeEnum.URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER;
                refreshToken = "SomeRefreshToken";
                scope = "offline";
                validFor = 120;
            }};            

            GenerateTokenV2Response res = sdk.authorization.generateTokenV2(req);

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeRefreshTokenV2

Delete a Refresh Token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeRefreshTokenV2Request;
import org.openapis.openapi.models.operations.RevokeRefreshTokenV2Response;
import org.openapis.openapi.models.operations.RevokeRefreshTokenV2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RevokeRefreshTokenV2Request req = new RevokeRefreshTokenV2Request("corrupti");            

            RevokeRefreshTokenV2Response res = sdk.authorization.revokeRefreshTokenV2(req, new RevokeRefreshTokenV2Security("provident") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
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
