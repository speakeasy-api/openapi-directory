# oAuth

### Available Operations

* [obtainToken](#obtaintoken) - ObtainToken
* [renewToken](#renewtoken) - RenewToken
* [revokeToken](#revoketoken) - RevokeToken

## obtainToken

Returns an OAuth access token.

The endpoint supports distinct methods of obtaining OAuth access tokens.
Applications specify a method by adding the `grant_type` parameter
in the request and also provide relevant information.

__Note:__ Regardless of the method application specified,
the endpoint always returns two items; an OAuth access token and
a refresh token in the response.

__OAuth tokens should only live on secure servers. Application clients
should never interact directly with OAuth tokens__.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ObtainTokenResponse;
import org.openapis.openapi.models.shared.ObtainTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ObtainTokenRequest req = new ObtainTokenRequest("quidem", "excepturi", "ipsum") {{
                code = "accusamus";
                migrationToken = "consectetur";
                redirectUri = "tempora";
                refreshToken = "sequi";
                scopes = new String[]{{
                    add("aliquid"),
                }};
                shortLived = false;
            }};            

            ObtainTokenResponse res = sdk.oAuth.obtainToken(req);

            if (res.obtainTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewToken

`RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
[Migrate from Renew to Refresh OAuth Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).


Renews an OAuth access token before it expires.

OAuth access tokens besides your application's personal access token expire after __30 days__.
You can also renew expired tokens within __15 days__ of their expiration.
You cannot renew an access token that has been expired for more than 15 days.
Instead, the associated user must re-complete the OAuth flow from the beginning.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [developer dashboard](https://developer.squareup.com/apps).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewTokenRequest;
import org.openapis.openapi.models.operations.RenewTokenResponse;
import org.openapis.openapi.models.operations.RenewTokenSecurity;
import org.openapis.openapi.models.shared.RenewTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenewTokenRequest req = new RenewTokenRequest(                new RenewTokenRequest() {{
                                accessToken = "placeat";
                            }};, "sapiente");            

            RenewTokenResponse res = sdk.oAuth.renewToken(req, new RenewTokenSecurity("corporis") {{
                oauth2ClientSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.renewTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeToken

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. When an
OAuth access token is revoked, all of the active subscriptions associated
with that OAuth token are canceled immediately.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the OAuth
page in the [developer dashboard](https://developer.squareup.com/apps).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeTokenResponse;
import org.openapis.openapi.models.operations.RevokeTokenSecurity;
import org.openapis.openapi.models.shared.RevokeTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RevokeTokenRequest req = new RevokeTokenRequest() {{
                accessToken = "nemo";
                clientId = "soluta";
                merchantId = "magnam";
                revokeOnlyAccessToken = false;
            }};            

            RevokeTokenResponse res = sdk.oAuth.revokeToken(req, new RevokeTokenSecurity("sequi") {{
                oauth2ClientSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.revokeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
