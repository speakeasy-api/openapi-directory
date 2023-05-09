# oauth

### Available Operations

* [authorize](#authorize) - Authorize applications
* [createAccessTokenForm](#createaccesstokenform) - Get access tokens
* [createAccessTokenJson](#createaccesstokenjson) - Get access tokens

## authorize

This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizeRealmEnum;
import org.openapis.openapi.models.operations.AuthorizeRequest;
import org.openapis.openapi.models.operations.AuthorizeResponse;
import org.openapis.openapi.models.operations.AuthorizeResponseTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeRequest req = new AuthorizeRequest("neque", "corporis", AuthorizeResponseTypeEnum.CODE, "voluptas") {{
                realm = AuthorizeRealmEnum.CUSTOMER;
                scope = "officia";
            }};            

            AuthorizeResponse res = sdk.oauth.authorize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessTokenForm

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationXWwwFormUrlencoded;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;
import org.openapis.openapi.models.operations.CreateAccessTokenFormResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenApplicationXWwwFormUrlencoded req = new CreateAccessTokenApplicationXWwwFormUrlencoded("reprehenderit", CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum.REFRESH_TOKEN) {{
                clientSecret = "eius";
                code = "ipsa";
                expires = CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum.FALSE;
                realm = CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum.CONTRIBUTOR;
                refreshToken = "accusantium";
            }};            

            CreateAccessTokenFormResponse res = sdk.oauth.createAccessTokenForm(req);

            if (res.oauthAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessTokenJson

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationJSON;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationJSONGrantTypeEnum;
import org.openapis.openapi.models.operations.CreateAccessTokenApplicationJSONRealmEnum;
import org.openapis.openapi.models.operations.CreateAccessTokenJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenApplicationJSON req = new CreateAccessTokenApplicationJSON("veniam", CreateAccessTokenApplicationJSONGrantTypeEnum.REFRESH_TOKEN) {{
                clientSecret = "neque";
                code = "facere";
                expires = false;
                realm = CreateAccessTokenApplicationJSONRealmEnum.CUSTOMER;
                refreshToken = "quos";
            }};            

            CreateAccessTokenJsonResponse res = sdk.oauth.createAccessTokenJson(req);

            if (res.oauthAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
