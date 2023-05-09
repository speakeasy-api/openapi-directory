# search

### Available Operations

* [youtubeSearchList](#youtubesearchlist) - Retrieves a list of search resources

## youtubeSearchList

Retrieves a list of search resources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeSearchListChannelTypeEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListEventTypeEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListOrderEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListRequest;
import org.openapis.openapi.models.operations.YoutubeSearchListResponse;
import org.openapis.openapi.models.operations.YoutubeSearchListSafeSearchEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListSecurity;
import org.openapis.openapi.models.operations.YoutubeSearchListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeSearchListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeSearchListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeSearchListSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoCaptionEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoDefinitionEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoDimensionEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoDurationEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoEmbeddableEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoLicenseEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoSyndicatedEnum;
import org.openapis.openapi.models.operations.YoutubeSearchListVideoTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeSearchListRequest req = new YoutubeSearchListRequest(                new String[]{{
                                add("deserunt"),
                                add("modi"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                channelId = "ipsa";
                channelType = YoutubeSearchListChannelTypeEnum.SHOW;
                eventType = YoutubeSearchListEventTypeEnum.NONE;
                fields = "repellat";
                forContentOwner = false;
                forDeveloper = false;
                forMine = false;
                key = "aspernatur";
                location = "inventore";
                locationRadius = "sequi";
                maxResults = 143078L;
                oauthToken = "fuga";
                onBehalfOfContentOwner = "hic";
                order = YoutubeSearchListOrderEnum.SEARCH_SORT_UNSPECIFIED;
                pageToken = "dolorem";
                prettyPrint = false;
                publishedAfter = "architecto";
                publishedBefore = "aperiam";
                q = "aspernatur";
                quotaUser = "nulla";
                regionCode = "enim";
                relatedToVideoId = "illo";
                relevanceLanguage = "magnam";
                safeSearch = YoutubeSearchListSafeSearchEnum.STRICT;
                topicId = "numquam";
                type = new String[]{{
                    add("nobis"),
                    add("ex"),
                    add("repellat"),
                    add("quae"),
                }};
                uploadType = "deleniti";
                uploadProtocol = "expedita";
                videoCaption = YoutubeSearchListVideoCaptionEnum.NONE;
                videoCategoryId = "excepturi";
                videoDefinition = YoutubeSearchListVideoDefinitionEnum.STANDARD;
                videoDimension = YoutubeSearchListVideoDimensionEnum.ANY;
                videoDuration = YoutubeSearchListVideoDurationEnum.VIDEO_DURATION_UNSPECIFIED;
                videoEmbeddable = YoutubeSearchListVideoEmbeddableEnum.ANY;
                videoLicense = YoutubeSearchListVideoLicenseEnum.YOUTUBE;
                videoSyndicated = YoutubeSearchListVideoSyndicatedEnum.ANY;
                videoType = YoutubeSearchListVideoTypeEnum.ANY;
            }};            

            YoutubeSearchListResponse res = sdk.search.youtubeSearchList(req, new YoutubeSearchListSecurity() {{
                option1 = new YoutubeSearchListSecurityOption1("tenetur", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
