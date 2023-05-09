# taggedShows

### Available Operations

* [deleteUserTagsTagId](#deleteusertagstagid) - Delete a specific tag
* [deleteUserTagsTagIdShowsShowId](#deleteusertagstagidshowsshowid) - Untag a show
* [getUserTags](#getusertags) - List all tags
* [getUserTagsTagIdShows](#getusertagstagidshows) - List all shows under this tag
* [patchUserTagsTagId](#patchusertagstagid) - Update a specific tag
* [postUserTags](#postusertags) - Create a new tag
* [putUserTagsTagIdShowsShowId](#putusertagstagidshowsshowid) - Tag a show

## deleteUserTagsTagId

Delete a specific tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserTagsTagIdRequest;
import org.openapis.openapi.models.operations.DeleteUserTagsTagIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae", "laborum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserTagsTagIdRequest req = new DeleteUserTagsTagIdRequest(656330L);            

            DeleteUserTagsTagIdResponse res = sdk.taggedShows.deleteUserTagsTagId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserTagsTagIdShowsShowId

Untag a show

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserTagsTagIdShowsShowIdRequest;
import org.openapis.openapi.models.operations.DeleteUserTagsTagIdShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserTagsTagIdShowsShowIdRequest req = new DeleteUserTagsTagIdShowsShowIdRequest(778346L, 196582L);            

            DeleteUserTagsTagIdShowsShowIdResponse res = sdk.taggedShows.deleteUserTagsTagIdShowsShowId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserTags

List all tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserTagsResponse res = sdk.taggedShows.getUserTags();

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserTagsTagIdShows

List all shows under this tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserTagsTagIdShowsEmbedEnum;
import org.openapis.openapi.models.operations.GetUserTagsTagIdShowsRequest;
import org.openapis.openapi.models.operations.GetUserTagsTagIdShowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "possimus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserTagsTagIdShowsRequest req = new GetUserTagsTagIdShowsRequest(13571L) {{
                embed = GetUserTagsTagIdShowsEmbedEnum.SHOW;
            }};            

            GetUserTagsTagIdShowsResponse res = sdk.taggedShows.getUserTagsTagIdShows(req);

            if (res.tagInstances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUserTagsTagId

Update a specific tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUserTagsTagIdRequest;
import org.openapis.openapi.models.operations.PatchUserTagsTagIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchUserTagsTagIdRequest req = new PatchUserTagsTagIdRequest(837945L) {{
                tagInput = new TagInput() {{
                    name = "Ryan Witting";
                }};;
            }};            

            PatchUserTagsTagIdResponse res = sdk.taggedShows.patchUserTagsTagId(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserTags

Create a new tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserTagsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil", "praesentium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.TagInput req = new TagInput() {{
                name = "Jose Moen";
            }};            

            PostUserTagsResponse res = sdk.taggedShows.postUserTags(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserTagsTagIdShowsShowId

Tag a show

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserTagsTagIdShowsShowIdRequest;
import org.openapis.openapi.models.operations.PutUserTagsTagIdShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "doloremque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserTagsTagIdShowsShowIdRequest req = new PutUserTagsTagIdShowsShowIdRequest(441711L, 282807L);            

            PutUserTagsTagIdShowsShowIdResponse res = sdk.taggedShows.putUserTagsTagIdShowsShowId(req);

            if (res.tagInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
