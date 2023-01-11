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

            FileProjectsLocationsBackupsCreateRequest req = new FileProjectsLocationsBackupsCreateRequest() {{
                security = new FileProjectsLocationsBackupsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FileProjectsLocationsBackupsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new FileProjectsLocationsBackupsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    backupId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new BackupInput() {{
                    description = "debitis";
                    kmsKeyName = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    sourceFileShare = "et";
                    sourceInstance = "voluptate";
                }};
            }};

            FileProjectsLocationsBackupsCreateResponse res = sdk.projects.fileProjectsLocationsBackupsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->