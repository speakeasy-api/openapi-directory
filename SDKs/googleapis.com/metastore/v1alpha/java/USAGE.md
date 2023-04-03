<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest() {{
                dollarXgafv = "2";
                federationInput = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("distinctio", new BackendMetastore() {{
                            metastoreType = "DATAPROC_METASTORE";
                            name = "unde";
                        }});
                        put("nulla", new BackendMetastore() {{
                            metastoreType = "BIGQUERY";
                            name = "illum";
                        }});
                        put("vel", new BackendMetastore() {{
                            metastoreType = "BIGQUERY";
                            name = "deserunt";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "delectus";
                    version = "tempora";
                }};
                accessToken = "suscipit";
                alt = "media";
                callback = "minus";
                federationId = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                parent = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }}            

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req, new MetastoreProjectsLocationsFederationsCreateSecurity() {{
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