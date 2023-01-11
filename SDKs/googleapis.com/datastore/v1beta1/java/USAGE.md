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
                    projectId = "sit";
                }};
                queryParams = new DatastoreProjectsExportQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]() {{
                            add("debitis"),
                            add("voluptatum"),
                            add("et"),
                        }};
                        namespaceIds = new String[]() {{
                            add("dolorem"),
                            add("et"),
                            add("voluptate"),
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("vitae", "totam");
                        put("dolores", "illum");
                        put("debitis", "vel");
                    }};
                    outputUrlPrefix = "odio";
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