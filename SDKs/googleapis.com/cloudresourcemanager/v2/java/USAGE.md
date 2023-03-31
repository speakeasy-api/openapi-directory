<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateQueryParams;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateResponse;
import org.openapis.openapi.models.shared.FolderInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    parent = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new FolderInput() {{
                    displayName = "suscipit";
                    parent = "iure";
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