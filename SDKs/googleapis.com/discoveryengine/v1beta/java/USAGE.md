<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "provident";
                    jsonData = "distinctio";
                    name = "quibusdam";
                    parentDocumentId = "unde";
                    schemaId = "nulla";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                }};
                accessToken = "magnam";
                alt = "proto";
                callback = "ipsa";
                documentId = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                parent = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }}            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->