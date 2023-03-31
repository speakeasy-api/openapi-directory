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

import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
import org.openapis.openapi.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;
import org.openapis.openapi.models.shared.GoogleSearchIdeahubV1betaIdeaActivity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest req = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest() {{
                pathParams = new IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleSearchIdeahubV1betaIdeaActivity() {{
                    ideas = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    name = "debitis";
                    topics = new String[]{{
                        add("delectus"),
                    }};
                    type = "POST_DRAFTED";
                    uri = "http://lasting-sex.net";
                }};
            }};            

            IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse res = sdk.platforms.ideahubPlatformsPropertiesIdeaActivitiesCreate(req);

            if (res.googleSearchIdeahubV1betaIdeaActivity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### platforms

* `ideahubPlatformsPropertiesIdeaActivitiesCreate` - Creates an idea activity entry.
* `ideahubPlatformsPropertiesIdeasList` - List ideas for a given Creator and filter and sort options.
* `ideahubPlatformsPropertiesLocalesList` - Returns which locales ideas are available in for a given Creator.
* `ideahubPlatformsPropertiesTopicStatesPatch` - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
