# votedShows

### Available Operations

* [deleteUserVotesShowsShowId](#deleteuservotesshowsshowid) - Remove a show vote
* [getUserVotesShows](#getuservotesshows) - List the shows voted for
* [getUserVotesShowsShowId](#getuservotesshowsshowid) - Check if a show is voted for
* [putUserVotesShowsShowId](#putuservotesshowsshowid) - Vote for a show

## deleteUserVotesShowsShowId

Remove a show vote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserVotesShowsShowIdRequest;
import org.openapis.openapi.models.operations.DeleteUserVotesShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserVotesShowsShowIdRequest req = new DeleteUserVotesShowsShowIdRequest(565189L);            

            DeleteUserVotesShowsShowIdResponse res = sdk.votedShows.deleteUserVotesShowsShowId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserVotesShows

List the shows voted for

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserVotesShowsEmbedEnum;
import org.openapis.openapi.models.operations.GetUserVotesShowsRequest;
import org.openapis.openapi.models.operations.GetUserVotesShowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "pariatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserVotesShowsRequest req = new GetUserVotesShowsRequest() {{
                embed = GetUserVotesShowsEmbedEnum.SHOW;
            }};            

            GetUserVotesShowsResponse res = sdk.votedShows.getUserVotesShows(req);

            if (res.showVotes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserVotesShowsShowId

Check if a show is voted for

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserVotesShowsShowIdRequest;
import org.openapis.openapi.models.operations.GetUserVotesShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "praesentium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserVotesShowsShowIdRequest req = new GetUserVotesShowsShowIdRequest(523248L);            

            GetUserVotesShowsShowIdResponse res = sdk.votedShows.getUserVotesShowsShowId(req);

            if (res.showVote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserVotesShowsShowId

Set `voted_at` to `NULL` or leave it out to use the current time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserVotesShowsShowIdRequest;
import org.openapis.openapi.models.operations.PutUserVotesShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShowVoteInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates", "quasi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserVotesShowsShowIdRequest req = new PutUserVotesShowsShowIdRequest(921158L) {{
                showVoteInput = new ShowVoteInput() {{
                    vote = 575947L;
                }};;
            }};            

            PutUserVotesShowsShowIdResponse res = sdk.votedShows.putUserVotesShowsShowId(req);

            if (res.showVote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
