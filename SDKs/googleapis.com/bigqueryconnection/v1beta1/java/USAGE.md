<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    connectionId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new ConnectionInput() {{
                    cloudSql = new CloudSqlPropertiesInput() {{
                        credential = new CloudSqlCredential() {{
                            password = "debitis";
                            username = "voluptatum";
                        }};
                        database = "et";
                        instanceId = "ut";
                        type = "MYSQL";
                    }};
                    description = "et";
                    friendlyName = "voluptate";
                    name = "iste";
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