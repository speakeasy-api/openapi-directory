<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsClientEventsCreateRequest req = new JobsProjectsTenantsClientEventsCreateRequest() {{
                dollarXgafv = "2";
                clientEvent = new ClientEvent() {{
                    createTime = "provident";
                    eventId = "distinctio";
                    eventNotes = "quibusdam";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]{{
                            add("nulla"),
                            add("corrupti"),
                            add("illum"),
                        }};
                        type = "APPLICATION_QUICK_SUBMISSION";
                    }};
                    requestId = "error";
                }};
                accessToken = "deserunt";
                alt = "media";
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                parent = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }}            

            JobsProjectsTenantsClientEventsCreateResponse res = sdk.projects.jobsProjectsTenantsClientEventsCreate(req, new JobsProjectsTenantsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.clientEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->