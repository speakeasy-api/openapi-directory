<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                federationInput = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("quibusdam", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.BIGQUERY;
                            name = "Johnnie Stamm";
                        }});
                        put("deserunt", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.DATAPLEX;
                            name = "Dr. Valerie Toy";
                        }});
                        put("suscipit", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.DATAPLEX;
                            name = "Irving Lehner";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                    name = "Iris Aufderhar";
                    version = "sapiente";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                federationId = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req, new MetastoreProjectsLocationsFederationsCreateSecurity("dolorum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->