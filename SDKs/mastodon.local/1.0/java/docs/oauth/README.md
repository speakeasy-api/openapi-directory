# oauth

### Available Operations

* [getOauthAuthorize](#getoauthauthorize) - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* [postOauthRevoke](#postoauthrevoke) - Revoke an access token to make it no longer valid for use.
* [postOauthToken](#postoauthtoken) - Returns an access token, to be used during API calls that are not public.

## getOauthAuthorize

Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOauthAuthorizeRequest;
import org.openapis.openapi.models.operations.GetOauthAuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOauthAuthorizeRequest req = new GetOauthAuthorizeRequest("modi", "iste", "dolorum") {{
                forceLogin = false;
                scope = "deleniti";
            }};            

            GetOauthAuthorizeResponse res = sdk.oauth.getOauthAuthorize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOauthRevoke

Revoke an access token to make it no longer valid for use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOauthRevokeRequestBody;
import org.openapis.openapi.models.operations.PostOauthRevokeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "pariatur".getBytes()            

            PostOauthRevokeResponse res = sdk.oauth.postOauthRevoke(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOauthToken

Returns an access token, to be used during API calls that are not public.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOauthTokenRequestBody;
import org.openapis.openapi.models.operations.PostOauthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "provident".getBytes()            

            PostOauthTokenResponse res = sdk.oauth.postOauthToken(req);

            if (res.postOauthToken200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
