<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTraceSinksCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.TraceSinkInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTraceSinksCreateRequest req = new CloudtraceProjectsTraceSinksCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                traceSinkInput = new TraceSinkInput() {{
                    name = "Ellis Mitchell";
                    outputConfig = new OutputConfig() {{
                        destination = "illum";
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            CloudtraceProjectsTraceSinksCreateResponse res = sdk.projects.cloudtraceProjectsTraceSinksCreate(req, new CloudtraceProjectsTraceSinksCreateSecurity() {{
                option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1("tempora", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.traceSink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->