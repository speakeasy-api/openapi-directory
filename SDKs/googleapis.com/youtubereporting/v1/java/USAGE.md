<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                job = new Job() {{
                    createTime = "provident";
                    expireTime = "distinctio";
                    id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                    name = "Timmy Satterfield";
                    reportTypeId = "at";
                    systemManaged = false;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                onBehalfOfContentOwner = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req, new YoutubereportingJobsCreateSecurity() {{
                option1 = new YoutubereportingJobsCreateSecurityOption1("officia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->