# oAuth

### Available Operations

* [oAuthAuthorize](#oauthauthorize)
* [postApiOauthAuthorize](#postapioauthauthorize)

## oAuthAuthorize

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OAuthAuthorizeRequest;
import org.openapis.openapi.models.operations.OAuthAuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OAuthAuthorizeRequest req = new OAuthAuthorizeRequest("quidem", "neque", "quo") {{
                clientSecret = "illum";
                scope = "quo";
            }};            

            OAuthAuthorizeResponse res = sdk.oAuth.oAuthAuthorize(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiOauthAuthorize

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiOauthAuthorizeRequest;
import org.openapis.openapi.models.operations.PostApiOauthAuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiOauthAuthorizeRequest req = new PostApiOauthAuthorizeRequest("fuga", "eius", "eos") {{
                clientSecret = "voluptas";
                scope = "ab";
            }};            

            PostApiOauthAuthorizeResponse res = sdk.oAuth.postApiOauthAuthorize(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
