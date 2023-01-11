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

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest() {{
                security = new RuntimeconfigProjectsConfigsCreateSecurity() {{
                    option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new RuntimeconfigProjectsConfigsCreatePathParams() {{
                    parent = "voluptate";
                }};
                queryParams = new RuntimeconfigProjectsConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "molestiae";
                    alt = "proto";
                    callback = "repudiandae";
                    fields = "laborum";
                    key = "ipsam";
                    oauthToken = "pariatur";
                    prettyPrint = false;
                    quotaUser = "impedit";
                    requestId = "consequatur";
                    uploadType = "voluptatem";
                    uploadProtocol = "dolores";
                }};
                request = new RuntimeConfig() {{
                    description = "molestias";
                    name = "expedita";
                }};
            }};

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req);

            if (res.runtimeConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->