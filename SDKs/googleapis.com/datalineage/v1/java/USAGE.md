<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesPathParams;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesQueryParams;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsBatchSearchLinkProcessesRequest req = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest() {{
                security = new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatalineageProjectsLocationsBatchSearchLinkProcessesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatalineageProjectsLocationsBatchSearchLinkProcessesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest() {{
                    links = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    pageSize = 891773;
                    pageToken = "ipsa";
                }};
            }};            

            DatalineageProjectsLocationsBatchSearchLinkProcessesResponse res = sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req);

            if (res.googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->