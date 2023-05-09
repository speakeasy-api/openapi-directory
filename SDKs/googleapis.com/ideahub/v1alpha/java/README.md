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
import org.openapis.openapi.models.operations.IdeahubIdeasListRequest;
import org.openapis.openapi.models.operations.IdeahubIdeasListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubIdeasListRequest req = new IdeahubIdeasListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                orderBy = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            IdeahubIdeasListResponse res = sdk.ideas.ideahubIdeasList(req);

            if (res.googleSearchIdeahubV1alphaListIdeasResponse != null) {
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


### [ideas](docs/ideas/README.md)

* [ideahubIdeasList](docs/ideas/README.md#ideahubideaslist) - List ideas for a given Creator and filter and sort options.

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
