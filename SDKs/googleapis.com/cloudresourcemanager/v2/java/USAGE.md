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

            CloudresourcemanagerFoldersCreateRequest req = new CloudresourcemanagerFoldersCreateRequest() {{
                security = new CloudresourcemanagerFoldersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new CloudresourcemanagerFoldersCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ullam";
                    alt = "proto";
                    callback = "distinctio";
                    fields = "vitae";
                    key = "quo";
                    oauthToken = "aperiam";
                    parent = "ut";
                    prettyPrint = true;
                    quotaUser = "tenetur";
                    uploadType = "labore";
                    uploadProtocol = "eaque";
                }};
                request = new FolderInput() {{
                    displayName = "quidem";
                    parent = "neque";
                }};
            }};

            CloudresourcemanagerFoldersCreateResponse res = sdk.folders.cloudresourcemanagerFoldersCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->