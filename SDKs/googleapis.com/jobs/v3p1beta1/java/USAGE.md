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

            JobsProjectsClientEventsCreateRequest req = new JobsProjectsClientEventsCreateRequest() {{
                security = new JobsProjectsClientEventsCreateSecurity() {{
                    option1 = new JobsProjectsClientEventsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new JobsProjectsClientEventsCreatePathParams() {{
                    parent = "placeat";
                }};
                queryParams = new JobsProjectsClientEventsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "in";
                    alt = "media";
                    callback = "in";
                    fields = "officiis";
                    key = "sit";
                    oauthToken = "impedit";
                    prettyPrint = false;
                    quotaUser = "exercitationem";
                    uploadType = "odio";
                    uploadProtocol = "et";
                }};
                request = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "adipisci";
                        eventId = "earum";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("error", "id");
                            put("minima", "perspiciatis");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]() {{
                                add("dicta"),
                                add("blanditiis"),
                            }};
                            type = "APPLICATION_START";
                        }};
                        parentEventId = "et";
                        requestId = "rerum";
                    }};
                }};
            }};

            JobsProjectsClientEventsCreateResponse res = sdk.projects.jobsProjectsClientEventsCreate(req);

            if (res.clientEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->