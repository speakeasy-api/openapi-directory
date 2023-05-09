# playlists

### Available Operations

* [youtubePlaylistsDelete](#youtubeplaylistsdelete) - Deletes a resource.
* [youtubePlaylistsInsert](#youtubeplaylistsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistsList](#youtubeplaylistslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistsUpdate](#youtubeplaylistsupdate) - Updates an existing resource.

## youtubePlaylistsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistsDeleteRequest req = new YoutubePlaylistsDeleteRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "error";
                key = "non";
                oauthToken = "quasi";
                onBehalfOfContentOwner = "mollitia";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "harum";
                uploadProtocol = "cumque";
            }};            

            YoutubePlaylistsDeleteResponse res = sdk.playlists.youtubePlaylistsDelete(req, new YoutubePlaylistsDeleteSecurity() {{
                option1 = new YoutubePlaylistsDeleteSecurityOption1("doloremque", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubePlaylistsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Playlist;
import org.openapis.openapi.models.shared.PlaylistContentDetails;
import org.openapis.openapi.models.shared.PlaylistLocalization;
import org.openapis.openapi.models.shared.PlaylistPlayer;
import org.openapis.openapi.models.shared.PlaylistSnippet;
import org.openapis.openapi.models.shared.PlaylistStatus;
import org.openapis.openapi.models.shared.PlaylistStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistsInsertRequest req = new YoutubePlaylistsInsertRequest(                new String[]{{
                                add("eaque"),
                                add("deserunt"),
                                add("aliquid"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                playlist = new Playlist() {{
                    contentDetails = new PlaylistContentDetails() {{
                        itemCount = 167435L;
                    }};;
                    etag = "tempora";
                    id = "d3b2ecfc-c8f8-4950-90f5-dd3d6fa1804e";
                    kind = "ad";
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.PlaylistLocalization>() {{
                        put("quisquam", new PlaylistLocalization() {{
                            description = "quas";
                            title = "Mr.";
                        }});
                        put("maiores", new PlaylistLocalization() {{
                            description = "inventore";
                            title = "Ms.";
                        }});
                    }};
                    player = new PlaylistPlayer() {{
                        embedHtml = "laudantium";
                    }};;
                    snippet = new PlaylistSnippet() {{
                        channelId = "est";
                        channelTitle = "dolor";
                        defaultLanguage = "aliquid";
                        description = "consectetur";
                        localized = new PlaylistLocalization() {{
                            description = "cumque";
                            title = "Ms.";
                        }};;
                        publishedAt = OffsetDateTime.parse("2022-01-02T01:41:31.539Z");
                        tags = new String[]{{
                            add("recusandae"),
                        }};
                        thumbnailVideoId = "tempora";
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 503449L;
                                url = "numquam";
                                width = 196374L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 532320L;
                                url = "sit";
                                width = 703189L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 84178L;
                                url = "tenetur";
                                width = 419858L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 694088L;
                                url = "totam";
                                width = 781193L;
                            }};;
                        }};;
                        title = "Miss";
                    }};;
                    status = new PlaylistStatus() {{
                        privacyStatus = PlaylistStatusPrivacyStatusEnum.PUBLIC_;
                    }};;
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "commodi";
                key = "alias";
                oauthToken = "fuga";
                onBehalfOfContentOwner = "aut";
                onBehalfOfContentOwnerChannel = "dolore";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "aliquam";
                uploadProtocol = "iste";
            }};            

            YoutubePlaylistsInsertResponse res = sdk.playlists.youtubePlaylistsInsert(req, new YoutubePlaylistsInsertSecurity() {{
                option1 = new YoutubePlaylistsInsertSecurityOption1("ullam", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubePlaylistsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistsListRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistsListResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistsListSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubePlaylistsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistsListRequest req = new YoutubePlaylistsListRequest(                new String[]{{
                                add("voluptas"),
                                add("occaecati"),
                                add("unde"),
                                add("illo"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                channelId = "quasi";
                fields = "cumque";
                hl = "dicta";
                id = new String[]{{
                    add("facere"),
                    add("facilis"),
                    add("beatae"),
                }};
                key = "cumque";
                maxResults = 964511L;
                mine = false;
                oauthToken = "labore";
                onBehalfOfContentOwner = "expedita";
                onBehalfOfContentOwnerChannel = "corrupti";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "officiis";
                uploadProtocol = "cum";
            }};            

            YoutubePlaylistsListResponse res = sdk.playlists.youtubePlaylistsList(req, new YoutubePlaylistsListSecurity() {{
                option1 = new YoutubePlaylistsListSecurityOption1("pariatur", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlistListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubePlaylistsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Playlist;
import org.openapis.openapi.models.shared.PlaylistContentDetails;
import org.openapis.openapi.models.shared.PlaylistLocalization;
import org.openapis.openapi.models.shared.PlaylistPlayer;
import org.openapis.openapi.models.shared.PlaylistSnippet;
import org.openapis.openapi.models.shared.PlaylistStatus;
import org.openapis.openapi.models.shared.PlaylistStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistsUpdateRequest req = new YoutubePlaylistsUpdateRequest(                new String[]{{
                                add("incidunt"),
                                add("quod"),
                                add("minus"),
                                add("porro"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                playlist = new Playlist() {{
                    contentDetails = new PlaylistContentDetails() {{
                        itemCount = 569706L;
                    }};;
                    etag = "occaecati";
                    id = "bc7fc0b2-dce1-4087-be42-b006d678878b";
                    kind = "deserunt";
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.PlaylistLocalization>() {{
                        put("nostrum", new PlaylistLocalization() {{
                            description = "atque";
                            title = "Mr.";
                        }});
                        put("est", new PlaylistLocalization() {{
                            description = "enim";
                            title = "Ms.";
                        }});
                        put("magni", new PlaylistLocalization() {{
                            description = "quae";
                            title = "Ms.";
                        }});
                    }};
                    player = new PlaylistPlayer() {{
                        embedHtml = "placeat";
                    }};;
                    snippet = new PlaylistSnippet() {{
                        channelId = "enim";
                        channelTitle = "labore";
                        defaultLanguage = "sapiente";
                        description = "saepe";
                        localized = new PlaylistLocalization() {{
                            description = "delectus";
                            title = "Miss";
                        }};;
                        publishedAt = OffsetDateTime.parse("2021-06-22T09:01:11.589Z");
                        tags = new String[]{{
                            add("quaerat"),
                            add("doloribus"),
                            add("quia"),
                        }};
                        thumbnailVideoId = "officiis";
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 651467L;
                                url = "cumque";
                                width = 337081L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 313590L;
                                url = "eum";
                                width = 365539L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 849337L;
                                url = "nesciunt";
                                width = 22331L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 487148L;
                                url = "minus";
                                width = 990369L;
                            }};;
                        }};;
                        title = "Dr.";
                    }};;
                    status = new PlaylistStatus() {{
                        privacyStatus = PlaylistStatusPrivacyStatusEnum.PRIVATE_;
                    }};;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "sit";
                key = "aliquid";
                oauthToken = "necessitatibus";
                onBehalfOfContentOwner = "sed";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "sunt";
                uploadProtocol = "nesciunt";
            }};            

            YoutubePlaylistsUpdateResponse res = sdk.playlists.youtubePlaylistsUpdate(req, new YoutubePlaylistsUpdateSecurity() {{
                option1 = new YoutubePlaylistsUpdateSecurityOption1("delectus", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
