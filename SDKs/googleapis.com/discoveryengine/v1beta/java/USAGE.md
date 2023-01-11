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
                    parent = "corrupti";
                }};
                queryParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quaerat";
                    alt = "media";
                    callback = "quibusdam";
                    documentId = "sit";
                    fields = "molestiae";
                    key = "officia";
                    oauthToken = "nobis";
                    prettyPrint = false;
                    quotaUser = "aut";
                    uploadType = "quos";
                    uploadProtocol = "et";
                }};
                request = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "repellat";
                    jsonData = "alias";
                    name = "rem";
                    parentDocumentId = "ducimus";
                    schemaId = "sit";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("voluptatem", "dolores");
                        put("perferendis", "ad");
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