<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsExportRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsExportResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1EntityFilter;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsExportRequest req = new DatastoreProjectsExportRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleDatastoreAdminV1beta1ExportEntitiesRequest = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]{{
                            add("quibusdam"),
                            add("unde"),
                            add("nulla"),
                        }};
                        namespaceIds = new String[]{{
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    outputUrlPrefix = "tempora";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "nisi";
                uploadProtocol = "recusandae";
            }};            

            DatastoreProjectsExportResponse res = sdk.projects.datastoreProjectsExport(req, new DatastoreProjectsExportSecurity() {{
                option1 = new DatastoreProjectsExportSecurityOption1("temporibus", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->