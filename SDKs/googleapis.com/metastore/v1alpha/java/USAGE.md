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
                    parent = "ipsa";
                }};
                queryParams = new MetastoreProjectsLocationsFederationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "error";
                    alt = "media";
                    callback = "iste";
                    federationId = "aliquid";
                    fields = "consequatur";
                    key = "aut";
                    oauthToken = "minima";
                    prettyPrint = false;
                    quotaUser = "dolor";
                    requestId = "ut";
                    uploadType = "aliquam";
                    uploadProtocol = "unde";
                }};
                request = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, openapisdk.models.shared.BackendMetastore>() {{
                        put("unde", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "dolorum";
                        }});
                        put("reiciendis", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "debitis";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illo", "qui");
                        put("vel", "aliquam");
                    }};
                    name = "quia";
                    version = "necessitatibus";
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