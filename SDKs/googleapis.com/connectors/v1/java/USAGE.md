<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest req = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest() {{
                dollarXgafv = "2";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                name = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }}            

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse res = sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req, new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->