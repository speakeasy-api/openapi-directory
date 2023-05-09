<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlCredential;
import org.openapis.openapi.models.shared.CloudSqlPropertiesInput;
import org.openapis.openapi.models.shared.CloudSqlPropertiesTypeEnum;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsCreateRequest req = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionInput = new ConnectionInput() {{
                    cloudSql = new CloudSqlPropertiesInput() {{
                        credential = new CloudSqlCredential() {{
                            password = "distinctio";
                            username = "Rosalinda_Mitchell84";
                        }};;
                        database = "vel";
                        instanceId = "error";
                        type = CloudSqlPropertiesTypeEnum.POSTGRES;
                    }};;
                    description = "suscipit";
                    friendlyName = "iure";
                    name = "Raquel Bednar";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                connectionId = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsCreateResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req, new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->