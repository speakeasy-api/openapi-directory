<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption2;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsExportPathParams;
import org.openapis.openapi.models.operations.DatastoreProjectsExportQueryParams;
import org.openapis.openapi.models.operations.DatastoreProjectsExportRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsExportResponse;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1EntityFilter;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsExportRequest req = new DatastoreProjectsExportRequest() {{
                security = new DatastoreProjectsExportSecurity() {{
                    option1 = new DatastoreProjectsExportSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DatastoreProjectsExportPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new DatastoreProjectsExportQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]{{
                            add("iure"),
                            add("magnam"),
                        }};
                        namespaceIds = new String[]{{
                            add("ipsa"),
                            add("delectus"),
                            add("tempora"),
                            add("suscipit"),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }};
                    outputUrlPrefix = "excepturi";
                }};
            }};            

            DatastoreProjectsExportResponse res = sdk.projects.datastoreProjectsExport(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->