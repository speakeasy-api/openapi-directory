<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "facilis";
                    alt = "media";
                    callback = "repellendus";
                    fields = "ut";
                    key = "et";
                    oauthToken = "at";
                    onBehalfOfContentOwner = "omnis";
                    prettyPrint = true;
                    quotaUser = "unde";
                    uploadType = "nobis";
                    uploadProtocol = "ea";
                }};
                request = new Job() {{
                    createTime = "voluptatum";
                    expireTime = "aut";
                    id = "maxime";
                    name = "delectus";
                    reportTypeId = "et";
                    systemManaged = true;
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