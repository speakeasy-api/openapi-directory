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