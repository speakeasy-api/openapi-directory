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

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest() {{
                security = new MetastoreProjectsLocationsFederationsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MetastoreProjectsLocationsFederationsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new MetastoreProjectsLocationsFederationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    federationId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, openapisdk.models.shared.BackendMetastore>() {{
                        put("et", new BackendMetastore() {{
                            metastoreType = "DATAPROC_METASTORE";
                            name = "dolorem";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    name = "dolores";
                    version = "illum";
                }};
            }};

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->