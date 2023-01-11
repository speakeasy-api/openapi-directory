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

            JobsProjectsTenantsClientEventsCreateRequest req = new JobsProjectsTenantsClientEventsCreateRequest() {{
                security = new JobsProjectsTenantsClientEventsCreateSecurity() {{
                    option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new JobsProjectsTenantsClientEventsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new JobsProjectsTenantsClientEventsCreateQueryParams() {{
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
                request = new ClientEvent() {{
                    createTime = "dicta";
                    eventId = "debitis";
                    eventNotes = "voluptatum";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]() {{
                            add("ut"),
                        }};
                        type = "VIEW";
                    }};
                    requestId = "et";
                }};
            }};

            JobsProjectsTenantsClientEventsCreateResponse res = sdk.projects.jobsProjectsTenantsClientEventsCreate(req);

            if (res.clientEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->