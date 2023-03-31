<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshPathParams;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshQueryParams;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest req = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest() {{
                security = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse res = sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->