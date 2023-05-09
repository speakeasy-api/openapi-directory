# liveStreams

### Available Operations

* [youtubeLiveStreamsDelete](#youtubelivestreamsdelete) - Deletes an existing stream for the authenticated user.
* [youtubeLiveStreamsInsert](#youtubelivestreamsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveStreamsList](#youtubelivestreamslist) - Retrieve the list of streams associated with the given channel. --
* [youtubeLiveStreamsUpdate](#youtubelivestreamsupdate) - Updates an existing stream for the authenticated user.

## youtubeLiveStreamsDelete

Deletes an existing stream for the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveStreamsDeleteRequest req = new YoutubeLiveStreamsDeleteRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "rem";
                key = "quia";
                oauthToken = "ullam";
                onBehalfOfContentOwner = "quisquam";
                onBehalfOfContentOwnerChannel = "dicta";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "eligendi";
                uploadProtocol = "quae";
            }};            

            YoutubeLiveStreamsDeleteResponse res = sdk.liveStreams.youtubeLiveStreamsDelete(req, new YoutubeLiveStreamsDeleteSecurity() {{
                option1 = new YoutubeLiveStreamsDeleteSecurityOption1("officiis", "architecto") {{
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

## youtubeLiveStreamsInsert

Inserts a new stream for the authenticated user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CdnSettings;
import org.openapis.openapi.models.shared.CdnSettingsFrameRateEnum;
import org.openapis.openapi.models.shared.CdnSettingsIngestionTypeEnum;
import org.openapis.openapi.models.shared.CdnSettingsResolutionEnum;
import org.openapis.openapi.models.shared.IngestionInfo;
import org.openapis.openapi.models.shared.LiveStream;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssue;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssueSeverityEnum;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssueTypeEnum;
import org.openapis.openapi.models.shared.LiveStreamContentDetails;
import org.openapis.openapi.models.shared.LiveStreamHealthStatus;
import org.openapis.openapi.models.shared.LiveStreamHealthStatusStatusEnum;
import org.openapis.openapi.models.shared.LiveStreamSnippet;
import org.openapis.openapi.models.shared.LiveStreamStatus;
import org.openapis.openapi.models.shared.LiveStreamStatusStreamStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveStreamsInsertRequest req = new YoutubeLiveStreamsInsertRequest(                new String[]{{
                                add("enim"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                liveStream = new LiveStream() {{
                    cdn = new CdnSettings() {{
                        format = "rem";
                        frameRate = CdnSettingsFrameRateEnum.THIRTYFPS;
                        ingestionInfo = new IngestionInfo() {{
                            backupIngestionAddress = "facilis";
                            ingestionAddress = "reiciendis";
                            rtmpsBackupIngestionAddress = "a";
                            rtmpsIngestionAddress = "iste";
                            streamName = "dicta";
                        }};;
                        ingestionType = CdnSettingsIngestionTypeEnum.WEBRTC;
                        resolution = CdnSettingsResolutionEnum.FOUR_HUNDRED_AND_EIGHTYP;
                    }};;
                    contentDetails = new LiveStreamContentDetails() {{
                        closedCaptionsIngestionUrl = "dolore";
                        isReusable = false;
                    }};;
                    etag = "modi";
                    id = "ec42defc-ce8f-4197-b773-e63562a7b408";
                    kind = "maiores";
                    snippet = new LiveStreamSnippet() {{
                        channelId = "accusantium";
                        description = "veniam";
                        isDefaultStream = false;
                        publishedAt = OffsetDateTime.parse("2022-05-20T08:39:00.501Z");
                        title = "Dr.";
                    }};;
                    status = new LiveStreamStatus() {{
                        healthStatus = new LiveStreamHealthStatus() {{
                            configurationIssues = new org.openapis.openapi.models.shared.LiveStreamConfigurationIssue[]{{
                                add(new LiveStreamConfigurationIssue() {{
                                    description = "quos";
                                    reason = "doloribus";
                                    severity = LiveStreamConfigurationIssueSeverityEnum.ERROR;
                                    type = LiveStreamConfigurationIssueTypeEnum.VIDEO_PROFILE_MISMATCH;
                                }}),
                                add(new LiveStreamConfigurationIssue() {{
                                    description = "delectus";
                                    reason = "velit";
                                    severity = LiveStreamConfigurationIssueSeverityEnum.INFO;
                                    type = LiveStreamConfigurationIssueTypeEnum.AUDIO_BITRATE_LOW;
                                }}),
                            }};
                            lastUpdateTimeSeconds = "similique";
                            status = LiveStreamHealthStatusStatusEnum.GOOD;
                        }};;
                        streamStatus = LiveStreamStatusStreamStatusEnum.ERROR;
                    }};;
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "unde";
                key = "incidunt";
                oauthToken = "explicabo";
                onBehalfOfContentOwner = "ipsam";
                onBehalfOfContentOwnerChannel = "cupiditate";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "alias";
                uploadProtocol = "quidem";
            }};            

            YoutubeLiveStreamsInsertResponse res = sdk.liveStreams.youtubeLiveStreamsInsert(req, new YoutubeLiveStreamsInsertSecurity() {{
                option1 = new YoutubeLiveStreamsInsertSecurityOption1("nesciunt", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveStreamsList

Retrieve the list of streams associated with the given channel. --

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListRequest;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListResponse;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveStreamsListRequest req = new YoutubeLiveStreamsListRequest(                new String[]{{
                                add("consequuntur"),
                                add("veniam"),
                                add("debitis"),
                                add("officia"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "adipisci";
                id = new String[]{{
                    add("in"),
                    add("minima"),
                    add("ex"),
                }};
                key = "minus";
                maxResults = 68880L;
                mine = false;
                oauthToken = "beatae";
                onBehalfOfContentOwner = "hic";
                onBehalfOfContentOwnerChannel = "nisi";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "ducimus";
                uploadProtocol = "fuga";
            }};            

            YoutubeLiveStreamsListResponse res = sdk.liveStreams.youtubeLiveStreamsList(req, new YoutubeLiveStreamsListSecurity() {{
                option1 = new YoutubeLiveStreamsListSecurityOption1("minima", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveStreamListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveStreamsUpdate

Updates an existing stream for the authenticated user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveStreamsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CdnSettings;
import org.openapis.openapi.models.shared.CdnSettingsFrameRateEnum;
import org.openapis.openapi.models.shared.CdnSettingsIngestionTypeEnum;
import org.openapis.openapi.models.shared.CdnSettingsResolutionEnum;
import org.openapis.openapi.models.shared.IngestionInfo;
import org.openapis.openapi.models.shared.LiveStream;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssue;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssueSeverityEnum;
import org.openapis.openapi.models.shared.LiveStreamConfigurationIssueTypeEnum;
import org.openapis.openapi.models.shared.LiveStreamContentDetails;
import org.openapis.openapi.models.shared.LiveStreamHealthStatus;
import org.openapis.openapi.models.shared.LiveStreamHealthStatusStatusEnum;
import org.openapis.openapi.models.shared.LiveStreamSnippet;
import org.openapis.openapi.models.shared.LiveStreamStatus;
import org.openapis.openapi.models.shared.LiveStreamStatusStreamStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveStreamsUpdateRequest req = new YoutubeLiveStreamsUpdateRequest(                new String[]{{
                                add("aliquid"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                liveStream = new LiveStream() {{
                    cdn = new CdnSettings() {{
                        format = "incidunt";
                        frameRate = CdnSettingsFrameRateEnum.THIRTYFPS;
                        ingestionInfo = new IngestionInfo() {{
                            backupIngestionAddress = "praesentium";
                            ingestionAddress = "dolor";
                            rtmpsBackupIngestionAddress = "exercitationem";
                            rtmpsIngestionAddress = "expedita";
                            streamName = "facilis";
                        }};;
                        ingestionType = CdnSettingsIngestionTypeEnum.HLS;
                        resolution = CdnSettingsResolutionEnum.TWO_HUNDRED_AND_FORTYP;
                    }};;
                    contentDetails = new LiveStreamContentDetails() {{
                        closedCaptionsIngestionUrl = "nemo";
                        isReusable = false;
                    }};;
                    etag = "culpa";
                    id = "23a45cef-c5fd-4e10-a0ce-2169e510019c";
                    kind = "iure";
                    snippet = new LiveStreamSnippet() {{
                        channelId = "quibusdam";
                        description = "quod";
                        isDefaultStream = false;
                        publishedAt = OffsetDateTime.parse("2022-01-28T22:31:45.952Z");
                        title = "Mrs.";
                    }};;
                    status = new LiveStreamStatus() {{
                        healthStatus = new LiveStreamHealthStatus() {{
                            configurationIssues = new org.openapis.openapi.models.shared.LiveStreamConfigurationIssue[]{{
                                add(new LiveStreamConfigurationIssue() {{
                                    description = "dignissimos";
                                    reason = "laboriosam";
                                    severity = LiveStreamConfigurationIssueSeverityEnum.INFO;
                                    type = LiveStreamConfigurationIssueTypeEnum.AUDIO_TOO_MANY_CHANNELS;
                                }}),
                                add(new LiveStreamConfigurationIssue() {{
                                    description = "natus";
                                    reason = "provident";
                                    severity = LiveStreamConfigurationIssueSeverityEnum.ERROR;
                                    type = LiveStreamConfigurationIssueTypeEnum.VIDEO_INGESTION_FASTER_THAN_REALTIME;
                                }}),
                            }};
                            lastUpdateTimeSeconds = "facilis";
                            status = LiveStreamHealthStatusStatusEnum.NO_DATA;
                        }};;
                        streamStatus = LiveStreamStatusStreamStatusEnum.ERROR;
                    }};;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "perspiciatis";
                key = "hic";
                oauthToken = "cum";
                onBehalfOfContentOwner = "aspernatur";
                onBehalfOfContentOwnerChannel = "libero";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "incidunt";
                uploadProtocol = "recusandae";
            }};            

            YoutubeLiveStreamsUpdateResponse res = sdk.liveStreams.youtubeLiveStreamsUpdate(req, new YoutubeLiveStreamsUpdateSecurity() {{
                option1 = new YoutubeLiveStreamsUpdateSecurityOption1("quod", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
