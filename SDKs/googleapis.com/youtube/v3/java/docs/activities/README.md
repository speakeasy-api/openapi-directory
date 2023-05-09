# activities

### Available Operations

* [youtubeActivitiesList](#youtubeactivitieslist) - Retrieves a list of resources, possibly filtered.

## youtubeActivitiesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeActivitiesListRequest;
import org.openapis.openapi.models.operations.YoutubeActivitiesListResponse;
import org.openapis.openapi.models.operations.YoutubeActivitiesListSecurity;
import org.openapis.openapi.models.operations.YoutubeActivitiesListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeActivitiesListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeActivitiesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeActivitiesListRequest req = new YoutubeActivitiesListRequest(                new String[]{{
                                add("accusamus"),
                                add("numquam"),
                                add("enim"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                channelId = "sit";
                fields = "expedita";
                home = false;
                key = "neque";
                maxResults = 153694L;
                mine = false;
                oauthToken = "vel";
                pageToken = "libero";
                prettyPrint = false;
                publishedAfter = "voluptas";
                publishedBefore = "deserunt";
                quotaUser = "quam";
                regionCode = "ipsum";
                uploadType = "incidunt";
                uploadProtocol = "qui";
            }};            

            YoutubeActivitiesListResponse res = sdk.activities.youtubeActivitiesList(req, new YoutubeActivitiesListSecurity() {{
                option1 = new YoutubeActivitiesListSecurityOption1("cupiditate", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activityListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
