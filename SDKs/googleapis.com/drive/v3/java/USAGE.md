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

            DriveAboutGetRequest req = new DriveAboutGetRequest() {{
                security = new DriveAboutGetSecurity() {{
                    option1 = new DriveAboutGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new DriveAboutGetQueryParams() {{
                    alt = "json";
                    fields = "voluptas";
                    key = "culpa";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "dolor";
                    userIp = "expedita";
                }};
            }};

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req);

            if (res.about.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->