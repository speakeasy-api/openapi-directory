# projects

### Available Operations

* [datastoreProjectsExport](#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [datastoreProjectsImport](#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

## datastoreProjectsExport

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

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

            DatastoreProjectsExportRequest req = new DatastoreProjectsExportRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDatastoreAdminV1beta1ExportEntitiesRequest = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                        namespaceIds = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                        put("dolorum", "dicta");
                    }};
                    outputUrlPrefix = "nam";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            DatastoreProjectsExportResponse res = sdk.projects.datastoreProjectsExport(req, new DatastoreProjectsExportSecurity() {{
                option1 = new DatastoreProjectsExportSecurityOption1("molestiae", "modi") {{
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

## datastoreProjectsImport

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsImportRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsImportResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1EntityFilter;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1beta1ImportEntitiesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsImportRequest req = new DatastoreProjectsImportRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                googleDatastoreAdminV1beta1ImportEntitiesRequest = new GoogleDatastoreAdminV1beta1ImportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter() {{
                        kinds = new String[]{{
                            add("esse"),
                            add("ipsum"),
                            add("excepturi"),
                        }};
                        namespaceIds = new String[]{{
                            add("perferendis"),
                        }};
                    }};;
                    inputUrl = "ad";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sed", "iste");
                        put("dolor", "natus");
                        put("laboriosam", "hic");
                    }};
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            DatastoreProjectsImportResponse res = sdk.projects.datastoreProjectsImport(req, new DatastoreProjectsImportSecurity() {{
                option1 = new DatastoreProjectsImportSecurityOption1("ipsa", "reiciendis") {{
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
