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
                    parent = "est";
                }};
                queryParams = new FileProjectsLocationsBackupsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "et";
                    alt = "json";
                    backupId = "nihil";
                    callback = "unde";
                    fields = "porro";
                    key = "cum";
                    oauthToken = "cum";
                    prettyPrint = false;
                    quotaUser = "nemo";
                    uploadType = "in";
                    uploadProtocol = "et";
                }};
                request = new BackupInput() {{
                    description = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minus", "in");
                        put("similique", "consequatur");
                        put("sapiente", "consequatur");
                    }};
                    sourceFileShare = "animi";
                    sourceInstance = "alias";
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