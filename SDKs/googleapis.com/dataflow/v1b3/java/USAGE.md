<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsResponse;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsDeleteSnapshotsRequest req = new DataflowProjectsDeleteSnapshotsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                location = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                snapshotId = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            DataflowProjectsDeleteSnapshotsResponse res = sdk.projects.dataflowProjectsDeleteSnapshots(req, new DataflowProjectsDeleteSnapshotsSecurity() {{
                option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deleteSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->