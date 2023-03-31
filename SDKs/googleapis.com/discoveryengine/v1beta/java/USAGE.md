<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest() {{
                security = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    documentId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "iure";
                    jsonData = "magnam";
                    name = "debitis";
                    parentDocumentId = "ipsa";
                    schemaId = "delectus";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("suscipit", "molestiae");
                        put("minus", "placeat");
                    }};
                }};
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req);

            if (res.googleCloudDiscoveryengineV1betaDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->