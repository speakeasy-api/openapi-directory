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
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1alphaIdeaActivity;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest req = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleSearchIdeahubV1alphaIdeaActivity = new GoogleSearchIdeahubV1alphaIdeaActivity() {{
                    ideas = new String[]{{
                        add("ipsam"),
                    }};
                    name = "Timmy Satterfield";
                    topics = new String[]{{
                        add("maiores"),
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                    }};
                    type = GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum.POST_PUBLISHED;
                    uri = "https://soulful-poppy.com";
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse res = sdk.platforms.ideahubPlatformsPropertiesIdeaActivitiesCreate(req);

            if (res.googleSearchIdeahubV1alphaIdeaActivity != null) {
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

            IdeahubPlatformsPropertiesIdeasListRequest req = new IdeahubPlatformsPropertiesIdeasListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                filter = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                orderBy = "aspernatur";
                pageSize = 18789L;
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            IdeahubPlatformsPropertiesIdeasListResponse res = sdk.platforms.ideahubPlatformsPropertiesIdeasList(req);

            if (res.googleSearchIdeahubV1alphaListIdeasResponse != null) {
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

            IdeahubPlatformsPropertiesLocalesListRequest req = new IdeahubPlatformsPropertiesLocalesListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                pageSize = 613064L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            IdeahubPlatformsPropertiesLocalesListResponse res = sdk.platforms.ideahubPlatformsPropertiesLocalesList(req);

            if (res.googleSearchIdeahubV1alphaListAvailableLocalesResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1alphaTopicState;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesTopicStatesPatchRequest req = new IdeahubPlatformsPropertiesTopicStatesPatchRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                googleSearchIdeahubV1alphaTopicState = new GoogleSearchIdeahubV1alphaTopicState() {{
                    dismissed = false;
                    name = "Shaun Osinski";
                    saved = false;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                updateMask = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            IdeahubPlatformsPropertiesTopicStatesPatchResponse res = sdk.platforms.ideahubPlatformsPropertiesTopicStatesPatch(req);

            if (res.googleSearchIdeahubV1alphaTopicState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
