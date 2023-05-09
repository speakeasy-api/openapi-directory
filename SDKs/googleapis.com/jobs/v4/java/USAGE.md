<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsClientEventsCreateRequest req = new JobsProjectsTenantsClientEventsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                clientEvent = new ClientEvent() {{
                    createTime = "distinctio";
                    eventId = "quibusdam";
                    eventNotes = "unde";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        type = JobEventTypeEnum.APPLICATION_COMPANY_SUBMIT;
                    }};;
                    requestId = "suscipit";
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            JobsProjectsTenantsClientEventsCreateResponse res = sdk.projects.jobsProjectsTenantsClientEventsCreate(req, new JobsProjectsTenantsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1("placeat", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.clientEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->