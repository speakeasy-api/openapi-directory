# markedEpisodes

### Available Operations

* [deleteUserEpisodesEpisodeId](#deleteuserepisodesepisodeid) - Unmark an episode
* [getUserEpisodes](#getuserepisodes) - List the marked episodes
* [getUserEpisodesEpisodeId](#getuserepisodesepisodeid) - Check if an episode is marked
* [putUserEpisodesEpisodeId](#putuserepisodesepisodeid) - Mark an episode

## deleteUserEpisodesEpisodeId

Unmark an episode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.DeleteUserEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserEpisodesEpisodeIdRequest req = new DeleteUserEpisodesEpisodeIdRequest(264555L);            

            DeleteUserEpisodesEpisodeIdResponse res = sdk.markedEpisodes.deleteUserEpisodesEpisodeId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserEpisodes

List the marked episodes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserEpisodesRequest;
import org.openapis.openapi.models.operations.GetUserEpisodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "impedit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserEpisodesRequest req = new GetUserEpisodesRequest() {{
                showId = 736918L;
            }};            

            GetUserEpisodesResponse res = sdk.markedEpisodes.getUserEpisodes(req);

            if (res.markedEpisodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserEpisodesEpisodeId

Check if an episode is marked

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.GetUserEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserEpisodesEpisodeIdRequest req = new GetUserEpisodesEpisodeIdRequest(568434L);            

            GetUserEpisodesEpisodeIdResponse res = sdk.markedEpisodes.getUserEpisodesEpisodeId(req);

            if (res.markedEpisode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserEpisodesEpisodeId

Set `marked_at` to `NULL` or leave it out to use the current time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.PutUserEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.MarkedEpisodeEmbedded;
import org.openapis.openapi.models.shared.MarkedEpisodeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserEpisodesEpisodeIdRequest req = new PutUserEpisodesEpisodeIdRequest(324141L) {{
                markedEpisodeInput = new MarkedEpisodeInput() {{
                    embedded = new MarkedEpisodeEmbedded() {{
                        episode = new java.util.HashMap<String, Object>() {{
                            put("sed", "iste");
                            put("dolor", "natus");
                            put("laboriosam", "hic");
                        }};
                    }};;
                    markedAt = 902599L;
                    type = "fuga";
                }};;
            }};            

            PutUserEpisodesEpisodeIdResponse res = sdk.markedEpisodes.putUserEpisodesEpisodeId(req);

            if (res.markedEpisode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
