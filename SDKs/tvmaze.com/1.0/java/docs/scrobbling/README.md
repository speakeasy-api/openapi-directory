# scrobbling

### Available Operations

* [getScrobbleShowsShowId](#getscrobbleshowsshowid) - List watched and acquired episodes for a show
* [postScrobbleEpisodes](#postscrobbleepisodes) - Mark episodes as acquired or watched based on their IDs
* [postScrobbleShows](#postscrobbleshows) - Mark episodes within a show as acquired or watched based on their attributes
* [putScrobbleEpisodesEpisodeId](#putscrobbleepisodesepisodeid) - Mark an episode as acquired or watched based on its ID

## getScrobbleShowsShowId

This endpoint can be used by all users, even without premium

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScrobbleShowsShowIdEmbedEnum;
import org.openapis.openapi.models.operations.GetScrobbleShowsShowIdRequest;
import org.openapis.openapi.models.operations.GetScrobbleShowsShowIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetScrobbleShowsShowIdRequest req = new GetScrobbleShowsShowIdRequest(613064L) {{
                embed = GetScrobbleShowsShowIdEmbedEnum.EPISODE;
            }};            

            GetScrobbleShowsShowIdResponse res = sdk.scrobbling.getScrobbleShowsShowId(req);

            if (res.markedEpisodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postScrobbleEpisodes

This endpoint can be used by all users, even without premium

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostScrobbleEpisodesRequestBody;
import org.openapis.openapi.models.operations.PostScrobbleEpisodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.operations.PostScrobbleEpisodesRequestBody[]{{
                add(new PostScrobbleEpisodesRequestBody() {{
                    episodeId = 99280L;
                    markedAt = 60225L;
                    type = "reiciendis";
                }}),
                add(new PostScrobbleEpisodesRequestBody() {{
                    episodeId = 666767L;
                    markedAt = 653140L;
                    type = "laborum";
                }}),
                add(new PostScrobbleEpisodesRequestBody() {{
                    episodeId = 170909L;
                    markedAt = 210382L;
                    type = "corporis";
                }}),
            }}            

            PostScrobbleEpisodesResponse res = sdk.scrobbling.postScrobbleEpisodes(req);

            if (res.bulkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postScrobbleShows

To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.

This endpoint can be used by all users, even without premium.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostScrobbleShowsRequest;
import org.openapis.openapi.models.operations.PostScrobbleShowsRequestBody;
import org.openapis.openapi.models.operations.PostScrobbleShowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo", "nobis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostScrobbleShowsRequest req = new PostScrobbleShowsRequest() {{
                requestBody = new org.openapis.openapi.models.operations.PostScrobbleShowsRequestBody[]{{
                    add(new PostScrobbleShowsRequestBody() {{
                        airdate = LocalDate.parse("2022-04-10");
                        episode = 325047L;
                        markedAt = 570197L;
                        season = 38425L;
                        type = "iure";
                    }}),
                    add(new PostScrobbleShowsRequestBody() {{
                        airdate = LocalDate.parse("2021-01-09");
                        episode = 958950L;
                        markedAt = 102044L;
                        season = 652790L;
                        type = "dolorem";
                    }}),
                }};
                imdbId = 635059L;
                thetvdbId = 161309L;
                tvmazeId = 995300L;
            }};            

            PostScrobbleShowsResponse res = sdk.scrobbling.postScrobbleShows(req);

            if (res.bulkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putScrobbleEpisodesEpisodeId

This endpoint can be used by all users, even without premium

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutScrobbleEpisodesEpisodeIdRequest;
import org.openapis.openapi.models.operations.PutScrobbleEpisodesEpisodeIdResponse;
import org.openapis.openapi.models.shared.MarkedEpisodeEmbedded;
import org.openapis.openapi.models.shared.MarkedEpisodeInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutScrobbleEpisodesEpisodeIdRequest req = new PutScrobbleEpisodesEpisodeIdRequest(253291L) {{
                markedEpisodeInput = new MarkedEpisodeInput() {{
                    embedded = new MarkedEpisodeEmbedded() {{
                        episode = new java.util.HashMap<String, Object>() {{
                            put("quam", "molestiae");
                            put("velit", "error");
                        }};
                    }};;
                    markedAt = 158969L;
                    type = "quis";
                }};;
            }};            

            PutScrobbleEpisodesEpisodeIdResponse res = sdk.scrobbling.putScrobbleEpisodesEpisodeId(req);

            if (res.markedEpisode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
