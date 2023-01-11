<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest req = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest() {{
                pathParams = new IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleSearchIdeahubV1betaIdeaActivity() {{
                    ideas = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
                    }};
                    name = "ut";
                    topics = new String[]() {{
                        add("et"),
                        add("voluptate"),
                        add("iste"),
                    }};
                    type = "POST_DELETED";
                    uri = "totam";
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