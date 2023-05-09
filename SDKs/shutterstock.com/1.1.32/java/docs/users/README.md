# users

### Available Operations

* [getAccessToken](#getaccesstoken) - Get access token details
* [getUser](#getuser) - Get user details
* [getUserSubscriptionList](#getusersubscriptionlist) - List user subscriptions

## getAccessToken

Get access token details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokenResponse;
import org.openapis.openapi.models.operations.GetAccessTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccessTokenResponse res = sdk.users.getAccessToken(new GetAccessTokenSecurity("ullam") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accessTokenDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Get user details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserResponse res = sdk.users.getUser(new GetUserSecurity("architecto") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserSubscriptionList

List user subscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserSubscriptionListResponse;
import org.openapis.openapi.models.operations.GetUserSubscriptionListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserSubscriptionListResponse res = sdk.users.getUserSubscriptionList(new GetUserSubscriptionListSecurity("accusantium") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
