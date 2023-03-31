<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreatePathParams;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.CloudSqlPropertiesTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlPropertiesInput;
import org.openapis.openapi.models.shared.CloudSqlCredential;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsCreateRequest req = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest() {{
                security = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity() {{
                    option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BigqueryconnectionProjectsLocationsConnectionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    connectionId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ConnectionInput() {{
                    cloudSql = new CloudSqlPropertiesInput() {{
                        credential = new CloudSqlCredential() {{
                            password = "iure";
                            username = "Eli96";
                        }};
                        database = "tempora";
                        instanceId = "suscipit";
                        type = "POSTGRES";
                    }};
                    description = "minus";
                    friendlyName = "placeat";
                    name = "voluptatum";
                }};
            }};            

            BigqueryconnectionProjectsLocationsConnectionsCreateResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req);

            if (res.connection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->