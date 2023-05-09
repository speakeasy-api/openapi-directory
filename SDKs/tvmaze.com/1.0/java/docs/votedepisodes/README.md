# votedEpisodes

### Available Operations

* [deleteUserVotesEpisodesEpisodeId](#deleteuservotesepisodesepisodeid) - Remove an episode vote
* [getUserVotesEpisodes](#getuservotesepisodes) - List the episodes voted for
* [getUserVotesEpisodesEpisodeId](#getuservotesepisodesepisodeid) - Check if an episode is voted for
* [putUserVotesEpisodesEpisodeId](#putuservotesepisodesepisodeid) - Vote for an episode

## deleteUserVotesEpisodesEpisodeId

Remove an episode vote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserVotesEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.DeleteUserVotesEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserVotesEpisodesEpisodeIdRequest req = new DeleteUserVotesEpisodesEpisodeIdRequest(359444L);            

            DeleteUserVotesEpisodesEpisodeIdResponse res = sdk.votedEpisodes.deleteUserVotesEpisodesEpisodeId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserVotesEpisodes

List the episodes voted for

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserVotesEpisodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "iusto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserVotesEpisodesResponse res = sdk.votedEpisodes.getUserVotesEpisodes();

            if (res.episodeVotes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserVotesEpisodesEpisodeId

Check if an episode is voted for

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserVotesEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.GetUserVotesEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "harum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserVotesEpisodesEpisodeIdRequest req = new GetUserVotesEpisodesEpisodeIdRequest(317983L);            

            GetUserVotesEpisodesEpisodeIdResponse res = sdk.votedEpisodes.getUserVotesEpisodesEpisodeId(req);

            if (res.episodeVote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserVotesEpisodesEpisodeId

Vote for an episode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserVotesEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.PutUserVotesEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.EpisodeVoteInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserVotesEpisodesEpisodeIdRequest req = new PutUserVotesEpisodesEpisodeIdRequest(918236L) {{
                episodeVoteInput = new EpisodeVoteInput() {{
                    vote = 64147L;
                }};;
            }};            

            PutUserVotesEpisodesEpisodeIdResponse res = sdk.votedEpisodes.putUserVotesEpisodesEpisodeId(req);

            if (res.episodeVote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
