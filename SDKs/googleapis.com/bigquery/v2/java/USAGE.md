<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeletePathParams;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteQueryParams;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryDatasetsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryDatasetsDeleteRequest req = new BigqueryDatasetsDeleteRequest() {{
                security = new BigqueryDatasetsDeleteSecurity() {{
                    option1 = new BigqueryDatasetsDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BigqueryDatasetsDeletePathParams() {{
                    datasetId = "corrupti";
                    projectId = "provident";
                }};
                queryParams = new BigqueryDatasetsDeleteQueryParams() {{
                    alt = "json";
                    deleteContents = false;
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            BigqueryDatasetsDeleteResponse res = sdk.datasets.bigqueryDatasetsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->