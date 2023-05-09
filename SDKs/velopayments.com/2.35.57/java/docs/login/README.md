# login

### Available Operations

* [logout](#logout) - Logout
* [resetPassword](#resetpassword) - Reset password
* [validateAccessToken](#validateaccesstoken) - validate
* [veloAuth](#veloauth) - Authentication endpoint

## logout

<p>Given a valid access token in the header then log out the authenticated user or client </p>
<p>Will revoke the token</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            LogoutResponse res = sdk.login.logout();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPassword

<p>Reset password </p>
<p>An email with an embedded link will be sent to the receipient of the email address </p>
<p>The link will contain a token to be used for resetting the password </p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPasswordResponse;
import org.openapis.openapi.models.shared.ResetPasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ResetPasswordRequest req = new ResetPasswordRequest("foo@example.com");            

            ResetPasswordResponse res = sdk.login.resetPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateAccessToken

<p>The second part of login involves validating using an MFA device</p>
<p>An access token with PRE_AUTH authorities is required</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateAccessTokenRequest;
import org.openapis.openapi.models.operations.ValidateAccessTokenResponse;
import org.openapis.openapi.models.shared.AccessTokenValidationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ValidateAccessTokenRequest req = new ValidateAccessTokenRequest(                new AccessTokenValidationRequest("123456");) {{
                authorization = "odit";
            }};            

            ValidateAccessTokenResponse res = sdk.login.validateAccessToken(req);

            if (res.accessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## veloAuth

<p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
<p>You need your API key and API secret issued by Velo</p>
<p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
<p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
<p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
<p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VeloAuthRequest;
import org.openapis.openapi.models.operations.VeloAuthResponse;
import org.openapis.openapi.models.operations.VeloAuthSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VeloAuthRequest req = new VeloAuthRequest() {{
                grantType = "ea";
            }};            

            VeloAuthResponse res = sdk.login.veloAuth(req, new VeloAuthSecurity("accusantium", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.authResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
