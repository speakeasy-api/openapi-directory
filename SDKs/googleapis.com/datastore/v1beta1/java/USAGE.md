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
                    accessToken = "corporis";
                    alt = "media";
                    callback = "quisquam";
                    fields = "quibusdam";
                    key = "saepe";
                    oauthToken = "quam";
                    prettyPrint = false;
                    quotaUser = "doloremque";
                    uploadType = "est";
                    uploadProtocol = "laudantium";
                }};
                request = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]() {{
                            add("omnis"),
                        }};
                        namespaceIds = new String[]() {{
                            add("est"),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("rem", "dolorem");
                        put("assumenda", "laudantium");
                    }};
                    outputUrlPrefix = "porro";
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