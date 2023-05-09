# projects

### Available Operations

* [datacatalogProjectsLocationsEntryGroupsCreate](#datacatalogprojectslocationsentrygroupscreate) - Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsEntryGroupsEntriesCreate](#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
* [datacatalogProjectsLocationsEntryGroupsEntriesImport](#datacatalogprojectslocationsentrygroupsentriesimport) - Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.
* [datacatalogProjectsLocationsEntryGroupsEntriesList](#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
* [datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts](#datacatalogprojectslocationsentrygroupsentriesmodifyentrycontacts) - Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
* [datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview](#datacatalogprojectslocationsentrygroupsentriesmodifyentryoverview) - Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
* [datacatalogProjectsLocationsEntryGroupsEntriesStar](#datacatalogprojectslocationsentrygroupsentriesstar) - Marks an Entry as starred by the current user. Starring information is private to each user.
* [datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile](#datacatalogprojectslocationsentrygroupsentriestagsreconcile) - `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.
* [datacatalogProjectsLocationsEntryGroupsEntriesUnstar](#datacatalogprojectslocationsentrygroupsentriesunstar) - Marks an Entry as NOT starred by the current user. Starring information is private to each user.
* [datacatalogProjectsLocationsEntryGroupsList](#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [datacatalogProjectsLocationsEntryGroupsTagsCreate](#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
* [datacatalogProjectsLocationsEntryGroupsTagsList](#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [datacatalogProjectsLocationsOperationsCancel](#datacatalogprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datacatalogProjectsLocationsOperationsList](#datacatalogprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datacatalogProjectsLocationsTagTemplatesCreate](#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsTagTemplatesFieldsCreate](#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
* [datacatalogProjectsLocationsTaxonomiesCreate](#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
* [datacatalogProjectsLocationsTaxonomiesExport](#datacatalogprojectslocationstaxonomiesexport) - Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
* [datacatalogProjectsLocationsTaxonomiesImport](#datacatalogprojectslocationstaxonomiesimport) - Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
* [datacatalogProjectsLocationsTaxonomiesList](#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that you have a permission to view.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGet](#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a policy tag or a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsList](#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag, including its display name, description, and parent policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a policy tag or a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns your permissions on a specified policy tag or taxonomy.
* [datacatalogProjectsLocationsTaxonomiesReplace](#datacatalogprojectslocationstaxonomiesreplace) - Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

## datacatalogProjectsLocationsEntryGroupsCreate

Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1EntryGroupInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SystemTimestampsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsCreateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1EntryGroupInput = new GoogleCloudDatacatalogV1EntryGroupInput() {{
                    dataCatalogTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput() {{
                        createTime = "saepe";
                        updateTime = "fuga";
                    }};;
                    description = "in";
                    displayName = "corporis";
                    name = "Brad Turcotte Jr.";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                entryGroupId = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            DatacatalogProjectsLocationsEntryGroupsCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsCreate(req, new DatacatalogProjectsLocationsEntryGroupsCreateSecurity("omnis", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1EntryGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1BigQueryConnectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1BigQueryRoutineSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1BusinessContext;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudBigtableSystemSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CommonUsageStats;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1Contacts;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ContactsPerson;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataSourceConnectionSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataSourceInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataSourceServiceEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DatabaseTableSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexExternalTable;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexFilesetSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexTableSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1EntryInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1EntryOverview;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1EntryTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FilesetSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1GcsFilesetSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1LookerSystemSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PersonalDetails;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PhysicalSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RoutineSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RoutineSpecArgument;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1Schema;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ServiceSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1StorageProperties;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SystemTimestampsInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1UsageSignalInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1EntryInput = new GoogleCloudDatacatalogV1EntryInput() {{
                    businessContext = new GoogleCloudDatacatalogV1BusinessContext() {{
                        contacts = new GoogleCloudDatacatalogV1Contacts() {{
                            people = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ContactsPerson[]{{
                                add(new GoogleCloudDatacatalogV1ContactsPerson() {{
                                    designation = "iure";
                                    email = "Yasmeen65@yahoo.com";
                                }}),
                            }};
                        }};;
                        entryOverview = new GoogleCloudDatacatalogV1EntryOverview() {{
                            overview = "dolorem";
                        }};;
                    }};;
                    cloudBigtableSystemSpec = new GoogleCloudDatacatalogV1CloudBigtableSystemSpec() {{
                        instanceDisplayName = "culpa";
                    }};;
                    dataSource = new GoogleCloudDatacatalogV1DataSourceInput() {{
                        resource = "consequuntur";
                        service = GoogleCloudDatacatalogV1DataSourceServiceEnum.BIGQUERY;
                        storageProperties = new GoogleCloudDatacatalogV1StorageProperties() {{
                            filePattern = new String[]{{
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }};
                            fileType = "quam";
                        }};;
                    }};;
                    dataSourceConnectionSpec = new GoogleCloudDatacatalogV1DataSourceConnectionSpec() {{
                        bigqueryConnectionSpec = new GoogleCloudDatacatalogV1BigQueryConnectionSpec() {{
                            cloudSql = new GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec() {{
                                database = "molestiae";
                                instanceId = "velit";
                                type = GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum.POSTGRES;
                            }};;
                            connectionType = GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum.CONNECTION_TYPE_UNSPECIFIED;
                            hasCredential = false;
                        }};;
                    }};;
                    databaseTableSpec = new GoogleCloudDatacatalogV1DatabaseTableSpec() {{
                        databaseViewSpec = new GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec() {{
                            baseTable = "quis";
                            sqlQuery = "vitae";
                            viewType = GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum.MATERIALIZED_VIEW;
                        }};;
                        dataplexTable = new GoogleCloudDatacatalogV1DataplexTableSpec() {{
                            dataplexSpec = new GoogleCloudDatacatalogV1DataplexSpec() {{
                                asset = "animi";
                                compressionFormat = "enim";
                                dataFormat = new GoogleCloudDatacatalogV1PhysicalSchema() {{
                                    avro = new GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema() {{
                                        text = "odit";
                                    }};;
                                    csv = new java.util.HashMap<String, Object>() {{
                                        put("sequi", "tenetur");
                                        put("ipsam", "id");
                                        put("possimus", "aut");
                                        put("quasi", "error");
                                    }};
                                    orc = new java.util.HashMap<String, Object>() {{
                                        put("laborum", "quasi");
                                        put("reiciendis", "voluptatibus");
                                        put("vero", "nihil");
                                        put("praesentium", "voluptatibus");
                                    }};
                                    parquet = new java.util.HashMap<String, Object>() {{
                                        put("omnis", "voluptate");
                                    }};
                                    protobuf = new GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema() {{
                                        text = "cum";
                                    }};;
                                    thrift = new GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema() {{
                                        text = "perferendis";
                                    }};;
                                }};;
                                projectId = "doloremque";
                            }};;
                            externalTables = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1DataplexExternalTable[]{{
                                add(new GoogleCloudDatacatalogV1DataplexExternalTable() {{
                                    dataCatalogEntry = "ut";
                                    fullyQualifiedName = "maiores";
                                    googleCloudResource = "dicta";
                                    system = GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum.DATAPROC_METASTORE;
                                }}),
                                add(new GoogleCloudDatacatalogV1DataplexExternalTable() {{
                                    dataCatalogEntry = "dolore";
                                    fullyQualifiedName = "iusto";
                                    googleCloudResource = "dicta";
                                    system = GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum.CLOUD_BIGTABLE;
                                }}),
                            }};
                            userManaged = false;
                        }};;
                        type = GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum.TABLE_TYPE_UNSPECIFIED;
                    }};;
                    description = "accusamus";
                    displayName = "commodi";
                    filesetSpec = new GoogleCloudDatacatalogV1FilesetSpec() {{
                        dataplexFileset = new GoogleCloudDatacatalogV1DataplexFilesetSpec() {{
                            dataplexSpec = new GoogleCloudDatacatalogV1DataplexSpec() {{
                                asset = "repudiandae";
                                compressionFormat = "quae";
                                dataFormat = new GoogleCloudDatacatalogV1PhysicalSchema() {{
                                    avro = new GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema() {{
                                        text = "ipsum";
                                    }};;
                                    csv = new java.util.HashMap<String, Object>() {{
                                        put("molestias", "excepturi");
                                        put("pariatur", "modi");
                                        put("praesentium", "rem");
                                    }};
                                    orc = new java.util.HashMap<String, Object>() {{
                                        put("quasi", "repudiandae");
                                        put("sint", "veritatis");
                                        put("itaque", "incidunt");
                                        put("enim", "consequatur");
                                    }};
                                    parquet = new java.util.HashMap<String, Object>() {{
                                        put("quibusdam", "explicabo");
                                        put("deserunt", "distinctio");
                                        put("quibusdam", "labore");
                                    }};
                                    protobuf = new GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema() {{
                                        text = "modi";
                                    }};;
                                    thrift = new GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema() {{
                                        text = "qui";
                                    }};;
                                }};;
                                projectId = "aliquid";
                            }};;
                        }};;
                    }};;
                    fullyQualifiedName = "cupiditate";
                    gcsFilesetSpec = new GoogleCloudDatacatalogV1GcsFilesetSpecInput() {{
                        filePatterns = new String[]{{
                            add("perferendis"),
                            add("magni"),
                            add("assumenda"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("alias", "fugit");
                        put("dolorum", "excepturi");
                    }};
                    linkedResource = "tempora";
                    lookerSystemSpec = new GoogleCloudDatacatalogV1LookerSystemSpec() {{
                        parentInstanceDisplayName = "facilis";
                        parentInstanceId = "tempore";
                        parentModelDisplayName = "labore";
                        parentModelId = "delectus";
                        parentViewDisplayName = "eum";
                        parentViewId = "non";
                    }};;
                    personalDetails = new GoogleCloudDatacatalogV1PersonalDetails() {{
                        starTime = "eligendi";
                        starred = false;
                    }};;
                    routineSpec = new GoogleCloudDatacatalogV1RoutineSpec() {{
                        bigqueryRoutineSpec = new GoogleCloudDatacatalogV1BigQueryRoutineSpec() {{
                            importedLibraries = new String[]{{
                                add("aliquid"),
                                add("provident"),
                                add("necessitatibus"),
                            }};
                        }};;
                        definitionBody = "sint";
                        language = "officia";
                        returnType = "dolor";
                        routineArguments = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RoutineSpecArgument[]{{
                            add(new GoogleCloudDatacatalogV1RoutineSpecArgument() {{
                                mode = GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum.INOUT;
                                name = "Arnold Kirlin";
                                type = "rerum";
                            }}),
                            add(new GoogleCloudDatacatalogV1RoutineSpecArgument() {{
                                mode = GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum.MODE_UNSPECIFIED;
                                name = "Blanca Schulist";
                                type = "laborum";
                            }}),
                            add(new GoogleCloudDatacatalogV1RoutineSpecArgument() {{
                                mode = GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum.INOUT;
                                name = "Toni Haley";
                                type = "quidem";
                            }}),
                            add(new GoogleCloudDatacatalogV1RoutineSpecArgument() {{
                                mode = GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum.OUT;
                                name = "Lynn Kuvalis";
                                type = "amet";
                            }}),
                        }};
                        routineType = GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum.SCALAR_FUNCTION;
                    }};;
                    schema = new GoogleCloudDatacatalogV1Schema() {{
                        columns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchema[]{{
                            add(new GoogleCloudDatacatalogV1ColumnSchema() {{
                                column = "vel";
                                defaultValue = "natus";
                                description = "omnis";
                                gcRule = "molestiae";
                                highestIndexingType = GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum.INDEXING_TYPE_UNSPECIFIED;
                                lookerColumnSpec = new GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec() {{
                                    type = GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum.DIMENSION_GROUP;
                                }};
                                mode = "magnam";
                                ordinalPosition = 716075;
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1ColumnSchema() {{}}),
                                }};
                                type = "labore";
                            }}),
                            add(new GoogleCloudDatacatalogV1ColumnSchema() {{
                                column = "labore";
                                defaultValue = "suscipit";
                                description = "natus";
                                gcRule = "nobis";
                                highestIndexingType = GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum.INDEXING_TYPE_NON_UNIQUE;
                                lookerColumnSpec = new GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec() {{
                                    type = GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum.PARAMETER;
                                }};
                                mode = "aspernatur";
                                ordinalPosition = 102863;
                                subcolumns = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ColumnSchema[]{{
                                    add(new GoogleCloudDatacatalogV1ColumnSchema() {{}}),
                                    add(new GoogleCloudDatacatalogV1ColumnSchema() {{}}),
                                }};
                                type = "et";
                            }}),
                        }};
                    }};;
                    serviceSpec = new GoogleCloudDatacatalogV1ServiceSpec() {{
                        cloudBigtableInstanceSpec = new GoogleCloudDatacatalogV1CloudBigtableInstanceSpec() {{
                            cloudBigtableClusterSpecs = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec[]{{
                                add(new GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec() {{
                                    displayName = "ullam";
                                    linkedResource = "provident";
                                    location = "quos";
                                    type = "sint";
                                }}),
                                add(new GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec() {{
                                    displayName = "accusantium";
                                    linkedResource = "mollitia";
                                    location = "reiciendis";
                                    type = "mollitia";
                                }}),
                                add(new GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec() {{
                                    displayName = "ad";
                                    linkedResource = "eum";
                                    location = "dolor";
                                    type = "necessitatibus";
                                }}),
                            }};
                        }};;
                    }};;
                    sourceSystemTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput() {{
                        createTime = "odit";
                        updateTime = "nemo";
                    }};;
                    sqlDatabaseSystemSpec = new GoogleCloudDatacatalogV1SqlDatabaseSystemSpec() {{
                        databaseVersion = "quasi";
                        instanceHost = "iure";
                        sqlEngine = "doloribus";
                    }};;
                    type = GoogleCloudDatacatalogV1EntryTypeEnum.EXPLORE;
                    usageSignal = new GoogleCloudDatacatalogV1UsageSignalInput() {{
                        commonUsageWithinTimeRange = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CommonUsageStats>() {{
                            put("maxime", new GoogleCloudDatacatalogV1CommonUsageStats() {{
                                viewCount = "deleniti";
                            }});
                            put("facilis", new GoogleCloudDatacatalogV1CommonUsageStats() {{
                                viewCount = "in";
                            }});
                        }};
                        favoriteCount = "architecto";
                        updateTime = "architecto";
                    }};;
                    userSpecifiedSystem = "repudiandae";
                    userSpecifiedType = "ullam";
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                entryId = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesCreate(req, new DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity("natus", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Entry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesImport

Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ImportEntriesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1ImportEntriesRequest = new GoogleCloudDatacatalogV1ImportEntriesRequest() {{
                    gcsBucketPath = "illum";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesImportResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesImport(req, new DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity("quidem", "ipsam") {{
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

## datacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesListRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                key = "voluptatibus";
                oauthToken = "perferendis";
                pageSize = 855804L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                readMask = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesList(req, new DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity("libero", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ListEntriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts

Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1Contacts;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ContactsPerson;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ModifyEntryContactsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1ModifyEntryContactsRequest = new GoogleCloudDatacatalogV1ModifyEntryContactsRequest() {{
                    contacts = new GoogleCloudDatacatalogV1Contacts() {{
                        people = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ContactsPerson[]{{
                            add(new GoogleCloudDatacatalogV1ContactsPerson() {{
                                designation = "dignissimos";
                                email = "Eulah1@gmail.com";
                            }}),
                            add(new GoogleCloudDatacatalogV1ContactsPerson() {{
                                designation = "dolores";
                                email = "Jalyn.Fadel94@hotmail.com";
                            }}),
                            add(new GoogleCloudDatacatalogV1ContactsPerson() {{
                                designation = "recusandae";
                                email = "Mckenzie78@yahoo.com";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "asperiores";
                uploadProtocol = "earum";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts(req, new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity("modi", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Contacts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview

Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1EntryOverview;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ModifyEntryOverviewRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1ModifyEntryOverviewRequest = new GoogleCloudDatacatalogV1ModifyEntryOverviewRequest() {{
                    entryOverview = new GoogleCloudDatacatalogV1EntryOverview() {{
                        overview = "pariatur";
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "delectus";
                key = "quaerat";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "dolorem";
                uploadProtocol = "dolorem";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview(req, new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity("dolor", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1EntryOverview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesStar

Marks an Entry as starred by the current user. Starring information is private to each user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cum", "voluptate");
                    put("dignissimos", "reiciendis");
                    put("amet", "dolorum");
                }};
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesStar(req, new DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity("voluptatibus", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1StarEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile

`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ReconcileTagsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1ReconcileTagsRequestInput = new GoogleCloudDatacatalogV1ReconcileTagsRequestInput() {{
                    forceDeleteMissing = false;
                    tagTemplate = "atque";
                    tags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagInput[]{{
                        add(new GoogleCloudDatacatalogV1TagInput() {{
                            column = "fugiat";
                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldInput>() {{
                                put("soluta", new GoogleCloudDatacatalogV1TagFieldInput() {{
                                    boolValue = false;
                                    doubleValue = 6793.93;
                                    enumValue = new GoogleCloudDatacatalogV1TagFieldEnumValue() {{
                                        displayName = "iusto";
                                    }};
                                    richtextValue = "voluptate";
                                    stringValue = "dolorum";
                                    timestampValue = "deleniti";
                                }});
                            }};
                            name = "Terence Rau";
                            template = "ipsum";
                        }}),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "eius";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "optio";
                uploadProtocol = "accusamus";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile(req, new DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity("ad", "saepe") {{
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

## datacatalogProjectsLocationsEntryGroupsEntriesUnstar

Marks an Entry as NOT starred by the current user. Starring information is private to each user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest req = new DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("minima", "repellendus");
                    put("totam", "similique");
                    put("alias", "at");
                }};
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "quod";
                key = "officiis";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "a";
                uploadProtocol = "esse";
            }};            

            DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsEntriesUnstar(req, new DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity("harum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1UnstarEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsList

Lists entry groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsListRequest req = new DatacatalogProjectsLocationsEntryGroupsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "accusamus";
                key = "numquam";
                oauthToken = "enim";
                pageSize = 213312L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "nihil";
                uploadProtocol = "sit";
            }};            

            DatacatalogProjectsLocationsEntryGroupsListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsList(req, new DatacatalogProjectsLocationsEntryGroupsListSecurity("expedita", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ListEntryGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest req = new DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1TagInput = new GoogleCloudDatacatalogV1TagInput() {{
                    column = "libero";
                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagFieldInput>() {{
                        put("deserunt", new GoogleCloudDatacatalogV1TagFieldInput() {{
                            boolValue = false;
                            doubleValue = 4635.75;
                            enumValue = new GoogleCloudDatacatalogV1TagFieldEnumValue() {{
                                displayName = "ipsum";
                            }};
                            richtextValue = "incidunt";
                            stringValue = "qui";
                            timestampValue = "cupiditate";
                        }});
                        put("maxime", new GoogleCloudDatacatalogV1TagFieldInput() {{
                            boolValue = false;
                            doubleValue = 8638.56;
                            enumValue = new GoogleCloudDatacatalogV1TagFieldEnumValue() {{
                                displayName = "soluta";
                            }};
                            richtextValue = "dicta";
                            stringValue = "laborum";
                            timestampValue = "totam";
                        }});
                    }};
                    name = "Kelly Daniel";
                    template = "aliquid";
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "qui";
                key = "neque";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "odio";
                uploadProtocol = "sunt";
            }};            

            DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsTagsCreate(req, new DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity("ullam", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsEntryGroupsTagsList

Lists tags assigned to an Entry. The columns in the response are lowercased.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsEntryGroupsTagsListRequest req = new DatacatalogProjectsLocationsEntryGroupsTagsListRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "et";
                key = "saepe";
                oauthToken = "ipsum";
                pageSize = 83422L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "tempore";
                uploadProtocol = "cupiditate";
            }};            

            DatacatalogProjectsLocationsEntryGroupsTagsListResponse res = sdk.projects.datacatalogProjectsLocationsEntryGroupsTagsList(req, new DatacatalogProjectsLocationsEntryGroupsTagsListSecurity("aperiam", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ListTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsOperationsCancelRequest req = new DatacatalogProjectsLocationsOperationsCancelRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "architecto";
                key = "quae";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "itaque";
                uploadProtocol = "consequatur";
            }};            

            DatacatalogProjectsLocationsOperationsCancelResponse res = sdk.projects.datacatalogProjectsLocationsOperationsCancel(req, new DatacatalogProjectsLocationsOperationsCancelSecurity("est", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## datacatalogProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsOperationsListRequest req = new DatacatalogProjectsLocationsOperationsListRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "qui";
                filter = "quae";
                key = "laudantium";
                oauthToken = "odio";
                pageSize = 580447L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "vero";
                uploadProtocol = "omnis";
            }};            

            DatacatalogProjectsLocationsOperationsListResponse res = sdk.projects.datacatalogProjectsLocationsOperationsList(req, new DatacatalogProjectsLocationsOperationsListSecurity("quis", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagTemplateFieldInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagTemplateInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesCreateRequest req = new DatacatalogProjectsLocationsTagTemplatesCreateRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1TagTemplateInput = new GoogleCloudDatacatalogV1TagTemplateInput() {{
                    displayName = "consectetur";
                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagTemplateFieldInput>() {{
                        put("tenetur", new GoogleCloudDatacatalogV1TagTemplateFieldInput() {{
                            description = "dignissimos";
                            displayName = "hic";
                            isRequired = false;
                            order = 715561;
                            type = new GoogleCloudDatacatalogV1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "odio";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "similique";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "facilis";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "vero";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum.STRING;
                            }};
                        }});
                        put("dolore", new GoogleCloudDatacatalogV1TagTemplateFieldInput() {{
                            description = "quibusdam";
                            displayName = "illum";
                            isRequired = false;
                            order = 194342;
                            type = new GoogleCloudDatacatalogV1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "impedit";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "aut";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "voluptatibus";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum.STRING;
                            }};
                        }});
                        put("nulla", new GoogleCloudDatacatalogV1TagTemplateFieldInput() {{
                            description = "fugit";
                            displayName = "porro";
                            isRequired = false;
                            order = 981830;
                            type = new GoogleCloudDatacatalogV1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "iusto";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "eligendi";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "ducimus";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "alias";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum.BOOL;
                            }};
                        }});
                        put("tempora", new GoogleCloudDatacatalogV1TagTemplateFieldInput() {{
                            description = "ipsam";
                            displayName = "ea";
                            isRequired = false;
                            order = 136900;
                            type = new GoogleCloudDatacatalogV1FieldType() {{
                                enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType() {{
                                    allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[]{{
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "possimus";
                                        }}),
                                        add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                            displayName = "magnam";
                                        }}),
                                    }};
                                }};
                                primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum.DOUBLE;
                            }};
                        }});
                    }};
                    isPubliclyReadable = false;
                    name = "Mabel Cartwright";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sapiente";
                tagTemplateId = "quisquam";
                uploadType = "saepe";
                uploadProtocol = "ea";
            }};            

            DatacatalogProjectsLocationsTagTemplatesCreateResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesCreate(req, new DatacatalogProjectsLocationsTagTemplatesCreateSecurity("impedit", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1TagTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumType;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TagTemplateFieldInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest req = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1TagTemplateFieldInput = new GoogleCloudDatacatalogV1TagTemplateFieldInput() {{
                    description = "inventore";
                    displayName = "magnam";
                    isRequired = false;
                    order = 407241;
                    type = new GoogleCloudDatacatalogV1FieldType() {{
                        enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType() {{
                            allowedValues = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[]{{
                                add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "consectetur";
                                }}),
                                add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "recusandae";
                                }}),
                                add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "aspernatur";
                                }}),
                                add(new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue() {{
                                    displayName = "minima";
                                }}),
                            }};
                        }};;
                        primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum.PRIMITIVE_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "aut";
                key = "deleniti";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquam";
                tagTemplateFieldId = "fugit";
                uploadType = "accusamus";
                uploadProtocol = "inventore";
            }};            

            DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesFieldsCreate(req, new DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity("non", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1TagTemplateField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. Within a single enum field, enum values must be unique.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest req = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest = new GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest() {{
                    newEnumValueDisplayName = "placeat";
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nobis";
                key = "quas";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "voluptas";
                uploadProtocol = "libero";
            }};            

            DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse res = sdk.projects.datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req, new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity("quasi", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1TagTemplateField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SystemTimestampsInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TaxonomyInput;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TaxonomyService;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TaxonomyServiceNameEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesCreateRequest req = new DatacatalogProjectsLocationsTaxonomiesCreateRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1TaxonomyInput = new GoogleCloudDatacatalogV1TaxonomyInput() {{
                    activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[]{{
                        add(GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                        add(GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                        add(GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                    }};
                    description = "odio";
                    displayName = "eius";
                    service = new GoogleCloudDatacatalogV1TaxonomyService() {{
                        identity = "esse";
                        name = GoogleCloudDatacatalogV1TaxonomyServiceNameEnum.MANAGING_SYSTEM_DATAPLEX;
                    }};;
                    taxonomyTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput() {{
                        createTime = "rem";
                        updateTime = "fuga";
                    }};;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "ut";
                key = "eum";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "eos";
                uploadProtocol = "praesentium";
            }};            

            DatacatalogProjectsLocationsTaxonomiesCreateResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesCreate(req, new DatacatalogProjectsLocationsTaxonomiesCreateSecurity("quisquam", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Taxonomy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesExport

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesExportRequest req = new DatacatalogProjectsLocationsTaxonomiesExportRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "illum";
                key = "quo";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "eius";
                serializedTaxonomies = false;
                taxonomies = new String[]{{
                    add("voluptas"),
                }};
                uploadType = "ab";
                uploadProtocol = "cupiditate";
            }};            

            DatacatalogProjectsLocationsTaxonomiesExportResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesExport(req, new DatacatalogProjectsLocationsTaxonomiesExportSecurity("consequatur", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ExportTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesImport

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1CrossRegionalSource;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ImportTaxonomiesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1InlineSource;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomy;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesImportRequest req = new DatacatalogProjectsLocationsTaxonomiesImportRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1ImportTaxonomiesRequest = new GoogleCloudDatacatalogV1ImportTaxonomiesRequest() {{
                    crossRegionalSource = new GoogleCloudDatacatalogV1CrossRegionalSource() {{
                        taxonomy = "aspernatur";
                    }};;
                    inlineSource = new GoogleCloudDatacatalogV1InlineSource() {{
                        taxonomies = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomy[]{{
                            add(new GoogleCloudDatacatalogV1SerializedTaxonomy() {{
                                activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[]{{
                                    add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                                    add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                    add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                                    add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                                }};
                                description = "quod";
                                displayName = "dignissimos";
                                policyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{
                                        childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                        }};
                                        description = "totam";
                                        displayName = "accusamus";
                                        policyTag = "aliquam";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "sapiente";
                key = "dolores";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "accusantium";
                uploadProtocol = "porro";
            }};            

            DatacatalogProjectsLocationsTaxonomiesImportResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesImport(req, new DatacatalogProjectsLocationsTaxonomiesImportSecurity("eum", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ImportTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that you have a permission to view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesListRequest req = new DatacatalogProjectsLocationsTaxonomiesListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "mollitia";
                filter = "incidunt";
                key = "atque";
                oauthToken = "explicabo";
                pageSize = 325685L;
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "sapiente";
                uploadProtocol = "consequuntur";
            }};            

            DatacatalogProjectsLocationsTaxonomiesListResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesList(req, new DatacatalogProjectsLocationsTaxonomiesListSecurity("ratione", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ListTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in a taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PolicyTagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogV1PolicyTagInput = new GoogleCloudDatacatalogV1PolicyTagInput() {{
                    description = "atque";
                    displayName = "et";
                    parentPolicyTag = "esse";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "esse";
                key = "quod";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "aliquid";
                uploadProtocol = "quasi";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity("saepe", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "distinctio";
                force = false;
                key = "eligendi";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "tempore";
                uploadProtocol = "adipisci";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity("cumque", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGet

Gets a policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "esse";
                key = "blanditiis";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "a";
                readMask = "nulla";
                uploadType = "quas";
                uploadProtocol = "esse";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity("quasi", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 863023;
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "asperiores";
                key = "facere";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "quasi";
                uploadProtocol = "similique";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity("culpa", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsList

Lists all policy tags in a taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "eius";
                key = "libero";
                oauthToken = "illum";
                pageSize = 742238L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "sapiente";
                uploadProtocol = "dicta";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity("ullam", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1ListPolicyTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag, including its display name, description, and parent policy tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1PolicyTagInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1PolicyTagInput = new GoogleCloudDatacatalogV1PolicyTagInput() {{
                    description = "aut";
                    displayName = "voluptatum";
                    parentPolicyTag = "qui";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "itaque";
                key = "dolorum";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "omnis";
                updateMask = "tenetur";
                uploadType = "quasi";
                uploadProtocol = "at";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity("et", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1PolicyTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "consectetur";
                                    expression = "adipisci";
                                    location = "iste";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("rem"),
                                }};
                                role = "aut";
                            }}),
                        }};
                        etag = "laudantium";
                        version = 428796;
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "non";
                key = "voluptatem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "impedit";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity("explicabo", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions

Returns your permissions on a specified policy tag or taxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest req = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("maiores"),
                    }};
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "voluptas";
                key = "asperiores";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "quaerat";
                uploadProtocol = "consequuntur";
            }};            

            DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req, new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity("repellendus", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datacatalogProjectsLocationsTaxonomiesReplace

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesReplaceRequest;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesReplaceResponse;
import org.openapis.openapi.models.operations.DatacatalogProjectsLocationsTaxonomiesReplaceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ReplaceTaxonomyRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomy;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogProjectsLocationsTaxonomiesReplaceRequest req = new DatacatalogProjectsLocationsTaxonomiesReplaceRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogV1ReplaceTaxonomyRequest = new GoogleCloudDatacatalogV1ReplaceTaxonomyRequest() {{
                    serializedTaxonomy = new GoogleCloudDatacatalogV1SerializedTaxonomy() {{
                        activatedPolicyTypes = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[]{{
                            add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.FINE_GRAINED_ACCESS_CONTROL),
                            add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                            add(GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum.POLICY_TYPE_UNSPECIFIED),
                        }};
                        description = "quaerat";
                        displayName = "porro";
                        policyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{
                                childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                }};
                                description = "ab";
                                displayName = "adipisci";
                                policyTag = "fuga";
                            }}),
                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{
                                childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                }};
                                description = "suscipit";
                                displayName = "velit";
                                policyTag = "culpa";
                            }}),
                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{
                                childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                }};
                                description = "recusandae";
                                displayName = "totam";
                                policyTag = "fugiat";
                            }}),
                            add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{
                                childPolicyTags = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1SerializedPolicyTag[]{{
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                    add(new GoogleCloudDatacatalogV1SerializedPolicyTag() {{}}),
                                }};
                                description = "ducimus";
                                displayName = "quos";
                                policyTag = "vel";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "cum";
                key = "commodi";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "reiciendis";
                uploadProtocol = "assumenda";
            }};            

            DatacatalogProjectsLocationsTaxonomiesReplaceResponse res = sdk.projects.datacatalogProjectsLocationsTaxonomiesReplace(req, new DatacatalogProjectsLocationsTaxonomiesReplaceSecurity("nemo", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Taxonomy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
