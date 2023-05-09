# playlistItems

### Available Operations

* [youtubePlaylistItemsDelete](#youtubeplaylistitemsdelete) - Deletes a resource.
* [youtubePlaylistItemsInsert](#youtubeplaylistitemsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistItemsList](#youtubeplaylistitemslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistItemsUpdate](#youtubeplaylistitemsupdate) - Updates an existing resource.

## youtubePlaylistItemsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistItemsDeleteRequest req = new YoutubePlaylistItemsDeleteRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "error";
                oauthToken = "mollitia";
                onBehalfOfContentOwner = "magnam";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "esse";
                uploadProtocol = "corrupti";
            }};            

            YoutubePlaylistItemsDeleteResponse res = sdk.playlistItems.youtubePlaylistItemsDelete(req, new YoutubePlaylistItemsDeleteSecurity() {{
                option1 = new YoutubePlaylistItemsDeleteSecurityOption1("fuga", "facere") {{
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

## youtubePlaylistItemsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlaylistItem;
import org.openapis.openapi.models.shared.PlaylistItemContentDetails;
import org.openapis.openapi.models.shared.PlaylistItemSnippet;
import org.openapis.openapi.models.shared.PlaylistItemStatus;
import org.openapis.openapi.models.shared.PlaylistItemStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.ResourceId;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistItemsInsertRequest req = new YoutubePlaylistItemsInsertRequest(                new String[]{{
                                add("quasi"),
                                add("deserunt"),
                                add("quod"),
                                add("laboriosam"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                playlistItem = new PlaylistItem() {{
                    contentDetails = new PlaylistItemContentDetails() {{
                        endAt = "voluptatem";
                        note = "facere";
                        startAt = "necessitatibus";
                        videoId = "maxime";
                        videoPublishedAt = OffsetDateTime.parse("2022-12-13T09:10:32.408Z");
                    }};;
                    etag = "architecto";
                    id = "ac802e2e-c09f-4f8f-8f81-6ff3477c13e9";
                    kind = "accusantium";
                    snippet = new PlaylistItemSnippet() {{
                        channelId = "qui";
                        channelTitle = "impedit";
                        description = "beatae";
                        playlistId = "incidunt";
                        position = 116558L;
                        publishedAt = OffsetDateTime.parse("2022-08-23T11:04:54.920Z");
                        resourceId = new ResourceId() {{
                            channelId = "rerum";
                            kind = "alias";
                            playlistId = "error";
                            videoId = "vel";
                        }};;
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 35581L;
                                url = "id";
                                width = 388169L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 401688L;
                                url = "quas";
                                width = 85794L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 356440L;
                                url = "quae";
                                width = 631719L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 278116L;
                                url = "quam";
                                width = 169312L;
                            }};;
                        }};;
                        title = "Miss";
                        videoOwnerChannelId = "delectus";
                        videoOwnerChannelTitle = "omnis";
                    }};;
                    status = new PlaylistItemStatus() {{
                        privacyStatus = PlaylistItemStatusPrivacyStatusEnum.PUBLIC_;
                    }};;
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "quis";
                fields = "cupiditate";
                key = "aliquam";
                oauthToken = "excepturi";
                onBehalfOfContentOwner = "maiores";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "velit";
                uploadProtocol = "reiciendis";
            }};            

            YoutubePlaylistItemsInsertResponse res = sdk.playlistItems.youtubePlaylistItemsInsert(req, new YoutubePlaylistItemsInsertSecurity() {{
                option1 = new YoutubePlaylistItemsInsertSecurityOption1("amet", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlistItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubePlaylistItemsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistItemsListRequest req = new YoutubePlaylistItemsListRequest(                new String[]{{
                                add("quisquam"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "asperiores";
                id = new String[]{{
                    add("nobis"),
                    add("perspiciatis"),
                    add("accusantium"),
                    add("dicta"),
                }};
                key = "minus";
                maxResults = 417539L;
                oauthToken = "eveniet";
                onBehalfOfContentOwner = "porro";
                pageToken = "tempore";
                playlistId = "quidem";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "voluptates";
                uploadProtocol = "fugit";
                videoId = "eius";
            }};            

            YoutubePlaylistItemsListResponse res = sdk.playlistItems.youtubePlaylistItemsList(req, new YoutubePlaylistItemsListSecurity() {{
                option1 = new YoutubePlaylistItemsListSecurityOption1("sequi", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlistItemListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubePlaylistItemsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubePlaylistItemsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlaylistItem;
import org.openapis.openapi.models.shared.PlaylistItemContentDetails;
import org.openapis.openapi.models.shared.PlaylistItemSnippet;
import org.openapis.openapi.models.shared.PlaylistItemStatus;
import org.openapis.openapi.models.shared.PlaylistItemStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.ResourceId;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubePlaylistItemsUpdateRequest req = new YoutubePlaylistItemsUpdateRequest(                new String[]{{
                                add("esse"),
                                add("blanditiis"),
                                add("sint"),
                                add("repellat"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                playlistItem = new PlaylistItem() {{
                    contentDetails = new PlaylistItemContentDetails() {{
                        endAt = "animi";
                        note = "maiores";
                        startAt = "itaque";
                        videoId = "nulla";
                        videoPublishedAt = OffsetDateTime.parse("2022-04-13T20:37:07.767Z");
                    }};;
                    etag = "velit";
                    id = "e5ae6e0a-c184-4c2b-9c24-7c88373a40e1";
                    kind = "molestias";
                    snippet = new PlaylistItemSnippet() {{
                        channelId = "dolore";
                        channelTitle = "sunt";
                        description = "maiores";
                        playlistId = "neque";
                        position = 139745L;
                        publishedAt = OffsetDateTime.parse("2022-01-03T23:55:44.573Z");
                        resourceId = new ResourceId() {{
                            channelId = "ipsam";
                            kind = "eaque";
                            playlistId = "exercitationem";
                            videoId = "veniam";
                        }};;
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 469994L;
                                url = "ad";
                                width = 394161L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 946808L;
                                url = "quis";
                                width = 845154L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 366480L;
                                url = "suscipit";
                                width = 866459L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 24769L;
                                url = "quidem";
                                width = 831031L;
                            }};;
                        }};;
                        title = "Mr.";
                        videoOwnerChannelId = "id";
                        videoOwnerChannelTitle = "sapiente";
                    }};;
                    status = new PlaylistItemStatus() {{
                        privacyStatus = PlaylistItemStatusPrivacyStatusEnum.PUBLIC_;
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "architecto";
                key = "adipisci";
                oauthToken = "pariatur";
                onBehalfOfContentOwner = "harum";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "voluptatibus";
                uploadProtocol = "iure";
            }};            

            YoutubePlaylistItemsUpdateResponse res = sdk.playlistItems.youtubePlaylistItemsUpdate(req, new YoutubePlaylistItemsUpdateSecurity() {{
                option1 = new YoutubePlaylistItemsUpdateSecurityOption1("explicabo", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.playlistItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
