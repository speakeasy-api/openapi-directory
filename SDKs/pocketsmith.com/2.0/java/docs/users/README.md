# users

### Available Operations

* [getMe](#getme) - Get the authorised user
* [getUsersId](#getusersid) - Get user
* [putUsersId](#putusersid) - Update user

## getMe

Gets the user that corresponds to the access token used in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMeResponse res = sdk.users.getMe();

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersId

Gets a user by ID. You must be authorised as the target user in order to make this request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdRequest;
import org.openapis.openapi.models.operations.GetUsersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdRequest req = new GetUsersIdRequest(288476L);            

            GetUsersIdResponse res = sdk.users.getUsersId(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersId

Updates the user by their ID. You must be authorised as the target user in order to make this request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdRequest;
import org.openapis.openapi.models.operations.PutUsersIdRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutUsersIdRequest req = new PutUsersIdRequest(433288L) {{
                requestBody = new PutUsersIdRequestBody() {{
                    alwaysShowBaseCurrency = true;
                    baseCurrencyCode = "nzd";
                    betaUser = true;
                    email = "foo@bar.com";
                    name = "John Appleseed";
                    timeZone = "Auckland";
                    weekStartDay = 1L;
                }};;
            }};            

            PutUsersIdResponse res = sdk.users.putUsersId(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
