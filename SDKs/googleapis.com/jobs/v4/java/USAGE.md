<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreatePathParams;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateQueryParams;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateResponse;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new JobsProjectsTenantsClientEventsCreateQueryParams() {{
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
                request = new ClientEvent() {{
                    createTime = "suscipit";
                    eventId = "iure";
                    eventNotes = "magnam";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                        type = "APPLICATION_REDIRECT";
                    }};
                    requestId = "minus";
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