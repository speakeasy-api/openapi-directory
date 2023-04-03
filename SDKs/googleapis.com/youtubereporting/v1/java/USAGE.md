<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                dollarXgafv = "2";
                job = new Job() {{
                    createTime = "provident";
                    expireTime = "distinctio";
                    id = "quibusdam";
                    name = "unde";
                    reportTypeId = "nulla";
                    systemManaged = false;
                }};
                accessToken = "corrupti";
                alt = "proto";
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                onBehalfOfContentOwner = "iure";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "debitis";
                uploadProtocol = "ipsa";
            }}            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req, new YoutubereportingJobsCreateSecurity() {{
                option1 = new YoutubereportingJobsCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->