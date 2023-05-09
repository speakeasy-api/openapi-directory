# liveBroadcasts

### Available Operations

* [youtubeLiveBroadcastsBind](#youtubelivebroadcastsbind) - Bind a broadcast to a stream.
* [youtubeLiveBroadcastsDelete](#youtubelivebroadcastsdelete) - Delete a given broadcast.
* [youtubeLiveBroadcastsInsert](#youtubelivebroadcastsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveBroadcastsInsertCuepoint](#youtubelivebroadcastsinsertcuepoint) - Insert cuepoints in a broadcast
* [youtubeLiveBroadcastsList](#youtubelivebroadcastslist) - Retrieve the list of broadcasts associated with the given channel.
* [youtubeLiveBroadcastsTransition](#youtubelivebroadcaststransition) - Transition a broadcast to a given status.
* [youtubeLiveBroadcastsUpdate](#youtubelivebroadcastsupdate) - Updates an existing broadcast for the authenticated user.

## youtubeLiveBroadcastsBind

Bind a broadcast to a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsBindRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsBindResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsBindSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsBindSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsBindSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsBindRequest req = new YoutubeLiveBroadcastsBindRequest("nam",                 new String[]{{
                                add("iusto"),
                                add("voluptate"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "deleniti";
                key = "quibusdam";
                oauthToken = "iure";
                onBehalfOfContentOwner = "odit";
                onBehalfOfContentOwnerChannel = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vel";
                streamId = "magnam";
                uploadType = "quibusdam";
                uploadProtocol = "inventore";
            }};            

            YoutubeLiveBroadcastsBindResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsBind(req, new YoutubeLiveBroadcastsBindSecurity() {{
                option1 = new YoutubeLiveBroadcastsBindSecurityOption1("facere", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveBroadcastsDelete

Delete a given broadcast.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsDeleteRequest req = new YoutubeLiveBroadcastsDeleteRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "velit";
                key = "illo";
                oauthToken = "accusantium";
                onBehalfOfContentOwner = "vel";
                onBehalfOfContentOwnerChannel = "ea";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "vero";
                uploadProtocol = "excepturi";
            }};            

            YoutubeLiveBroadcastsDeleteResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsDelete(req, new YoutubeLiveBroadcastsDeleteSecurity() {{
                option1 = new YoutubeLiveBroadcastsDeleteSecurityOption1("eum", "velit") {{
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

## youtubeLiveBroadcastsInsert

Inserts a new stream for the authenticated user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LiveBroadcast;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetails;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsLatencyPreferenceEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsProjectionEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsStereoLayoutEnum;
import org.openapis.openapi.models.shared.LiveBroadcastSnippet;
import org.openapis.openapi.models.shared.LiveBroadcastStatistics;
import org.openapis.openapi.models.shared.LiveBroadcastStatus;
import org.openapis.openapi.models.shared.LiveBroadcastStatusLifeCycleStatusEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusLiveBroadcastPriorityEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusRecordingStatusEnum;
import org.openapis.openapi.models.shared.MonitorStreamInfo;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsInsertRequest req = new YoutubeLiveBroadcastsInsertRequest(                new String[]{{
                                add("perspiciatis"),
                                add("earum"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                liveBroadcast = new LiveBroadcast() {{
                    contentDetails = new LiveBroadcastContentDetails() {{
                        boundStreamId = "impedit";
                        boundStreamLastUpdateTimeMs = OffsetDateTime.parse("2021-03-02T23:16:28.065Z");
                        closedCaptionsType = LiveBroadcastContentDetailsClosedCaptionsTypeEnum.CLOSED_CAPTIONS_EMBEDDED;
                        enableAutoStart = false;
                        enableAutoStop = false;
                        enableClosedCaptions = false;
                        enableContentEncryption = false;
                        enableDvr = false;
                        enableEmbed = false;
                        enableLowLatency = false;
                        latencyPreference = LiveBroadcastContentDetailsLatencyPreferenceEnum.LATENCY_PREFERENCE_UNSPECIFIED;
                        mesh = "nisi";
                        monitorStream = new MonitorStreamInfo() {{
                            broadcastStreamDelayMs = 931505L;
                            embedHtml = "velit";
                            enableMonitorStream = false;
                        }};;
                        projection = LiveBroadcastContentDetailsProjectionEnum.THREE_HUNDRED_AND_SIXTY;
                        recordFromStart = false;
                        startWithSlate = false;
                        stereoLayout = LiveBroadcastContentDetailsStereoLayoutEnum.MONO;
                    }};;
                    etag = "dolor";
                    id = "7000ae6b-6bc9-4b8f-b59e-ac55a9741d31";
                    kind = "inventore";
                    snippet = new LiveBroadcastSnippet() {{
                        actualEndTime = OffsetDateTime.parse("2022-09-05T11:07:40.496Z");
                        actualStartTime = OffsetDateTime.parse("2022-05-22T20:46:18.043Z");
                        channelId = "ex";
                        description = "nemo";
                        isDefaultBroadcast = false;
                        liveChatId = "soluta";
                        publishedAt = OffsetDateTime.parse("2021-12-12T08:34:53.101Z");
                        scheduledEndTime = OffsetDateTime.parse("2022-01-09T23:54:38.052Z");
                        scheduledStartTime = OffsetDateTime.parse("2022-12-31T19:13:01.264Z");
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 168042L;
                                url = "vel";
                                width = 64435L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 63553L;
                                url = "modi";
                                width = 208253L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 348357L;
                                url = "itaque";
                                width = 88248L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 215398L;
                                url = "unde";
                                width = 858338L;
                            }};;
                        }};;
                        title = "Miss";
                    }};;
                    statistics = new LiveBroadcastStatistics() {{
                        concurrentViewers = "maxime";
                    }};;
                    status = new LiveBroadcastStatus() {{
                        lifeCycleStatus = LiveBroadcastStatusLifeCycleStatusEnum.CREATED;
                        liveBroadcastPriority = LiveBroadcastStatusLiveBroadcastPriorityEnum.LIVE_BROADCAST_PRIORITY_UNSPECIFIED;
                        madeForKids = false;
                        privacyStatus = LiveBroadcastStatusPrivacyStatusEnum.UNLISTED;
                        recordingStatus = LiveBroadcastStatusRecordingStatusEnum.RECORDING;
                        selfDeclaredMadeForKids = false;
                    }};;
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "libero";
                key = "fugiat";
                oauthToken = "officia";
                onBehalfOfContentOwner = "quos";
                onBehalfOfContentOwnerChannel = "placeat";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "iusto";
                uploadProtocol = "ipsa";
            }};            

            YoutubeLiveBroadcastsInsertResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsInsert(req, new YoutubeLiveBroadcastsInsertSecurity() {{
                option1 = new YoutubeLiveBroadcastsInsertSecurityOption1("voluptates", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveBroadcastsInsertCuepoint

Insert cuepoints in a broadcast

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsInsertCuepointSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Cuepoint;
import org.openapis.openapi.models.shared.CuepointCueTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsInsertCuepointRequest req = new YoutubeLiveBroadcastsInsertCuepointRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                cuepoint = new Cuepoint() {{
                    cueType = CuepointCueTypeEnum.CUE_TYPE_AD;
                    durationSecs = 292888L;
                    etag = "eligendi";
                    id = "b0672d1a-d879-4eeb-9665-b85efbd02bae";
                    insertionOffsetTimeMs = "accusantium";
                    walltimeMs = "expedita";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "odio";
                id = "82259e3e-a4b5-4197-b924-43da7ce52b89";
                key = "minima";
                oauthToken = "placeat";
                onBehalfOfContentOwner = "enim";
                onBehalfOfContentOwnerChannel = "neque";
                part = new String[]{{
                    add("minus"),
                    add("eum"),
                }};
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "corporis";
                uploadProtocol = "magnam";
            }};            

            YoutubeLiveBroadcastsInsertCuepointResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsInsertCuepoint(req, new YoutubeLiveBroadcastsInsertCuepointSecurity() {{
                option1 = new YoutubeLiveBroadcastsInsertCuepointSecurityOption1("voluptates", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cuepoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveBroadcastsList

Retrieve the list of broadcasts associated with the given channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListBroadcastStatusEnum;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListBroadcastTypeEnum;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsListRequest req = new YoutubeLiveBroadcastsListRequest(                new String[]{{
                                add("aperiam"),
                                add("libero"),
                                add("ratione"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                broadcastStatus = YoutubeLiveBroadcastsListBroadcastStatusEnum.ALL;
                broadcastType = YoutubeLiveBroadcastsListBroadcastTypeEnum.PERSISTENT;
                callback = "velit";
                fields = "minus";
                id = new String[]{{
                    add("nostrum"),
                    add("est"),
                    add("impedit"),
                }};
                key = "delectus";
                maxResults = 735894L;
                mine = false;
                oauthToken = "vero";
                onBehalfOfContentOwner = "odit";
                onBehalfOfContentOwnerChannel = "repellat";
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "reprehenderit";
                uploadProtocol = "aperiam";
            }};            

            YoutubeLiveBroadcastsListResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsList(req, new YoutubeLiveBroadcastsListSecurity() {{
                option1 = new YoutubeLiveBroadcastsListSecurityOption1("odio", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveBroadcastListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveBroadcastsTransition

Transition a broadcast to a given status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionBroadcastStatusEnum;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsTransitionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsTransitionRequest req = new YoutubeLiveBroadcastsTransitionRequest(YoutubeLiveBroadcastsTransitionBroadcastStatusEnum.TESTING, "ducimus",                 new String[]{{
                                add("dolores"),
                                add("error"),
                                add("veritatis"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "similique";
                key = "optio";
                oauthToken = "ex";
                onBehalfOfContentOwner = "quaerat";
                onBehalfOfContentOwnerChannel = "commodi";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "placeat";
                uploadProtocol = "quidem";
            }};            

            YoutubeLiveBroadcastsTransitionResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsTransition(req, new YoutubeLiveBroadcastsTransitionSecurity() {{
                option1 = new YoutubeLiveBroadcastsTransitionSecurityOption1("exercitationem", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveBroadcastsUpdate

Updates an existing broadcast for the authenticated user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveBroadcastsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LiveBroadcast;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetails;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsLatencyPreferenceEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsProjectionEnum;
import org.openapis.openapi.models.shared.LiveBroadcastContentDetailsStereoLayoutEnum;
import org.openapis.openapi.models.shared.LiveBroadcastSnippet;
import org.openapis.openapi.models.shared.LiveBroadcastStatistics;
import org.openapis.openapi.models.shared.LiveBroadcastStatus;
import org.openapis.openapi.models.shared.LiveBroadcastStatusLifeCycleStatusEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusLiveBroadcastPriorityEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.LiveBroadcastStatusRecordingStatusEnum;
import org.openapis.openapi.models.shared.MonitorStreamInfo;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveBroadcastsUpdateRequest req = new YoutubeLiveBroadcastsUpdateRequest(                new String[]{{
                                add("modi"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                liveBroadcast = new LiveBroadcast() {{
                    contentDetails = new LiveBroadcastContentDetails() {{
                        boundStreamId = "sint";
                        boundStreamLastUpdateTimeMs = OffsetDateTime.parse("2022-06-01T14:00:05.540Z");
                        closedCaptionsType = LiveBroadcastContentDetailsClosedCaptionsTypeEnum.CLOSED_CAPTIONS_EMBEDDED;
                        enableAutoStart = false;
                        enableAutoStop = false;
                        enableClosedCaptions = false;
                        enableContentEncryption = false;
                        enableDvr = false;
                        enableEmbed = false;
                        enableLowLatency = false;
                        latencyPreference = LiveBroadcastContentDetailsLatencyPreferenceEnum.LOW;
                        mesh = "dicta";
                        monitorStream = new MonitorStreamInfo() {{
                            broadcastStreamDelayMs = 936928L;
                            embedHtml = "veniam";
                            enableMonitorStream = false;
                        }};;
                        projection = LiveBroadcastContentDetailsProjectionEnum.THREE_HUNDRED_AND_SIXTY;
                        recordFromStart = false;
                        startWithSlate = false;
                        stereoLayout = LiveBroadcastContentDetailsStereoLayoutEnum.STEREO_LAYOUT_UNSPECIFIED;
                    }};;
                    etag = "nam";
                    id = "12eb07f1-16db-4995-85fc-95fa88970e18";
                    kind = "iste";
                    snippet = new LiveBroadcastSnippet() {{
                        actualEndTime = OffsetDateTime.parse("2020-10-21T20:39:57.323Z");
                        actualStartTime = OffsetDateTime.parse("2022-07-06T20:33:05.731Z");
                        channelId = "doloremque";
                        description = "delectus";
                        isDefaultBroadcast = false;
                        liveChatId = "impedit";
                        publishedAt = OffsetDateTime.parse("2022-07-26T16:25:58.578Z");
                        scheduledEndTime = OffsetDateTime.parse("2022-02-05T08:24:32.703Z");
                        scheduledStartTime = OffsetDateTime.parse("2022-11-30T15:58:04.315Z");
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 339756L;
                                url = "veniam";
                                width = 727481L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 99733L;
                                url = "cupiditate";
                                width = 475589L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 756654L;
                                url = "possimus";
                                width = 251464L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 298187L;
                                url = "itaque";
                                width = 150935L;
                            }};;
                        }};;
                        title = "Dr.";
                    }};;
                    statistics = new LiveBroadcastStatistics() {{
                        concurrentViewers = "veniam";
                    }};;
                    status = new LiveBroadcastStatus() {{
                        lifeCycleStatus = LiveBroadcastStatusLifeCycleStatusEnum.CREATED;
                        liveBroadcastPriority = LiveBroadcastStatusLiveBroadcastPriorityEnum.HIGH;
                        madeForKids = false;
                        privacyStatus = LiveBroadcastStatusPrivacyStatusEnum.UNLISTED;
                        recordingStatus = LiveBroadcastStatusRecordingStatusEnum.LIVE_BROADCAST_RECORDING_STATUS_UNSPECIFIED;
                        selfDeclaredMadeForKids = false;
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "ab";
                key = "velit";
                oauthToken = "facilis";
                onBehalfOfContentOwner = "tempore";
                onBehalfOfContentOwnerChannel = "nisi";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "quaerat";
                uploadProtocol = "blanditiis";
            }};            

            YoutubeLiveBroadcastsUpdateResponse res = sdk.liveBroadcasts.youtubeLiveBroadcastsUpdate(req, new YoutubeLiveBroadcastsUpdateSecurity() {{
                option1 = new YoutubeLiveBroadcastsUpdateSecurityOption1("distinctio", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveBroadcast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
