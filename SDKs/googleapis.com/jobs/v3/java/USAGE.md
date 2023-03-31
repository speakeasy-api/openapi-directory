<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreatePathParams;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateQueryParams;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateResponse;
import org.openapis.openapi.models.shared.CreateClientEventRequest;
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
                    parent = "corrupti";
                }};
                queryParams = new JobsProjectsClientEventsCreateQueryParams() {{
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
                request = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "suscipit";
                        eventId = "iure";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("debitis", "ipsa");
                            put("delectus", "tempora");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]{{
                                add("molestiae"),
                                add("minus"),
                            }};
                            type = "HIRED";
                        }};
                        parentEventId = "voluptatum";
                        requestId = "iusto";
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