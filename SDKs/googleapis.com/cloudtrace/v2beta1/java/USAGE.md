<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreatePathParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateQueryParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateResponse;
import org.openapis.openapi.models.shared.TraceSinkInput;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksCreateRequest req = new CloudtraceProjectsTraceSinksCreateRequest() {{
                security = new CloudtraceProjectsTraceSinksCreateSecurity() {{
                    option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudtraceProjectsTraceSinksCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudtraceProjectsTraceSinksCreateQueryParams() {{
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
                request = new TraceSinkInput() {{
                    name = "suscipit";
                    outputConfig = new OutputConfig() {{
                        destination = "iure";
                    }};
                }};
            }};            

            CloudtraceProjectsTraceSinksCreateResponse res = sdk.projects.cloudtraceProjectsTraceSinksCreate(req);

            if (res.traceSink.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->