# videos

### Available Operations

* [youtubeVideosDelete](#youtubevideosdelete) - Deletes a resource.
* [youtubeVideosGetRating](#youtubevideosgetrating) - Retrieves the ratings that the authorized user gave to a list of specified videos.
* [youtubeVideosInsert](#youtubevideosinsert) - Inserts a new resource into this collection.
* [youtubeVideosList](#youtubevideoslist) - Retrieves a list of resources, possibly filtered.
* [youtubeVideosRate](#youtubevideosrate) - Adds a like or dislike rating to a video or removes a rating from a video.
* [youtubeVideosReportAbuse](#youtubevideosreportabuse) - Report abuse for a video.
* [youtubeVideosUpdate](#youtubevideosupdate) - Updates an existing resource.

## youtubeVideosDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosDeleteRequest req = new YoutubeVideosDeleteRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "maiores";
                key = "asperiores";
                oauthToken = "autem";
                onBehalfOfContentOwner = "nesciunt";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "animi";
                uploadProtocol = "provident";
            }};            

            YoutubeVideosDeleteResponse res = sdk.videos.youtubeVideosDelete(req, new YoutubeVideosDeleteSecurity() {{
                option1 = new YoutubeVideosDeleteSecurityOption1("beatae", "ipsa") {{
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

## youtubeVideosGetRating

Retrieves the ratings that the authorized user gave to a list of specified videos.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingRequest;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingResponse;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosGetRatingSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosGetRatingRequest req = new YoutubeVideosGetRatingRequest(                new String[]{{
                                add("nam"),
                                add("assumenda"),
                                add("quo"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "suscipit";
                key = "voluptate";
                oauthToken = "nisi";
                onBehalfOfContentOwner = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "laboriosam";
                uploadProtocol = "accusamus";
            }};            

            YoutubeVideosGetRatingResponse res = sdk.videos.youtubeVideosGetRating(req, new YoutubeVideosGetRatingSecurity() {{
                option1 = new YoutubeVideosGetRatingSecurityOption1("ab", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.videoGetRatingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeVideosInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosInsertRequest;
import org.openapis.openapi.models.operations.YoutubeVideosInsertResponse;
import org.openapis.openapi.models.operations.YoutubeVideosInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosInsertSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeVideosInsertSecurityOption4;
import org.openapis.openapi.models.shared.AccessPolicy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRating;
import org.openapis.openapi.models.shared.ContentRatingAcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingAgcomRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingAnatelRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBbfcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBfvcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBmukkRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCatvRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCatvfrRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCbfcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCccRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCceRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingChfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingChvrsRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCicfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCnaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCncRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCsaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCscfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCzfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingDjctqRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingDjctqRatingReasonsEnum;
import org.openapis.openapi.models.shared.ContentRatingEcbmctRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEefilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEgfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEirinRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFcbmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFcoRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFmocRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFpbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFpbRatingReasonsEnum;
import org.openapis.openapi.models.shared.ContentRatingFskRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingGrfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIcaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIfcoRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIlfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIncaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKfcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKijkwijzerRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKmrbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingLsfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMccaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMccypRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMcstRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMdaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMedietilsynetRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMekuRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMenaMpaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMibacRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMocRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMoctwRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMpaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMpaatRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMtrcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNbcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNbcplRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNfrcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNfvcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNkclvRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNmcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingOflcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingPefilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRcnofRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingResorteviolenciaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRtcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRteRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRussiaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSkfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSmaisRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSmsaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingTvpgRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingYtRatingEnum;
import org.openapis.openapi.models.shared.GeoPoint;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.Video;
import org.openapis.openapi.models.shared.VideoAgeGating;
import org.openapis.openapi.models.shared.VideoAgeGatingVideoGameRatingEnum;
import org.openapis.openapi.models.shared.VideoContentDetails;
import org.openapis.openapi.models.shared.VideoContentDetailsCaptionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsDefinitionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsProjectionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsRegionRestriction;
import org.openapis.openapi.models.shared.VideoFileDetails;
import org.openapis.openapi.models.shared.VideoFileDetailsAudioStream;
import org.openapis.openapi.models.shared.VideoFileDetailsFileTypeEnum;
import org.openapis.openapi.models.shared.VideoFileDetailsVideoStream;
import org.openapis.openapi.models.shared.VideoFileDetailsVideoStreamRotationEnum;
import org.openapis.openapi.models.shared.VideoLiveStreamingDetails;
import org.openapis.openapi.models.shared.VideoLocalization;
import org.openapis.openapi.models.shared.VideoMonetizationDetails;
import org.openapis.openapi.models.shared.VideoPlayer;
import org.openapis.openapi.models.shared.VideoProcessingDetails;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingFailureReasonEnum;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingProgress;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingStatusEnum;
import org.openapis.openapi.models.shared.VideoRecordingDetails;
import org.openapis.openapi.models.shared.VideoSnippet;
import org.openapis.openapi.models.shared.VideoSnippetLiveBroadcastContentEnum;
import org.openapis.openapi.models.shared.VideoStatistics;
import org.openapis.openapi.models.shared.VideoStatus;
import org.openapis.openapi.models.shared.VideoStatusFailureReasonEnum;
import org.openapis.openapi.models.shared.VideoStatusLicenseEnum;
import org.openapis.openapi.models.shared.VideoStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.VideoStatusRejectionReasonEnum;
import org.openapis.openapi.models.shared.VideoStatusUploadStatusEnum;
import org.openapis.openapi.models.shared.VideoSuggestions;
import org.openapis.openapi.models.shared.VideoSuggestionsEditorSuggestionsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingErrorsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingHintsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingWarningsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsTagSuggestion;
import org.openapis.openapi.models.shared.VideoTopicDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosInsertRequest req = new YoutubeVideosInsertRequest(                new String[]{{
                                add("eaque"),
                                add("alias"),
                                add("qui"),
                                add("consequuntur"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "quidem".getBytes();
                accessToken = "sequi";
                alt = AltEnum.JSON;
                autoLevels = false;
                callback = "exercitationem";
                fields = "illum";
                key = "praesentium";
                notifySubscribers = false;
                oauthToken = "unde";
                onBehalfOfContentOwner = "similique";
                onBehalfOfContentOwnerChannel = "eligendi";
                prettyPrint = false;
                quotaUser = "tempore";
                stabilize = false;
                uploadType = "amet";
                uploadProtocol = "debitis";
            }};            

            YoutubeVideosInsertResponse res = sdk.videos.youtubeVideosInsert(req, new YoutubeVideosInsertSecurity() {{
                option1 = new YoutubeVideosInsertSecurityOption1("nobis", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.video != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeVideosList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosListChartEnum;
import org.openapis.openapi.models.operations.YoutubeVideosListMyRatingEnum;
import org.openapis.openapi.models.operations.YoutubeVideosListRequest;
import org.openapis.openapi.models.operations.YoutubeVideosListResponse;
import org.openapis.openapi.models.operations.YoutubeVideosListSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeVideosListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosListRequest req = new YoutubeVideosListRequest(                new String[]{{
                                add("id"),
                                add("atque"),
                                add("quibusdam"),
                                add("sit"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "provident";
                chart = YoutubeVideosListChartEnum.MOST_POPULAR;
                fields = "earum";
                hl = "doloremque";
                id = new String[]{{
                    add("alias"),
                }};
                key = "doloremque";
                locale = "tempora";
                maxHeight = 595986L;
                maxResults = 462097L;
                maxWidth = 541009L;
                myRating = YoutubeVideosListMyRatingEnum.LIKE;
                oauthToken = "ex";
                onBehalfOfContentOwner = "architecto";
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "laborum";
                regionCode = "veritatis";
                uploadType = "quod";
                uploadProtocol = "a";
                videoCategoryId = "qui";
            }};            

            YoutubeVideosListResponse res = sdk.videos.youtubeVideosList(req, new YoutubeVideosListSecurity() {{
                option1 = new YoutubeVideosListSecurityOption1("accusantium", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.videoListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeVideosRate

Adds a like or dislike rating to a video or removes a rating from a video.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosRateRatingEnum;
import org.openapis.openapi.models.operations.YoutubeVideosRateRequest;
import org.openapis.openapi.models.operations.YoutubeVideosRateResponse;
import org.openapis.openapi.models.operations.YoutubeVideosRateSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosRateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosRateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosRateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosRateRequest req = new YoutubeVideosRateRequest("atque", YoutubeVideosRateRatingEnum.LIKE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "vitae";
                key = "sapiente";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "voluptate";
                uploadProtocol = "inventore";
            }};            

            YoutubeVideosRateResponse res = sdk.videos.youtubeVideosRate(req, new YoutubeVideosRateSecurity() {{
                option1 = new YoutubeVideosRateSecurityOption1("facere", "maxime") {{
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

## youtubeVideosReportAbuse

Report abuse for a video.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseRequest;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseResponse;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosReportAbuseSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VideoAbuseReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosReportAbuseRequest req = new YoutubeVideosReportAbuseRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                videoAbuseReport = new VideoAbuseReport() {{
                    comments = "ab";
                    language = "ex";
                    reasonId = "consectetur";
                    secondaryReasonId = "maiores";
                    videoId = "sed";
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "voluptatum";
                key = "perferendis";
                oauthToken = "laborum";
                onBehalfOfContentOwner = "omnis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "tenetur";
                uploadProtocol = "sapiente";
            }};            

            YoutubeVideosReportAbuseResponse res = sdk.videos.youtubeVideosReportAbuse(req, new YoutubeVideosReportAbuseSecurity() {{
                option1 = new YoutubeVideosReportAbuseSecurityOption1("velit", "adipisci") {{
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

## youtubeVideosUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideosUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AccessPolicy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentRating;
import org.openapis.openapi.models.shared.ContentRatingAcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingAgcomRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingAnatelRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBbfcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBfvcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingBmukkRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCatvRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCatvfrRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCbfcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCccRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCceRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingChfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingChvrsRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCicfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCnaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCncRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCsaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCscfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingCzfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingDjctqRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingDjctqRatingReasonsEnum;
import org.openapis.openapi.models.shared.ContentRatingEcbmctRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEefilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEgfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingEirinRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFcbmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFcoRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFmocRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFpbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingFpbRatingReasonsEnum;
import org.openapis.openapi.models.shared.ContentRatingFskRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingGrfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIcaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIfcoRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIlfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingIncaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKfcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKijkwijzerRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingKmrbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingLsfRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMccaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMccypRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMcstRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMdaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMedietilsynetRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMekuRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMenaMpaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMibacRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMocRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMoctwRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMpaaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMpaatRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingMtrcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNbcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNbcplRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNfrcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNfvcbRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNkclvRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingNmcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingOflcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingPefilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRcnofRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingResorteviolenciaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRtcRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRteRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingRussiaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSkfilmRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSmaisRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingSmsaRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingTvpgRatingEnum;
import org.openapis.openapi.models.shared.ContentRatingYtRatingEnum;
import org.openapis.openapi.models.shared.GeoPoint;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.Video;
import org.openapis.openapi.models.shared.VideoAgeGating;
import org.openapis.openapi.models.shared.VideoAgeGatingVideoGameRatingEnum;
import org.openapis.openapi.models.shared.VideoContentDetails;
import org.openapis.openapi.models.shared.VideoContentDetailsCaptionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsDefinitionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsProjectionEnum;
import org.openapis.openapi.models.shared.VideoContentDetailsRegionRestriction;
import org.openapis.openapi.models.shared.VideoFileDetails;
import org.openapis.openapi.models.shared.VideoFileDetailsAudioStream;
import org.openapis.openapi.models.shared.VideoFileDetailsFileTypeEnum;
import org.openapis.openapi.models.shared.VideoFileDetailsVideoStream;
import org.openapis.openapi.models.shared.VideoFileDetailsVideoStreamRotationEnum;
import org.openapis.openapi.models.shared.VideoLiveStreamingDetails;
import org.openapis.openapi.models.shared.VideoLocalization;
import org.openapis.openapi.models.shared.VideoMonetizationDetails;
import org.openapis.openapi.models.shared.VideoPlayer;
import org.openapis.openapi.models.shared.VideoProcessingDetails;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingFailureReasonEnum;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingProgress;
import org.openapis.openapi.models.shared.VideoProcessingDetailsProcessingStatusEnum;
import org.openapis.openapi.models.shared.VideoRecordingDetails;
import org.openapis.openapi.models.shared.VideoSnippet;
import org.openapis.openapi.models.shared.VideoSnippetLiveBroadcastContentEnum;
import org.openapis.openapi.models.shared.VideoStatistics;
import org.openapis.openapi.models.shared.VideoStatus;
import org.openapis.openapi.models.shared.VideoStatusFailureReasonEnum;
import org.openapis.openapi.models.shared.VideoStatusLicenseEnum;
import org.openapis.openapi.models.shared.VideoStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.VideoStatusRejectionReasonEnum;
import org.openapis.openapi.models.shared.VideoStatusUploadStatusEnum;
import org.openapis.openapi.models.shared.VideoSuggestions;
import org.openapis.openapi.models.shared.VideoSuggestionsEditorSuggestionsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingErrorsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingHintsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsProcessingWarningsEnum;
import org.openapis.openapi.models.shared.VideoSuggestionsTagSuggestion;
import org.openapis.openapi.models.shared.VideoTopicDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideosUpdateRequest req = new YoutubeVideosUpdateRequest(                new String[]{{
                                add("optio"),
                                add("illum"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                video = new Video() {{
                    ageGating = new VideoAgeGating() {{
                        alcoholContent = false;
                        restricted = false;
                        videoGameRating = VideoAgeGatingVideoGameRatingEnum.M17_PLUS;
                    }};;
                    contentDetails = new VideoContentDetails() {{
                        caption = VideoContentDetailsCaptionEnum.FALSE;
                        contentRating = new ContentRating() {{
                            acbRating = ContentRatingAcbRatingEnum.ACB_C;
                            agcomRating = ContentRatingAgcomRatingEnum.AGCOM_VM14;
                            anatelRating = ContentRatingAnatelRatingEnum.ANATEL_R;
                            bbfcRating = ContentRatingBbfcRatingEnum.BBFC15;
                            bfvcRating = ContentRatingBfvcRatingEnum.BFVC_UNRATED;
                            bmukkRating = ContentRatingBmukkRatingEnum.BMUKK8;
                            catvRating = ContentRatingCatvRatingEnum.CATV_UNSPECIFIED;
                            catvfrRating = ContentRatingCatvfrRatingEnum.CATVFR16PLUS;
                            cbfcRating = ContentRatingCbfcRatingEnum.CBFC_UA13PLUS;
                            cccRating = ContentRatingCccRatingEnum.CCC14;
                            cceRating = ContentRatingCceRatingEnum.CCE_UNRATED;
                            chfilmRating = ContentRatingChfilmRatingEnum.CHFILM6;
                            chvrsRating = ContentRatingChvrsRatingEnum.CHVRS_R;
                            cicfRating = ContentRatingCicfRatingEnum.CICF_KNT_ENA;
                            cnaRating = ContentRatingCnaRatingEnum.CNA_UNSPECIFIED;
                            cncRating = ContentRatingCncRatingEnum.CNC_UNSPECIFIED;
                            csaRating = ContentRatingCsaRatingEnum.CSA_INTERDICTION;
                            cscfRating = ContentRatingCscfRatingEnum.CSCF_AL;
                            czfilmRating = ContentRatingCzfilmRatingEnum.CZFILM14;
                            djctqRating = ContentRatingDjctqRatingEnum.DJCTQ1416;
                            djctqRatingReasons = new org.openapis.openapi.models.shared.ContentRatingDjctqRatingReasonsEnum[]{{
                                add(ContentRatingDjctqRatingReasonsEnum.DJCTQ_INAPPROPRIATE_LANGUAGE),
                                add(ContentRatingDjctqRatingReasonsEnum.DJCTQ_DRUGS),
                                add(ContentRatingDjctqRatingReasonsEnum.DJCTQ_SEXUAL_CONTENT),
                                add(ContentRatingDjctqRatingReasonsEnum.DJCTQ_INAPPROPRIATE_LANGUAGE),
                            }};
                            ecbmctRating = ContentRatingEcbmctRatingEnum.ECBMCT7PLUS;
                            eefilmRating = ContentRatingEefilmRatingEnum.EEFILM_UNRATED;
                            egfilmRating = ContentRatingEgfilmRatingEnum.EGFILM_UNRATED;
                            eirinRating = ContentRatingEirinRatingEnum.EIRIN_R18PLUS;
                            fcbmRating = ContentRatingFcbmRatingEnum.FCBM18PL;
                            fcoRating = ContentRatingFcoRatingEnum.FCO_IIB;
                            fmocRating = ContentRatingFmocRatingEnum.FMOC16;
                            fpbRating = ContentRatingFpbRatingEnum.FPB18;
                            fpbRatingReasons = new org.openapis.openapi.models.shared.ContentRatingFpbRatingReasonsEnum[]{{
                                add(ContentRatingFpbRatingReasonsEnum.FPB_VIOLENCE),
                            }};
                            fskRating = ContentRatingFskRatingEnum.FSK_UNSPECIFIED;
                            grfilmRating = ContentRatingGrfilmRatingEnum.GRFILM_UNSPECIFIED;
                            icaaRating = ContentRatingIcaaRatingEnum.ICAA12;
                            ifcoRating = ContentRatingIfcoRatingEnum.IFCO12;
                            ilfilmRating = ContentRatingIlfilmRatingEnum.ILFILM16;
                            incaaRating = ContentRatingIncaaRatingEnum.INCAA_SAM13;
                            kfcbRating = ContentRatingKfcbRatingEnum.KFCB_R;
                            kijkwijzerRating = ContentRatingKijkwijzerRatingEnum.KIJKWIJZER_AL;
                            kmrbRating = ContentRatingKmrbRatingEnum.KMRB_R;
                            lsfRating = ContentRatingLsfRatingEnum.LSF_UNSPECIFIED;
                            mccaaRating = ContentRatingMccaaRatingEnum.MCCAA_UNSPECIFIED;
                            mccypRating = ContentRatingMccypRatingEnum.MCCYP_UNSPECIFIED;
                            mcstRating = ContentRatingMcstRatingEnum.MCST0;
                            mdaRating = ContentRatingMdaRatingEnum.MDA_PG;
                            medietilsynetRating = ContentRatingMedietilsynetRatingEnum.MEDIETILSYNET7;
                            mekuRating = ContentRatingMekuRatingEnum.MEKU_S;
                            menaMpaaRating = ContentRatingMenaMpaaRatingEnum.MENA_MPAA_G;
                            mibacRating = ContentRatingMibacRatingEnum.MIBAC_VM12;
                            mocRating = ContentRatingMocRatingEnum.MOC_BANNED;
                            moctwRating = ContentRatingMoctwRatingEnum.MOCTW_R15;
                            mpaaRating = ContentRatingMpaaRatingEnum.MPAA_X;
                            mpaatRating = ContentRatingMpaatRatingEnum.MPAAT_UNSPECIFIED;
                            mtrcbRating = ContentRatingMtrcbRatingEnum.MTRCB_R16;
                            nbcRating = ContentRatingNbcRatingEnum.NBC12PLUS;
                            nbcplRating = ContentRatingNbcplRatingEnum.NBCPL_UNRATED;
                            nfrcRating = ContentRatingNfrcRatingEnum.NFRC_D;
                            nfvcbRating = ContentRatingNfvcbRatingEnum.NFVCB_G;
                            nkclvRating = ContentRatingNkclvRatingEnum.NKCLV_UNSPECIFIED;
                            nmcRating = ContentRatingNmcRatingEnum.NMC_UNRATED;
                            oflcRating = ContentRatingOflcRatingEnum.OFLC_R18;
                            pefilmRating = ContentRatingPefilmRatingEnum.PEFILM_UNSPECIFIED;
                            rcnofRating = ContentRatingRcnofRatingEnum.RCNOF_II;
                            resorteviolenciaRating = ContentRatingResorteviolenciaRatingEnum.RESORTEVIOLENCIA_A;
                            rtcRating = ContentRatingRtcRatingEnum.RTC_D;
                            rteRating = ContentRatingRteRatingEnum.RTE_MA;
                            russiaRating = ContentRatingRussiaRatingEnum.RUSSIA0;
                            skfilmRating = ContentRatingSkfilmRatingEnum.SKFILM_UNSPECIFIED;
                            smaisRating = ContentRatingSmaisRatingEnum.SMAIS_UNSPECIFIED;
                            smsaRating = ContentRatingSmsaRatingEnum.SMSA11;
                            tvpgRating = ContentRatingTvpgRatingEnum.TVPG_UNSPECIFIED;
                            ytRating = ContentRatingYtRatingEnum.YT_UNSPECIFIED;
                        }};;
                        countryRestriction = new AccessPolicy() {{
                            allowed = false;
                            exception = new String[]{{
                                add("libero"),
                                add("molestias"),
                            }};
                        }};;
                        definition = VideoContentDetailsDefinitionEnum.HD;
                        dimension = "ipsum";
                        duration = "impedit";
                        hasCustomThumbnail = false;
                        licensedContent = false;
                        projection = VideoContentDetailsProjectionEnum.THREE_HUNDRED_AND_SIXTY;
                        regionRestriction = new VideoContentDetailsRegionRestriction() {{
                            allowed = new String[]{{
                                add("distinctio"),
                                add("voluptatem"),
                                add("non"),
                                add("quaerat"),
                            }};
                            blocked = new String[]{{
                                add("laudantium"),
                            }};
                        }};;
                    }};;
                    etag = "repellendus";
                    fileDetails = new VideoFileDetails() {{
                        audioStreams = new org.openapis.openapi.models.shared.VideoFileDetailsAudioStream[]{{
                            add(new VideoFileDetailsAudioStream() {{
                                bitrateBps = "quibusdam";
                                channelCount = 231255L;
                                codec = "voluptas";
                                vendor = "quaerat";
                            }}),
                            add(new VideoFileDetailsAudioStream() {{
                                bitrateBps = "earum";
                                channelCount = 945431L;
                                codec = "assumenda";
                                vendor = "dolore";
                            }}),
                        }};
                        bitrateBps = "enim";
                        container = "ullam";
                        creationTime = "perspiciatis";
                        durationMs = "alias";
                        fileName = "ex";
                        fileSize = "quibusdam";
                        fileType = VideoFileDetailsFileTypeEnum.VIDEO;
                        videoStreams = new org.openapis.openapi.models.shared.VideoFileDetailsVideoStream[]{{
                            add(new VideoFileDetailsVideoStream() {{
                                aspectRatio = 4124.81;
                                bitrateBps = "neque";
                                codec = "quibusdam";
                                frameRateFps = 2552.64;
                                heightPixels = 523109L;
                                rotation = VideoFileDetailsVideoStreamRotationEnum.OTHER;
                                vendor = "omnis";
                                widthPixels = 206451L;
                            }}),
                        }};
                    }};;
                    id = "5c2c9e81-f30b-4e3e-8320-2d7216576506";
                    kind = "laboriosam";
                    liveStreamingDetails = new VideoLiveStreamingDetails() {{
                        activeLiveChatId = "quaerat";
                        actualEndTime = OffsetDateTime.parse("2022-06-23T07:02:37.181Z");
                        actualStartTime = OffsetDateTime.parse("2022-12-17T09:27:00.603Z");
                        concurrentViewers = "assumenda";
                        scheduledEndTime = OffsetDateTime.parse("2021-05-13T13:14:37.115Z");
                        scheduledStartTime = OffsetDateTime.parse("2022-12-02T15:16:14.763Z");
                    }};;
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.VideoLocalization>() {{
                        put("unde", new VideoLocalization() {{
                            description = "deserunt";
                            title = "Dr.";
                        }});
                        put("consequatur", new VideoLocalization() {{
                            description = "adipisci";
                            title = "Mr.";
                        }});
                        put("optio", new VideoLocalization() {{
                            description = "tempora";
                            title = "Dr.";
                        }});
                        put("cumque", new VideoLocalization() {{
                            description = "maxime";
                            title = "Mr.";
                        }});
                    }};
                    monetizationDetails = new VideoMonetizationDetails() {{
                        access = new AccessPolicy() {{
                            allowed = false;
                            exception = new String[]{{
                                add("id"),
                            }};
                        }};;
                    }};;
                    player = new VideoPlayer() {{
                        embedHeight = "consequatur";
                        embedHtml = "quos";
                        embedWidth = "ratione";
                    }};;
                    processingDetails = new VideoProcessingDetails() {{
                        editorSuggestionsAvailability = "iure";
                        fileDetailsAvailability = "tempora";
                        processingFailureReason = VideoProcessingDetailsProcessingFailureReasonEnum.UPLOAD_FAILED;
                        processingIssuesAvailability = "natus";
                        processingProgress = new VideoProcessingDetailsProcessingProgress() {{
                            partsProcessed = "voluptatem";
                            partsTotal = "suscipit";
                            timeLeftMs = "laudantium";
                        }};;
                        processingStatus = VideoProcessingDetailsProcessingStatusEnum.FAILED;
                        tagSuggestionsAvailability = "laudantium";
                        thumbnailsAvailability = "ullam";
                    }};;
                    projectDetails = new java.util.HashMap<String, Object>() {{
                        put("quia", "officia");
                    }};
                    recordingDetails = new VideoRecordingDetails() {{
                        location = new GeoPoint() {{
                            altitude = 3126.9;
                            latitude = 3613.71;
                            longitude = 8843.25;
                        }};;
                        locationDescription = "iusto";
                        recordingDate = OffsetDateTime.parse("2021-08-16T07:12:25.575Z");
                    }};;
                    snippet = new VideoSnippet() {{
                        categoryId = "neque";
                        channelId = "quidem";
                        channelTitle = "quisquam";
                        defaultAudioLanguage = "praesentium";
                        defaultLanguage = "tempora";
                        description = "ipsam";
                        liveBroadcastContent = VideoSnippetLiveBroadcastContentEnum.COMPLETED;
                        localized = new VideoLocalization() {{
                            description = "sequi";
                            title = "Mr.";
                        }};;
                        publishedAt = OffsetDateTime.parse("2022-05-02T22:11:27.664Z");
                        tags = new String[]{{
                            add("veritatis"),
                        }};
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 621810L;
                                url = "voluptatibus";
                                width = 258140L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 700634L;
                                url = "dolorum";
                                width = 841816L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 937591L;
                                url = "excepturi";
                                width = 256567L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 476801L;
                                url = "impedit";
                                width = 621883L;
                            }};;
                        }};;
                        title = "Miss";
                    }};;
                    statistics = new VideoStatistics() {{
                        commentCount = "voluptatum";
                        dislikeCount = "aliquid";
                        favoriteCount = "nihil";
                        likeCount = "facilis";
                        viewCount = "optio";
                    }};;
                    status = new VideoStatus() {{
                        embeddable = false;
                        failureReason = VideoStatusFailureReasonEnum.INVALID_FILE;
                        license = VideoStatusLicenseEnum.YOUTUBE;
                        madeForKids = false;
                        privacyStatus = VideoStatusPrivacyStatusEnum.PUBLIC_;
                        publicStatsViewable = false;
                        publishAt = OffsetDateTime.parse("2022-08-07T19:41:24.337Z");
                        rejectionReason = VideoStatusRejectionReasonEnum.UPLOADER_ACCOUNT_SUSPENDED;
                        selfDeclaredMadeForKids = false;
                        uploadStatus = VideoStatusUploadStatusEnum.FAILED;
                    }};;
                    suggestions = new VideoSuggestions() {{
                        editorSuggestions = new org.openapis.openapi.models.shared.VideoSuggestionsEditorSuggestionsEnum[]{{
                            add(VideoSuggestionsEditorSuggestionsEnum.VIDEO_CROP),
                            add(VideoSuggestionsEditorSuggestionsEnum.VIDEO_AUTO_LEVELS),
                        }};
                        processingErrors = new org.openapis.openapi.models.shared.VideoSuggestionsProcessingErrorsEnum[]{{
                            add(VideoSuggestionsProcessingErrorsEnum.ARCHIVE_FILE),
                            add(VideoSuggestionsProcessingErrorsEnum.ARCHIVE_FILE),
                        }};
                        processingHints = new org.openapis.openapi.models.shared.VideoSuggestionsProcessingHintsEnum[]{{
                            add(VideoSuggestionsProcessingHintsEnum.SPATIAL_AUDIO),
                            add(VideoSuggestionsProcessingHintsEnum.SPATIAL_AUDIO),
                            add(VideoSuggestionsProcessingHintsEnum.HDR_VIDEO),
                            add(VideoSuggestionsProcessingHintsEnum.HDR_VIDEO),
                        }};
                        processingWarnings = new org.openapis.openapi.models.shared.VideoSuggestionsProcessingWarningsEnum[]{{
                            add(VideoSuggestionsProcessingWarningsEnum.UNKNOWN_CONTAINER),
                            add(VideoSuggestionsProcessingWarningsEnum.PROBLEMATIC_HDR_LOOKUP_TABLE),
                        }};
                        tagSuggestions = new org.openapis.openapi.models.shared.VideoSuggestionsTagSuggestion[]{{
                            add(new VideoSuggestionsTagSuggestion() {{
                                categoryRestricts = new String[]{{
                                    add("modi"),
                                    add("cumque"),
                                    add("ipsam"),
                                }};
                                tag = "occaecati";
                            }}),
                            add(new VideoSuggestionsTagSuggestion() {{
                                categoryRestricts = new String[]{{
                                    add("accusamus"),
                                }};
                                tag = "quisquam";
                            }}),
                            add(new VideoSuggestionsTagSuggestion() {{
                                categoryRestricts = new String[]{{
                                    add("fugit"),
                                }};
                                tag = "quo";
                            }}),
                            add(new VideoSuggestionsTagSuggestion() {{
                                categoryRestricts = new String[]{{
                                    add("mollitia"),
                                    add("id"),
                                    add("quibusdam"),
                                    add("ipsa"),
                                }};
                                tag = "accusamus";
                            }}),
                        }};
                    }};;
                    topicDetails = new VideoTopicDetails() {{
                        relevantTopicIds = new String[]{{
                            add("quam"),
                            add("similique"),
                            add("delectus"),
                            add("saepe"),
                        }};
                        topicCategories = new String[]{{
                            add("nobis"),
                            add("at"),
                            add("molestias"),
                            add("aut"),
                        }};
                        topicIds = new String[]{{
                            add("tenetur"),
                            add("incidunt"),
                            add("numquam"),
                            add("corrupti"),
                        }};
                    }};;
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "reiciendis";
                key = "iste";
                oauthToken = "amet";
                onBehalfOfContentOwner = "occaecati";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "impedit";
                uploadProtocol = "minima";
            }};            

            YoutubeVideosUpdateResponse res = sdk.videos.youtubeVideosUpdate(req, new YoutubeVideosUpdateSecurity() {{
                option1 = new YoutubeVideosUpdateSecurityOption1("quos", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.video != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
