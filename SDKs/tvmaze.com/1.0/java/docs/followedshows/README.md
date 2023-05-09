# followedShows

### Available Operations

* [deleteUserFollowsShowsShowId](#deleteuserfollowsshowsshowid) - Unfollow a show
* [getUserFollowsShows](#getuserfollowsshows) - List the followed shows
* [getUserFollowsShowsShowId](#getuserfollowsshowsshowid) - Check if a show is followed
* [putUserFollowsShowsShowId](#putuserfollowsshowsshowid) - Follow a show

## deleteUserFollowsShowsShowId

Unfollow a show

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserFollowsShowsShowIdRequest;
import org.openapis.openapi.models.operations.DeleteUserFollowsShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "odit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserFollowsShowsShowIdRequest req = new DeleteUserFollowsShowsShowIdRequest(870013L);            

            DeleteUserFollowsShowsShowIdResponse res = sdk.followedShows.deleteUserFollowsShowsShowId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsShows

List the followed shows

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsShowsEmbedEnum;
import org.openapis.openapi.models.operations.GetUserFollowsShowsRequest;
import org.openapis.openapi.models.operations.GetUserFollowsShowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsShowsRequest req = new GetUserFollowsShowsRequest() {{
                embed = GetUserFollowsShowsEmbedEnum.SHOW;
            }};            

            GetUserFollowsShowsResponse res = sdk.followedShows.getUserFollowsShows(req);

            if (res.showFollows != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsShowsShowId

Check if a show is followed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsShowsShowIdRequest;
import org.openapis.openapi.models.operations.GetUserFollowsShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsShowsShowIdRequest req = new GetUserFollowsShowsShowIdRequest(800911L);            

            GetUserFollowsShowsShowIdResponse res = sdk.followedShows.getUserFollowsShowsShowId(req);

            if (res.showFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserFollowsShowsShowId

Follow a show

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserFollowsShowsShowIdRequest;
import org.openapis.openapi.models.operations.PutUserFollowsShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserFollowsShowsShowIdRequest req = new PutUserFollowsShowsShowIdRequest(780529L);            

            PutUserFollowsShowsShowIdResponse res = sdk.followedShows.putUserFollowsShowsShowId(req);

            if (res.showFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
