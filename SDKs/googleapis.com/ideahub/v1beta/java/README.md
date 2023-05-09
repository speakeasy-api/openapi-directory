# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest req = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleSearchIdeahubV1betaIdeaActivity = new GoogleSearchIdeahubV1betaIdeaActivity() {{
                    ideas = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    name = "Dallas Kassulke";
                    topics = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    type = GoogleSearchIdeahubV1betaIdeaActivityTypeEnum.POST_UNPUBLISHED;
                    uri = "http://whirlwind-diver.info";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [platforms](docs/platforms/README.md)

* [ideahubPlatformsPropertiesIdeaActivitiesCreate](docs/platforms/README.md#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [ideahubPlatformsPropertiesIdeasList](docs/platforms/README.md#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [ideahubPlatformsPropertiesLocalesList](docs/platforms/README.md#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [ideahubPlatformsPropertiesTopicStatesPatch](docs/platforms/README.md#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
