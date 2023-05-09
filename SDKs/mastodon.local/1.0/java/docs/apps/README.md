# apps

### Available Operations

* [getApiV1AppsVerifyCredentials](#getapiv1appsverifycredentials) - Confirm that the app's OAuth2 credentials work.
* [postApiV1Apps](#postapiv1apps) - Create a new application to obtain OAuth2 credentials.

## getApiV1AppsVerifyCredentials

Confirm that the app's OAuth2 credentials work.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1AppsVerifyCredentialsResponse;
import org.openapis.openapi.models.operations.GetApiV1AppsVerifyCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1AppsVerifyCredentialsResponse res = sdk.apps.getApiV1AppsVerifyCredentials(new GetApiV1AppsVerifyCredentialsSecurity("asperiores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1Apps

Create a new application to obtain OAuth2 credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1AppsRequestBody;
import org.openapis.openapi.models.operations.PostApiV1AppsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "earum".getBytes()            

            PostApiV1AppsResponse res = sdk.apps.postApiV1Apps(req);

            if (res.postApiV1Apps200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
