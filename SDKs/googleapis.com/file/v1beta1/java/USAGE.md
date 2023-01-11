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
                    parent = "molestias";
                }};
                queryParams = new FileProjectsLocationsBackupsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "et";
                    alt = "proto";
                    backupId = "in";
                    callback = "et";
                    fields = "facilis";
                    key = "harum";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "harum";
                    uploadType = "soluta";
                    uploadProtocol = "perspiciatis";
                }};
                request = new BackupInput() {{
                    description = "consequatur";
                    kmsKeyName = "perspiciatis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestias", "iste");
                    }};
                    sourceFileShare = "quia";
                    sourceInstance = "praesentium";
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