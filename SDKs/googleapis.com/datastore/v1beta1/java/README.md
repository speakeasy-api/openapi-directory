# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `datastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `datastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
