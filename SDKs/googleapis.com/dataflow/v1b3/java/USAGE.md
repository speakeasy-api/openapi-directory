<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption1;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption2;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption3;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurityOption4;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsSecurity;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsPathParams;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsQueryParams;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsRequest;
import org.openapis.openapi.models.operations.DataflowProjectsDeleteSnapshotsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataflowProjectsDeleteSnapshotsRequest req = new DataflowProjectsDeleteSnapshotsRequest() {{
                security = new DataflowProjectsDeleteSnapshotsSecurity() {{
                    option1 = new DataflowProjectsDeleteSnapshotsSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DataflowProjectsDeleteSnapshotsPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new DataflowProjectsDeleteSnapshotsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
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
            }};            

            DataflowProjectsDeleteSnapshotsResponse res = sdk.projects.dataflowProjectsDeleteSnapshots(req);

            if (res.deleteSnapshotResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->