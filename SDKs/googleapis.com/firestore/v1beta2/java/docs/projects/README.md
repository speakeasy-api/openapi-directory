# projects

### Available Operations

* [firestoreProjectsDatabasesCollectionGroupsFieldsList](#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
* [firestoreProjectsDatabasesCollectionGroupsFieldsPatch](#firestoreprojectsdatabasescollectiongroupsfieldspatch) - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
* [firestoreProjectsDatabasesCollectionGroupsIndexesCreate](#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [firestoreProjectsDatabasesCollectionGroupsIndexesDelete](#firestoreprojectsdatabasescollectiongroupsindexesdelete) - Deletes a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesGet](#firestoreprojectsdatabasescollectiongroupsindexesget) - Gets a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesList](#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [firestoreProjectsDatabasesExportDocuments](#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [firestoreProjectsDatabasesImportDocuments](#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

## firestoreProjectsDatabasesCollectionGroupsFieldsList

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest req = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req, new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1("veritatis", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirestoreAdminV1beta2ListFieldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firestoreProjectsDatabasesCollectionGroupsFieldsPatch

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2Field;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2Index;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexConfig;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest req = new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirestoreAdminV1beta2Field = new GoogleFirestoreAdminV1beta2Field() {{
                    indexConfig = new GoogleFirestoreAdminV1beta2IndexConfig() {{
                        ancestorField = "repellendus";
                        indexes = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2Index[]{{
                            add(new GoogleFirestoreAdminV1beta2Index() {{
                                fields = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField[]{{
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                                        fieldPath = "at";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "molestiae";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "esse";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.ASCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "dolorum";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.ORDER_UNSPECIFIED;
                                    }}),
                                }};
                                name = "Luke McCullough";
                                queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum.COLLECTION_GROUP;
                                state = GoogleFirestoreAdminV1beta2IndexStateEnum.NEEDS_REPAIR;
                            }}),
                            add(new GoogleFirestoreAdminV1beta2Index() {{
                                fields = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField[]{{
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                                        fieldPath = "commodi";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.ASCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                                        fieldPath = "qui";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "esse";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.ORDER_UNSPECIFIED;
                                    }}),
                                }};
                                name = "Brandon Auer";
                                queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum.QUERY_SCOPE_UNSPECIFIED;
                                state = GoogleFirestoreAdminV1beta2IndexStateEnum.READY;
                            }}),
                            add(new GoogleFirestoreAdminV1beta2Index() {{
                                fields = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField[]{{
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "laboriosam";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                }};
                                name = "Wilbur Kirlin";
                                queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum.COLLECTION;
                                state = GoogleFirestoreAdminV1beta2IndexStateEnum.NEEDS_REPAIR;
                            }}),
                            add(new GoogleFirestoreAdminV1beta2Index() {{
                                fields = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField[]{{
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                                        fieldPath = "ipsa";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.CONTAINS;
                                        fieldPath = "mollitia";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                                    }}),
                                    add(new GoogleFirestoreAdminV1beta2IndexField() {{
                                        arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                                        fieldPath = "dolorem";
                                        order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.ASCENDING;
                                    }}),
                                }};
                                name = "Della Halvorson";
                                queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum.QUERY_SCOPE_UNSPECIFIED;
                                state = GoogleFirestoreAdminV1beta2IndexStateEnum.READY;
                            }}),
                        }};
                        reverting = false;
                        usesAncestorConfig = false;
                    }};;
                    name = "Charlene Nicolas";
                }};;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                updateMask = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsPatch(req, new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1("quam", "molestiae") {{
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

## firestoreProjectsDatabasesCollectionGroupsIndexesCreate

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2Index;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest req = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirestoreAdminV1beta2Index = new GoogleFirestoreAdminV1beta2Index() {{
                    fields = new org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2IndexField[]{{
                        add(new GoogleFirestoreAdminV1beta2IndexField() {{
                            arrayConfig = GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum.ARRAY_CONFIG_UNSPECIFIED;
                            fieldPath = "vitae";
                            order = GoogleFirestoreAdminV1beta2IndexFieldOrderEnum.DESCENDING;
                        }}),
                    }};
                    name = "Bill Conn";
                    queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum.COLLECTION_GROUP;
                    state = GoogleFirestoreAdminV1beta2IndexStateEnum.CREATING;
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "quasi";
                uploadProtocol = "reiciendis";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsIndexesCreate(req, new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1("voluptatibus", "vero") {{
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

## firestoreProjectsDatabasesCollectionGroupsIndexesDelete

Deletes a composite index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest req = new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "voluptate";
                key = "cum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "reprehenderit";
                uploadProtocol = "ut";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsIndexesDelete(req, new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1("maiores", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesGet

Gets a composite index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest req = new FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "enim";
                key = "accusamus";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quae";
                uploadProtocol = "ipsum";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsIndexesGet(req, new FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1("quidem", "molestias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirestoreAdminV1beta2Index != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesList

Lists composite indexes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest req = new FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                filter = "quasi";
                key = "repudiandae";
                oauthToken = "sint";
                pageSize = 83112L;
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "enim";
                uploadProtocol = "consequatur";
            }};            

            FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse res = sdk.projects.firestoreProjectsDatabasesCollectionGroupsIndexesList(req, new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity() {{
                option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1("est", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleFirestoreAdminV1beta2ListIndexesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firestoreProjectsDatabasesExportDocuments

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesExportDocumentsRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesExportDocumentsResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesExportDocumentsSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesExportDocumentsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2ExportDocumentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesExportDocumentsRequest req = new FirestoreProjectsDatabasesExportDocumentsRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirestoreAdminV1beta2ExportDocumentsRequest = new GoogleFirestoreAdminV1beta2ExportDocumentsRequest() {{
                    collectionIds = new String[]{{
                        add("quibusdam"),
                        add("labore"),
                        add("modi"),
                    }};
                    outputUriPrefix = "qui";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "alias";
                uploadProtocol = "fugit";
            }};            

            FirestoreProjectsDatabasesExportDocumentsResponse res = sdk.projects.firestoreProjectsDatabasesExportDocuments(req, new FirestoreProjectsDatabasesExportDocumentsSecurity() {{
                option1 = new FirestoreProjectsDatabasesExportDocumentsSecurityOption1("dolorum", "excepturi") {{
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

## firestoreProjectsDatabasesImportDocuments

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesImportDocumentsRequest;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesImportDocumentsResponse;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesImportDocumentsSecurity;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
import org.openapis.openapi.models.operations.FirestoreProjectsDatabasesImportDocumentsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirestoreAdminV1beta2ImportDocumentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirestoreProjectsDatabasesImportDocumentsRequest req = new FirestoreProjectsDatabasesImportDocumentsRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirestoreAdminV1beta2ImportDocumentsRequest = new GoogleFirestoreAdminV1beta2ImportDocumentsRequest() {{
                    collectionIds = new String[]{{
                        add("labore"),
                        add("delectus"),
                        add("eum"),
                    }};
                    inputUriPrefix = "non";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "necessitatibus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            FirestoreProjectsDatabasesImportDocumentsResponse res = sdk.projects.firestoreProjectsDatabasesImportDocuments(req, new FirestoreProjectsDatabasesImportDocumentsSecurity() {{
                option1 = new FirestoreProjectsDatabasesImportDocumentsSecurityOption1("a", "dolorum") {{
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
