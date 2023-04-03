<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsDeleteRequest req = new BigqueryDatasetsDeleteRequest() {{
                alt = "json";
                datasetId = "corrupti";
                deleteContents = false;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                projectId = "unde";
                quotaUser = "nulla";
                userIp = "corrupti";
            }}            

            BigqueryDatasetsDeleteResponse res = sdk.datasets.bigqueryDatasetsDelete(req, new BigqueryDatasetsDeleteSecurity() {{
                option1 = new BigqueryDatasetsDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->