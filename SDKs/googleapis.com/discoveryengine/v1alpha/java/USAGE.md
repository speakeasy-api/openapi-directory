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
                    parent = "facere";
                }};
                queryParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "iste";
                    alt = "json";
                    callback = "deleniti";
                    documentId = "sed";
                    fields = "dolor";
                    key = "aliquam";
                    oauthToken = "nisi";
                    prettyPrint = true;
                    quotaUser = "alias";
                    uploadType = "et";
                    uploadProtocol = "ab";
                }};
                request = new GoogleCloudDiscoveryengineV1alphaDocument() {{
                    id = "error";
                    jsonData = "porro";
                    name = "eos";
                    parentDocumentId = "non";
                    schemaId = "maxime";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("neque", "minus");
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