# followedWebchannels

### Available Operations

* [deleteUserFollowsWebchannelsWebchannelId](#deleteuserfollowswebchannelswebchannelid) - Unfollow a webchannel
* [getUserFollowsWebchannels](#getuserfollowswebchannels) - List the followed webchannels
* [getUserFollowsWebchannelsWebchannelId](#getuserfollowswebchannelswebchannelid) - Check if a webchannel is followed
* [putUserFollowsWebchannelsWebchannelId](#putuserfollowswebchannelswebchannelid) - Follow a webchannel

## deleteUserFollowsWebchannelsWebchannelId

Unfollow a webchannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserFollowsWebchannelsWebchannelIdRequest;
import org.openapis.openapi.models.operations.DeleteUserFollowsWebchannelsWebchannelIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserFollowsWebchannelsWebchannelIdRequest req = new DeleteUserFollowsWebchannelsWebchannelIdRequest(720633L);            

            DeleteUserFollowsWebchannelsWebchannelIdResponse res = sdk.followedWebchannels.deleteUserFollowsWebchannelsWebchannelId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsWebchannels

List the followed webchannels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsWebchannelsEmbedEnum;
import org.openapis.openapi.models.operations.GetUserFollowsWebchannelsRequest;
import org.openapis.openapi.models.operations.GetUserFollowsWebchannelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsWebchannelsRequest req = new GetUserFollowsWebchannelsRequest() {{
                embed = GetUserFollowsWebchannelsEmbedEnum.WEBCHANNEL;
            }};            

            GetUserFollowsWebchannelsResponse res = sdk.followedWebchannels.getUserFollowsWebchannels(req);

            if (res.webchannelFollows != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsWebchannelsWebchannelId

Check if a webchannel is followed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsWebchannelsWebchannelIdRequest;
import org.openapis.openapi.models.operations.GetUserFollowsWebchannelsWebchannelIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "deleniti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsWebchannelsWebchannelIdRequest req = new GetUserFollowsWebchannelsWebchannelIdRequest(944669L);            

            GetUserFollowsWebchannelsWebchannelIdResponse res = sdk.followedWebchannels.getUserFollowsWebchannelsWebchannelId(req);

            if (res.webchannelFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserFollowsWebchannelsWebchannelId

Follow a webchannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserFollowsWebchannelsWebchannelIdRequest;
import org.openapis.openapi.models.operations.PutUserFollowsWebchannelsWebchannelIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserFollowsWebchannelsWebchannelIdRequest req = new PutUserFollowsWebchannelsWebchannelIdRequest(105907L);            

            PutUserFollowsWebchannelsWebchannelIdResponse res = sdk.followedWebchannels.putUserFollowsWebchannelsWebchannelId(req);

            if (res.webchannelFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
