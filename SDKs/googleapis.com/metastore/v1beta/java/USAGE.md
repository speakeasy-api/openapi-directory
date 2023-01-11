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
                    parent = "omnis";
                }};
                queryParams = new MetastoreProjectsLocationsFederationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "nihil";
                    alt = "json";
                    callback = "qui";
                    federationId = "mollitia";
                    fields = "et";
                    key = "impedit";
                    oauthToken = "cupiditate";
                    prettyPrint = true;
                    quotaUser = "earum";
                    requestId = "totam";
                    uploadType = "atque";
                    uploadProtocol = "quis";
                }};
                request = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, openapisdk.models.shared.BackendMetastore>() {{
                        put("itaque", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "laboriosam";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "ex");
                        put("quam", "similique");
                        put("natus", "omnis");
                    }};
                    name = "quas";
                    version = "voluptas";
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