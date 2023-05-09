# platforms

### Available Operations

* [ideahubPlatformsPropertiesIdeaActivitiesCreate](#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [ideahubPlatformsPropertiesIdeasList](#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [ideahubPlatformsPropertiesLocalesList](#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [ideahubPlatformsPropertiesTopicStatesPatch](#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.

## ideahubPlatformsPropertiesIdeaActivitiesCreate

Creates an idea activity entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1betaIdeaActivity;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest req = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                googleSearchIdeahubV1betaIdeaActivity = new GoogleSearchIdeahubV1betaIdeaActivity() {{
                    ideas = new String[]{{
                        add("deserunt"),
                    }};
                    name = "Roberta Sipes";
                    topics = new String[]{{
                        add("at"),
                    }};
                    type = GoogleSearchIdeahubV1betaIdeaActivityTypeEnum.POST_UNPUBLISHED;
                    uri = "https://kosher-shoestring.net";
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse res = sdk.platforms.ideahubPlatformsPropertiesIdeaActivitiesCreate(req);

            if (res.googleSearchIdeahubV1betaIdeaActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ideahubPlatformsPropertiesIdeasList

List ideas for a given Creator and filter and sort options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeasListRequest;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeasListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesIdeasListRequest req = new IdeahubPlatformsPropertiesIdeasListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                filter = "molestiae";
                key = "modi";
                oauthToken = "qui";
                orderBy = "impedit";
                pageSize = 736918L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            IdeahubPlatformsPropertiesIdeasListResponse res = sdk.platforms.ideahubPlatformsPropertiesIdeasList(req);

            if (res.googleSearchIdeahubV1betaListIdeasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ideahubPlatformsPropertiesLocalesList

Returns which locales ideas are available in for a given Creator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesLocalesListRequest;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesLocalesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesLocalesListRequest req = new IdeahubPlatformsPropertiesLocalesListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                pageSize = 943749L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            IdeahubPlatformsPropertiesLocalesListResponse res = sdk.platforms.ideahubPlatformsPropertiesLocalesList(req);

            if (res.googleSearchIdeahubV1betaListAvailableLocalesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ideahubPlatformsPropertiesTopicStatesPatch

Update a topic state resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1betaTopicState;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesTopicStatesPatchRequest req = new IdeahubPlatformsPropertiesTopicStatesPatchRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                googleSearchIdeahubV1betaTopicState = new GoogleSearchIdeahubV1betaTopicState() {{
                    dismissed = false;
                    name = "Dr. Rickey Boyle";
                    saved = false;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                updateMask = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            IdeahubPlatformsPropertiesTopicStatesPatchResponse res = sdk.platforms.ideahubPlatformsPropertiesTopicStatesPatch(req);

            if (res.googleSearchIdeahubV1betaTopicState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
