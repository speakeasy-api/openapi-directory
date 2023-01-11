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

            GroupsmigrationArchiveInsertRequest req = new GroupsmigrationArchiveInsertRequest() {{
                security = new GroupsmigrationArchiveInsertSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GroupsmigrationArchiveInsertPathParams() {{
                    groupId = "debitis";
                }};
                queryParams = new GroupsmigrationArchiveInsertQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "odit";
                    alt = "media";
                    callback = "aut";
                    fields = "amet";
                    key = "minus";
                    oauthToken = "consequatur";
                    prettyPrint = true;
                    quotaUser = "velit";
                    uploadType = "libero";
                    uploadProtocol = "nam";
                }};
            }};

            GroupsmigrationArchiveInsertResponse res = sdk.archive.groupsmigrationArchiveInsert(req);

            if (res.groups.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->