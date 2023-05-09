# followedPeople

### Available Operations

* [deleteUserFollowsPeoplePersonId](#deleteuserfollowspeoplepersonid) - Unfollow a person
* [getUserFollowsPeople](#getuserfollowspeople) - List the followed people
* [getUserFollowsPeoplePersonId](#getuserfollowspeoplepersonid) - Check if a person is followed
* [putUserFollowsPeoplePersonId](#putuserfollowspeoplepersonid) - Follow a person

## deleteUserFollowsPeoplePersonId

Unfollow a person

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserFollowsPeoplePersonIdRequest;
import org.openapis.openapi.models.operations.DeleteUserFollowsPeoplePersonIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserFollowsPeoplePersonIdRequest req = new DeleteUserFollowsPeoplePersonIdRequest(836079L);            

            DeleteUserFollowsPeoplePersonIdResponse res = sdk.followedPeople.deleteUserFollowsPeoplePersonId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsPeople

List the followed people

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsPeopleEmbedEnum;
import org.openapis.openapi.models.operations.GetUserFollowsPeopleRequest;
import org.openapis.openapi.models.operations.GetUserFollowsPeopleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "quis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsPeopleRequest req = new GetUserFollowsPeopleRequest() {{
                embed = GetUserFollowsPeopleEmbedEnum.PERSON;
            }};            

            GetUserFollowsPeopleResponse res = sdk.followedPeople.getUserFollowsPeople(req);

            if (res.personFollows != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsPeoplePersonId

Check if a person is followed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsPeoplePersonIdRequest;
import org.openapis.openapi.models.operations.GetUserFollowsPeoplePersonIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsPeoplePersonIdRequest req = new GetUserFollowsPeoplePersonIdRequest(20218L);            

            GetUserFollowsPeoplePersonIdResponse res = sdk.followedPeople.getUserFollowsPeoplePersonId(req);

            if (res.personFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserFollowsPeoplePersonId

Follow a person

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserFollowsPeoplePersonIdRequest;
import org.openapis.openapi.models.operations.PutUserFollowsPeoplePersonIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "repellendus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserFollowsPeoplePersonIdRequest req = new PutUserFollowsPeoplePersonIdRequest(957156L);            

            PutUserFollowsPeoplePersonIdResponse res = sdk.followedPeople.putUserFollowsPeoplePersonId(req);

            if (res.personFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
