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
                    parent = "sit";
                }};
                queryParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    documentId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new GoogleCloudDiscoveryengineV1alphaDocument() {{
                    id = "debitis";
                    jsonData = "voluptatum";
                    name = "et";
                    parentDocumentId = "ut";
                    schemaId = "dolorem";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                }};
            }};

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req);

            if (res.googleCloudDiscoveryengineV1alphaDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->