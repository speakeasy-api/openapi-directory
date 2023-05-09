<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsBackupsCreateRequest req = new FileProjectsLocationsBackupsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    description = "distinctio";
                    kmsKeyName = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    sourceFileShare = "suscipit";
                    sourceInstance = "iure";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                backupId = "ipsa";
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
            }};            

            FileProjectsLocationsBackupsCreateResponse res = sdk.projects.fileProjectsLocationsBackupsCreate(req, new FileProjectsLocationsBackupsCreateSecurity("iusto", "excepturi") {{
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