# tokens

### Available Operations

* [postOauthV1TokenCreate](#postoauthv1tokencreate)

## postOauthV1TokenCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOauthV1TokenCreateRequestBody;
import org.openapis.openapi.models.operations.PostOauthV1TokenCreateRequestBodyGrantTypeEnum;
import org.openapis.openapi.models.operations.PostOauthV1TokenCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOauthV1TokenCreateRequestBody req = new PostOauthV1TokenCreateRequestBody() {{
                clientId = "unde";
                clientSecret = "nulla";
                code = "corrupti";
                grantType = PostOauthV1TokenCreateRequestBodyGrantTypeEnum.REFRESH_TOKEN;
                redirectUri = "vel";
                refreshToken = "error";
            }};            

            PostOauthV1TokenCreateResponse res = sdk.tokens.postOauthV1TokenCreate(req);

            if (res.tokenResponseIF != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
