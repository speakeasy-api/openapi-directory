<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsBatchSearchLinkProcessesRequest req = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest() {{
                    links = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    pageSize = 544883;
                    pageToken = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            DatalineageProjectsLocationsBatchSearchLinkProcessesResponse res = sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req, new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity("tempora", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->