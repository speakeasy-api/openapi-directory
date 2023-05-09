# todoSecurity

### Available Operations

* [postApiV1Accounts](#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

## postApiV1Accounts

Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AccountsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AccountsResponse;
import org.openapis.openapi.models.operations.PostApiV1AccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "pariatur".getBytes()            

            PostApiV1AccountsResponse res = sdk.todoSecurity.postApiV1Accounts(req, new PostApiV1AccountsSecurity("maxime") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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
