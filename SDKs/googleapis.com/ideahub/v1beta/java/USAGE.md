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
                    parent = "quia";
                }};
                queryParams = new IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "omnis";
                    alt = "json";
                    callback = "perspiciatis";
                    fields = "beatae";
                    key = "laborum";
                    oauthToken = "corporis";
                    prettyPrint = false;
                    quotaUser = "ipsa";
                    uploadType = "pariatur";
                    uploadProtocol = "beatae";
                }};
                request = new GoogleSearchIdeahubV1betaIdeaActivity() {{
                    ideas = new String[]() {{
                        add("amet"),
                    }};
                    name = "quis";
                    topics = new String[]() {{
                        add("est"),
                        add("iure"),
                        add("eligendi"),
                    }};
                    type = "POST_DELETED";
                    uri = "aperiam";
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