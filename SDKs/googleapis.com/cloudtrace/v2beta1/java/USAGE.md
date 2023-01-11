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
                    parent = "vel";
                }};
                queryParams = new CloudtraceProjectsTraceSinksCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "rerum";
                    alt = "proto";
                    callback = "molestiae";
                    fields = "nemo";
                    key = "qui";
                    oauthToken = "quis";
                    prettyPrint = false;
                    quotaUser = "et";
                    uploadType = "et";
                    uploadProtocol = "nostrum";
                }};
                request = new TraceSinkInput() {{
                    name = "sed";
                    outputConfig = new OutputConfig() {{
                        destination = "quia";
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