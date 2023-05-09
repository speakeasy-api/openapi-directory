<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.CreateClientEventRequest;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsClientEventsCreateRequest req = new JobsProjectsClientEventsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                createClientEventRequest = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "distinctio";
                        eventId = "quibusdam";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("nulla", "corrupti");
                            put("illum", "vel");
                            put("error", "deserunt");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            type = JobEventTypeEnum.INTERVIEW_GRANTED;
                        }};;
                        parentEventId = "ipsa";
                        requestId = "delectus";
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            JobsProjectsClientEventsCreateResponse res = sdk.projects.jobsProjectsClientEventsCreate(req, new JobsProjectsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsClientEventsCreateSecurityOption1("recusandae", "temporibus") {{
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