<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FolderInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersCreateRequest req = new CloudresourcemanagerFoldersCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                folderInput = new FolderInput() {{
                    displayName = "provident";
                    parent = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                parent = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            CloudresourcemanagerFoldersCreateResponse res = sdk.folders.cloudresourcemanagerFoldersCreate(req, new CloudresourcemanagerFoldersCreateSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->