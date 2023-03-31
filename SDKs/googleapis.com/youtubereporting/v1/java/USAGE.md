<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateQueryParams;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                security = new YoutubereportingJobsCreateSecurity() {{
                    option1 = new YoutubereportingJobsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new YoutubereportingJobsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    onBehalfOfContentOwner = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Job() {{
                    createTime = "suscipit";
                    expireTime = "iure";
                    id = "magnam";
                    name = "debitis";
                    reportTypeId = "ipsa";
                    systemManaged = false;
                }};
            }};            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req);

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->