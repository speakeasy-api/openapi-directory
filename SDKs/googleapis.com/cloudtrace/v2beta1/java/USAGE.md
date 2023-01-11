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
                    parent = "sit";
                }};
                queryParams = new CloudtraceProjectsTraceSinksCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new TraceSinkInput() {{
                    name = "dicta";
                    outputConfig = new OutputConfig() {{
                        destination = "debitis";
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