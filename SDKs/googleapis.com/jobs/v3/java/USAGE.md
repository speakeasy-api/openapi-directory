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
                    parent = "mollitia";
                }};
                queryParams = new JobsProjectsClientEventsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "commodi";
                    alt = "media";
                    callback = "occaecati";
                    fields = "qui";
                    key = "rerum";
                    oauthToken = "eos";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "cupiditate";
                    uploadProtocol = "quas";
                }};
                request = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "laborum";
                        eventId = "vel";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("omnis", "est");
                            put("ut", "rerum");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]() {{
                                add("sit"),
                                add("praesentium"),
                                add("at"),
                            }};
                            type = "JOB_EVENT_TYPE_UNSPECIFIED";
                        }};
                        parentEventId = "voluptatem";
                        requestId = "accusantium";
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