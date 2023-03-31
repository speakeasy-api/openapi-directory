<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreatePathParams;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateQueryParams;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new MetastoreProjectsLocationsFederationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    federationId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("debitis", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "delectus";
                        }});
                        put("tempora", new BackendMetastore() {{
                            metastoreType = "METASTORE_TYPE_UNSPECIFIED";
                            name = "molestiae";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    name = "quis";
                    version = "veritatis";
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