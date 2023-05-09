# mobileAuthorization

### Available Operations

* [createMobileAuthorizationCode](#createmobileauthorizationcode) - CreateMobileAuthorizationCode

## createMobileAuthorizationCode

Generates code to authorize a mobile application to connect to a Square card reader

Authorization codes are one-time-use and expire __60 minutes__ after being issued.

__Important:__ The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

Replace `ACCESS_TOKEN` with a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMobileAuthorizationCodeResponse;
import org.openapis.openapi.models.operations.CreateMobileAuthorizationCodeSecurity;
import org.openapis.openapi.models.shared.CreateMobileAuthorizationCodeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateMobileAuthorizationCodeRequest req = new CreateMobileAuthorizationCodeRequest() {{
                locationId = "sed";
            }};            

            CreateMobileAuthorizationCodeResponse res = sdk.mobileAuthorization.createMobileAuthorizationCode(req, new CreateMobileAuthorizationCodeSecurity("dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createMobileAuthorizationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
