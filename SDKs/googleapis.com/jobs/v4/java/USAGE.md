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
                    parent = "sapiente";
                }};
                queryParams = new JobsProjectsTenantsClientEventsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "iusto";
                    alt = "json";
                    callback = "expedita";
                    fields = "vel";
                    key = "delectus";
                    oauthToken = "ipsa";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "beatae";
                    uploadProtocol = "iste";
                }};
                request = new ClientEvent() {{
                    createTime = "vel";
                    eventId = "est";
                    eventNotes = "aut";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]() {{
                            add("et"),
                        }};
                        type = "VIEW_REDIRECT";
                    }};
                    requestId = "est";
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