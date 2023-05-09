# Projects

### Available Operations

* [DatacatalogProjectsLocationsEntryGroupsCreate](#datacatalogprojectslocationsentrygroupscreate) - Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [DatacatalogProjectsLocationsEntryGroupsEntriesCreate](#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
* [DatacatalogProjectsLocationsEntryGroupsEntriesImport](#datacatalogprojectslocationsentrygroupsentriesimport) - Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.
* [DatacatalogProjectsLocationsEntryGroupsEntriesList](#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
* [DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts](#datacatalogprojectslocationsentrygroupsentriesmodifyentrycontacts) - Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
* [DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview](#datacatalogprojectslocationsentrygroupsentriesmodifyentryoverview) - Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
* [DatacatalogProjectsLocationsEntryGroupsEntriesStar](#datacatalogprojectslocationsentrygroupsentriesstar) - Marks an Entry as starred by the current user. Starring information is private to each user.
* [DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile](#datacatalogprojectslocationsentrygroupsentriestagsreconcile) - `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.
* [DatacatalogProjectsLocationsEntryGroupsEntriesUnstar](#datacatalogprojectslocationsentrygroupsentriesunstar) - Marks an Entry as NOT starred by the current user. Starring information is private to each user.
* [DatacatalogProjectsLocationsEntryGroupsList](#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [DatacatalogProjectsLocationsEntryGroupsTagsCreate](#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
* [DatacatalogProjectsLocationsEntryGroupsTagsList](#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [DatacatalogProjectsLocationsOperationsCancel](#datacatalogprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatacatalogProjectsLocationsOperationsList](#datacatalogprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatacatalogProjectsLocationsTagTemplatesCreate](#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [DatacatalogProjectsLocationsTagTemplatesFieldsCreate](#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
* [DatacatalogProjectsLocationsTaxonomiesCreate](#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
* [DatacatalogProjectsLocationsTaxonomiesExport](#datacatalogprojectslocationstaxonomiesexport) - Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
* [DatacatalogProjectsLocationsTaxonomiesImport](#datacatalogprojectslocationstaxonomiesimport) - Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
* [DatacatalogProjectsLocationsTaxonomiesList](#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that you have a permission to view.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet](#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a policy tag or a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsList](#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag, including its display name, description, and parent policy tag.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a policy tag or a taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns your permissions on a specified policy tag or taxonomy.
* [DatacatalogProjectsLocationsTaxonomiesReplace](#datacatalogprojectslocationstaxonomiesreplace) - Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

## DatacatalogProjectsLocationsEntryGroupsCreate

Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1EntryGroupInput: &shared.GoogleCloudDatacatalogV1EntryGroupInput{
            DataCatalogTimestamps: &shared.GoogleCloudDatacatalogV1SystemTimestampsInput{
                CreateTime: sdk.String("aspernatur"),
                UpdateTime: sdk.String("perferendis"),
            },
            Description: sdk.String("ad"),
            DisplayName: sdk.String("natus"),
            Name: sdk.String("Sheryl Fadel"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        EntryGroupID: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("iure"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1EntryGroup != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1EntryInput: &shared.GoogleCloudDatacatalogV1EntryInput{
            BusinessContext: &shared.GoogleCloudDatacatalogV1BusinessContext{
                Contacts: &shared.GoogleCloudDatacatalogV1Contacts{
                    People: []shared.GoogleCloudDatacatalogV1ContactsPerson{
                        shared.GoogleCloudDatacatalogV1ContactsPerson{
                            Designation: sdk.String("mollitia"),
                            Email: sdk.String("Cecilia.Ebert@hotmail.com"),
                        },
                        shared.GoogleCloudDatacatalogV1ContactsPerson{
                            Designation: sdk.String("nobis"),
                            Email: sdk.String("Lenore57@gmail.com"),
                        },
                        shared.GoogleCloudDatacatalogV1ContactsPerson{
                            Designation: sdk.String("accusantium"),
                            Email: sdk.String("Lorenza.Yundt65@yahoo.com"),
                        },
                    },
                },
                EntryOverview: &shared.GoogleCloudDatacatalogV1EntryOverview{
                    Overview: sdk.String("dolorem"),
                },
            },
            CloudBigtableSystemSpec: &shared.GoogleCloudDatacatalogV1CloudBigtableSystemSpec{
                InstanceDisplayName: sdk.String("culpa"),
            },
            DataSource: &shared.GoogleCloudDatacatalogV1DataSourceInput{
                Resource: sdk.String("consequuntur"),
                Service: shared.GoogleCloudDatacatalogV1DataSourceServiceEnumBigquery.ToPointer(),
                StorageProperties: &shared.GoogleCloudDatacatalogV1StorageProperties{
                    FilePattern: []string{
                        "occaecati",
                        "numquam",
                        "commodi",
                    },
                    FileType: sdk.String("quam"),
                },
            },
            DataSourceConnectionSpec: &shared.GoogleCloudDatacatalogV1DataSourceConnectionSpec{
                BigqueryConnectionSpec: &shared.GoogleCloudDatacatalogV1BigQueryConnectionSpec{
                    CloudSQL: &shared.GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec{
                        Database: sdk.String("molestiae"),
                        InstanceID: sdk.String("velit"),
                        Type: shared.GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumPostgres.ToPointer(),
                    },
                    ConnectionType: shared.GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnumConnectionTypeUnspecified.ToPointer(),
                    HasCredential: sdk.Bool(false),
                },
            },
            DatabaseTableSpec: &shared.GoogleCloudDatacatalogV1DatabaseTableSpec{
                DatabaseViewSpec: &shared.GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec{
                    BaseTable: sdk.String("quis"),
                    SQLQuery: sdk.String("vitae"),
                    ViewType: shared.GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnumMaterializedView.ToPointer(),
                },
                DataplexTable: &shared.GoogleCloudDatacatalogV1DataplexTableSpec{
                    DataplexSpec: &shared.GoogleCloudDatacatalogV1DataplexSpec{
                        Asset: sdk.String("animi"),
                        CompressionFormat: sdk.String("enim"),
                        DataFormat: &shared.GoogleCloudDatacatalogV1PhysicalSchema{
                            Avro: &shared.GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema{
                                Text: sdk.String("odit"),
                            },
                            Csv: map[string]interface{}{
                                "sequi": "tenetur",
                                "ipsam": "id",
                                "possimus": "aut",
                                "quasi": "error",
                            },
                            Orc: map[string]interface{}{
                                "laborum": "quasi",
                                "reiciendis": "voluptatibus",
                                "vero": "nihil",
                                "praesentium": "voluptatibus",
                            },
                            Parquet: map[string]interface{}{
                                "omnis": "voluptate",
                            },
                            Protobuf: &shared.GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema{
                                Text: sdk.String("cum"),
                            },
                            Thrift: &shared.GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema{
                                Text: sdk.String("perferendis"),
                            },
                        },
                        ProjectID: sdk.String("doloremque"),
                    },
                    ExternalTables: []shared.GoogleCloudDatacatalogV1DataplexExternalTable{
                        shared.GoogleCloudDatacatalogV1DataplexExternalTable{
                            DataCatalogEntry: sdk.String("ut"),
                            FullyQualifiedName: sdk.String("maiores"),
                            GoogleCloudResource: sdk.String("dicta"),
                            System: shared.GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumDataprocMetastore.ToPointer(),
                        },
                        shared.GoogleCloudDatacatalogV1DataplexExternalTable{
                            DataCatalogEntry: sdk.String("dolore"),
                            FullyQualifiedName: sdk.String("iusto"),
                            GoogleCloudResource: sdk.String("dicta"),
                            System: shared.GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumCloudBigtable.ToPointer(),
                        },
                    },
                    UserManaged: sdk.Bool(false),
                },
                Type: shared.GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnumTableTypeUnspecified.ToPointer(),
            },
            Description: sdk.String("accusamus"),
            DisplayName: sdk.String("commodi"),
            FilesetSpec: &shared.GoogleCloudDatacatalogV1FilesetSpec{
                DataplexFileset: &shared.GoogleCloudDatacatalogV1DataplexFilesetSpec{
                    DataplexSpec: &shared.GoogleCloudDatacatalogV1DataplexSpec{
                        Asset: sdk.String("repudiandae"),
                        CompressionFormat: sdk.String("quae"),
                        DataFormat: &shared.GoogleCloudDatacatalogV1PhysicalSchema{
                            Avro: &shared.GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema{
                                Text: sdk.String("ipsum"),
                            },
                            Csv: map[string]interface{}{
                                "molestias": "excepturi",
                                "pariatur": "modi",
                                "praesentium": "rem",
                            },
                            Orc: map[string]interface{}{
                                "quasi": "repudiandae",
                                "sint": "veritatis",
                                "itaque": "incidunt",
                                "enim": "consequatur",
                            },
                            Parquet: map[string]interface{}{
                                "quibusdam": "explicabo",
                                "deserunt": "distinctio",
                                "quibusdam": "labore",
                            },
                            Protobuf: &shared.GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema{
                                Text: sdk.String("modi"),
                            },
                            Thrift: &shared.GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema{
                                Text: sdk.String("qui"),
                            },
                        },
                        ProjectID: sdk.String("aliquid"),
                    },
                },
            },
            FullyQualifiedName: sdk.String("cupiditate"),
            GcsFilesetSpec: &shared.GoogleCloudDatacatalogV1GcsFilesetSpecInput{
                FilePatterns: []string{
                    "perferendis",
                    "magni",
                    "assumenda",
                },
            },
            Labels: map[string]string{
                "alias": "fugit",
                "dolorum": "excepturi",
            },
            LinkedResource: sdk.String("tempora"),
            LookerSystemSpec: &shared.GoogleCloudDatacatalogV1LookerSystemSpec{
                ParentInstanceDisplayName: sdk.String("facilis"),
                ParentInstanceID: sdk.String("tempore"),
                ParentModelDisplayName: sdk.String("labore"),
                ParentModelID: sdk.String("delectus"),
                ParentViewDisplayName: sdk.String("eum"),
                ParentViewID: sdk.String("non"),
            },
            PersonalDetails: &shared.GoogleCloudDatacatalogV1PersonalDetails{
                StarTime: sdk.String("eligendi"),
                Starred: sdk.Bool(false),
            },
            RoutineSpec: &shared.GoogleCloudDatacatalogV1RoutineSpec{
                BigqueryRoutineSpec: &shared.GoogleCloudDatacatalogV1BigQueryRoutineSpec{
                    ImportedLibraries: []string{
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                },
                DefinitionBody: sdk.String("sint"),
                Language: sdk.String("officia"),
                ReturnType: sdk.String("dolor"),
                RoutineArguments: []shared.GoogleCloudDatacatalogV1RoutineSpecArgument{
                    shared.GoogleCloudDatacatalogV1RoutineSpecArgument{
                        Mode: shared.GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumInout.ToPointer(),
                        Name: sdk.String("Arnold Kirlin"),
                        Type: sdk.String("rerum"),
                    },
                    shared.GoogleCloudDatacatalogV1RoutineSpecArgument{
                        Mode: shared.GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumModeUnspecified.ToPointer(),
                        Name: sdk.String("Blanca Schulist"),
                        Type: sdk.String("laborum"),
                    },
                    shared.GoogleCloudDatacatalogV1RoutineSpecArgument{
                        Mode: shared.GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumInout.ToPointer(),
                        Name: sdk.String("Toni Haley"),
                        Type: sdk.String("quidem"),
                    },
                    shared.GoogleCloudDatacatalogV1RoutineSpecArgument{
                        Mode: shared.GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumOut.ToPointer(),
                        Name: sdk.String("Lynn Kuvalis"),
                        Type: sdk.String("amet"),
                    },
                },
                RoutineType: shared.GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumScalarFunction.ToPointer(),
            },
            Schema: &shared.GoogleCloudDatacatalogV1Schema{
                Columns: []shared.GoogleCloudDatacatalogV1ColumnSchema{
                    shared.GoogleCloudDatacatalogV1ColumnSchema{
                        Column: sdk.String("vel"),
                        DefaultValue: sdk.String("natus"),
                        Description: sdk.String("omnis"),
                        GcRule: sdk.String("molestiae"),
                        HighestIndexingType: shared.GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeUnspecified.ToPointer(),
                        LookerColumnSpec: &shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec{
                            Type: shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnumDimensionGroup.ToPointer(),
                        },
                        Mode: sdk.String("magnam"),
                        OrdinalPosition: sdk.Int(716075),
                        Subcolumns: []shared.GoogleCloudDatacatalogV1ColumnSchema{
                            shared.GoogleCloudDatacatalogV1ColumnSchema{},
                            shared.GoogleCloudDatacatalogV1ColumnSchema{},
                            shared.GoogleCloudDatacatalogV1ColumnSchema{},
                        },
                        Type: sdk.String("labore"),
                    },
                    shared.GoogleCloudDatacatalogV1ColumnSchema{
                        Column: sdk.String("labore"),
                        DefaultValue: sdk.String("suscipit"),
                        Description: sdk.String("natus"),
                        GcRule: sdk.String("nobis"),
                        HighestIndexingType: shared.GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnumIndexingTypeNonUnique.ToPointer(),
                        LookerColumnSpec: &shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec{
                            Type: shared.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnumParameter.ToPointer(),
                        },
                        Mode: sdk.String("aspernatur"),
                        OrdinalPosition: sdk.Int(102863),
                        Subcolumns: []shared.GoogleCloudDatacatalogV1ColumnSchema{
                            shared.GoogleCloudDatacatalogV1ColumnSchema{},
                            shared.GoogleCloudDatacatalogV1ColumnSchema{},
                        },
                        Type: sdk.String("et"),
                    },
                },
            },
            ServiceSpec: &shared.GoogleCloudDatacatalogV1ServiceSpec{
                CloudBigtableInstanceSpec: &shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpec{
                    CloudBigtableClusterSpecs: []shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec{
                        shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec{
                            DisplayName: sdk.String("ullam"),
                            LinkedResource: sdk.String("provident"),
                            Location: sdk.String("quos"),
                            Type: sdk.String("sint"),
                        },
                        shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec{
                            DisplayName: sdk.String("accusantium"),
                            LinkedResource: sdk.String("mollitia"),
                            Location: sdk.String("reiciendis"),
                            Type: sdk.String("mollitia"),
                        },
                        shared.GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec{
                            DisplayName: sdk.String("ad"),
                            LinkedResource: sdk.String("eum"),
                            Location: sdk.String("dolor"),
                            Type: sdk.String("necessitatibus"),
                        },
                    },
                },
            },
            SourceSystemTimestamps: &shared.GoogleCloudDatacatalogV1SystemTimestampsInput{
                CreateTime: sdk.String("odit"),
                UpdateTime: sdk.String("nemo"),
            },
            SQLDatabaseSystemSpec: &shared.GoogleCloudDatacatalogV1SQLDatabaseSystemSpec{
                DatabaseVersion: sdk.String("quasi"),
                InstanceHost: sdk.String("iure"),
                SQLEngine: sdk.String("doloribus"),
            },
            Type: shared.GoogleCloudDatacatalogV1EntryTypeEnumExplore.ToPointer(),
            UsageSignal: &shared.GoogleCloudDatacatalogV1UsageSignalInput{
                CommonUsageWithinTimeRange: map[string]shared.GoogleCloudDatacatalogV1CommonUsageStats{
                    "maxime": shared.GoogleCloudDatacatalogV1CommonUsageStats{
                        ViewCount: sdk.String("deleniti"),
                    },
                    "facilis": shared.GoogleCloudDatacatalogV1CommonUsageStats{
                        ViewCount: sdk.String("in"),
                    },
                },
                FavoriteCount: sdk.String("architecto"),
                UpdateTime: sdk.String("architecto"),
            },
            UserSpecifiedSystem: sdk.String("repudiandae"),
            UserSpecifiedType: sdk.String("ullam"),
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        EntryID: sdk.String("quibusdam"),
        Fields: sdk.String("sed"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Entry != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesImport

Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesImport(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1ImportEntriesRequest: &shared.GoogleCloudDatacatalogV1ImportEntriesRequest{
            GcsBucketPath: sdk.String("sunt"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        PageSize: sdk.Int64(866383),
        PageToken: sdk.String("nemo"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        ReadMask: sdk.String("fugiat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ListEntriesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts

Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1ModifyEntryContactsRequest: &shared.GoogleCloudDatacatalogV1ModifyEntryContactsRequest{
            Contacts: &shared.GoogleCloudDatacatalogV1Contacts{
                People: []shared.GoogleCloudDatacatalogV1ContactsPerson{
                    shared.GoogleCloudDatacatalogV1ContactsPerson{
                        Designation: sdk.String("hic"),
                        Email: sdk.String("Nelson_DAmore@hotmail.com"),
                    },
                    shared.GoogleCloudDatacatalogV1ContactsPerson{
                        Designation: sdk.String("dignissimos"),
                        Email: sdk.String("Eulah1@gmail.com"),
                    },
                },
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("vero"),
        Name: "Mindy Walter",
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Contacts != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview

Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1ModifyEntryOverviewRequest: &shared.GoogleCloudDatacatalogV1ModifyEntryOverviewRequest{
            EntryOverview: &shared.GoogleCloudDatacatalogV1EntryOverview{
                Overview: sdk.String("error"),
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("asperiores"),
        Name: "Edwin Morar",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1EntryOverview != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesStar

Marks an Entry as starred by the current user. Starring information is private to each user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesStar(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quos": "aliquid",
            "dolorem": "dolorem",
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("excepturi"),
        Name: "Adrian Kuhn",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1StarEntryResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile

`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1ReconcileTagsRequestInput: &shared.GoogleCloudDatacatalogV1ReconcileTagsRequestInput{
            ForceDeleteMissing: sdk.Bool(false),
            TagTemplate: sdk.String("iure"),
            Tags: []shared.GoogleCloudDatacatalogV1TagInput{
                shared.GoogleCloudDatacatalogV1TagInput{
                    Column: sdk.String("quaerat"),
                    Fields: map[string]shared.GoogleCloudDatacatalogV1TagFieldInput{
                        "quidem": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(9764.05),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("voluptas"),
                            },
                            RichtextValue: sdk.String("natus"),
                            StringValue: sdk.String("eos"),
                            TimestampValue: sdk.String("atque"),
                        },
                        "sit": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8546.14),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("ab"),
                            },
                            RichtextValue: sdk.String("soluta"),
                            StringValue: sdk.String("dolorum"),
                            TimestampValue: sdk.String("iusto"),
                        },
                        "voluptate": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6770.82),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("deleniti"),
                            },
                            RichtextValue: sdk.String("omnis"),
                            StringValue: sdk.String("necessitatibus"),
                            TimestampValue: sdk.String("distinctio"),
                        },
                        "asperiores": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4694.97),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("ipsum"),
                            },
                            RichtextValue: sdk.String("voluptate"),
                            StringValue: sdk.String("id"),
                            TimestampValue: sdk.String("saepe"),
                        },
                    },
                    Name: sdk.String("Judy Aufderhar"),
                    Template: sdk.String("accusamus"),
                },
                shared.GoogleCloudDatacatalogV1TagInput{
                    Column: sdk.String("ad"),
                    Fields: map[string]shared.GoogleCloudDatacatalogV1TagFieldInput{
                        "suscipit": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6457.85),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("provident"),
                            },
                            RichtextValue: sdk.String("minima"),
                            StringValue: sdk.String("repellendus"),
                            TimestampValue: sdk.String("totam"),
                        },
                        "similique": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(0.55),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("at"),
                            },
                            RichtextValue: sdk.String("quaerat"),
                            StringValue: sdk.String("tempora"),
                            TimestampValue: sdk.String("vel"),
                        },
                        "quod": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8853.38),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("qui"),
                            },
                            RichtextValue: sdk.String("dolorum"),
                            StringValue: sdk.String("a"),
                            TimestampValue: sdk.String("esse"),
                        },
                        "harum": shared.GoogleCloudDatacatalogV1TagFieldInput{
                            BoolValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4834.09),
                            EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                                DisplayName: sdk.String("ipsum"),
                            },
                            RichtextValue: sdk.String("quisquam"),
                            StringValue: sdk.String("tenetur"),
                            TimestampValue: sdk.String("amet"),
                        },
                    },
                    Name: sdk.String("Tomas Funk"),
                    Template: sdk.String("sapiente"),
                },
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("sed"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsEntriesUnstar

Marks an Entry as NOT starred by the current user. Starring information is private to each user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsEntriesUnstar(ctx, operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "incidunt": "qui",
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dicta"),
        Name: "Felix Gorczany",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("quam"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1UnstarEntryResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsList

Lists entry groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("odio"),
        PageSize: sdk.Int64(124833),
        PageToken: sdk.String("ullam"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ListEntryGroupsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsTagsCreate(ctx, operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1TagInput: &shared.GoogleCloudDatacatalogV1TagInput{
            Column: sdk.String("nobis"),
            Fields: map[string]shared.GoogleCloudDatacatalogV1TagFieldInput{
                "saepe": shared.GoogleCloudDatacatalogV1TagFieldInput{
                    BoolValue: sdk.Bool(false),
                    DoubleValue: sdk.Float64(2174.5),
                    EnumValue: &shared.GoogleCloudDatacatalogV1TagFieldEnumValue{
                        DisplayName: sdk.String("veritatis"),
                    },
                    RichtextValue: sdk.String("nobis"),
                    StringValue: sdk.String("quos"),
                    TimestampValue: sdk.String("tempore"),
                },
            },
            Name: sdk.String("Kevin Willms"),
            Template: sdk.String("labore"),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("quae"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quas"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Tag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsEntryGroupsTagsList

Lists tags assigned to an Entry. The columns in the response are lowercased.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsEntryGroupsTagsList(ctx, operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("quae"),
        PageSize: sdk.Int64(512393),
        PageToken: sdk.String("odio"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DatacatalogProjectsLocationsEntryGroupsTagsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ListTagsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsOperationsCancel(ctx, operations.DatacatalogProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        Name: "Roman Kulas",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.DatacatalogProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsOperationsList(ctx, operations.DatacatalogProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Filter: sdk.String("sequi"),
        Key: sdk.String("natus"),
        Name: "Richard Wiza",
        OauthToken: sdk.String("fugit"),
        PageSize: sdk.Int64(780427),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DatacatalogProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesCreate(ctx, operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1TagTemplateInput: &shared.GoogleCloudDatacatalogV1TagTemplateInput{
            DisplayName: sdk.String("alias"),
            Fields: map[string]shared.GoogleCloudDatacatalogV1TagTemplateFieldInput{
                "tempora": shared.GoogleCloudDatacatalogV1TagTemplateFieldInput{
                    Description: sdk.String("ipsam"),
                    DisplayName: sdk.String("ea"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(136900),
                    Type: &shared.GoogleCloudDatacatalogV1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("possimus"),
                                },
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("magnam"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumDouble.ToPointer(),
                    },
                },
                "ex": shared.GoogleCloudDatacatalogV1TagTemplateFieldInput{
                    Description: sdk.String("laudantium"),
                    DisplayName: sdk.String("dicta"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(224317),
                    Type: &shared.GoogleCloudDatacatalogV1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("quasi"),
                                },
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("ex"),
                                },
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("nulla"),
                                },
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("excepturi"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumRichtext.ToPointer(),
                    },
                },
                "nostrum": shared.GoogleCloudDatacatalogV1TagTemplateFieldInput{
                    Description: sdk.String("sapiente"),
                    DisplayName: sdk.String("quisquam"),
                    IsRequired: sdk.Bool(false),
                    Order: sdk.Int(906556),
                    Type: &shared.GoogleCloudDatacatalogV1FieldType{
                        EnumType: &shared.GoogleCloudDatacatalogV1FieldTypeEnumType{
                            AllowedValues: []shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("impedit"),
                                },
                                shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                                    DisplayName: sdk.String("corporis"),
                                },
                            },
                        },
                        PrimitiveType: shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumDouble.ToPointer(),
                    },
                },
            },
            IsPubliclyReadable: sdk.Bool(false),
            Name: sdk.String("Stephanie Gutkowski"),
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("minima"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("a"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        TagTemplateID: sdk.String("aut"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1TagTemplate != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesFieldsCreate(ctx, operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1TagTemplateFieldInput: &shared.GoogleCloudDatacatalogV1TagTemplateFieldInput{
            Description: sdk.String("fugit"),
            DisplayName: sdk.String("accusamus"),
            IsRequired: sdk.Bool(false),
            Order: sdk.Int(79522),
            Type: &shared.GoogleCloudDatacatalogV1FieldType{
                EnumType: &shared.GoogleCloudDatacatalogV1FieldTypeEnumType{
                    AllowedValues: []shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                        shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("et"),
                        },
                        shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue{
                            DisplayName: sdk.String("dolorum"),
                        },
                    },
                },
                PrimitiveType: shared.GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumTimestamp.ToPointer(),
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quas"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        TagTemplateFieldID: sdk.String("voluptas"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1TagTemplateField != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. Within a single enum field, enum values must be unique.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(ctx, operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest: &shared.GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest{
            NewEnumValueDisplayName: sdk.String("numquam"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("magnam"),
        Name: "Esther Koch",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1TagTemplateField != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesCreate(ctx, operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1TaxonomyInput: &shared.GoogleCloudDatacatalogV1TaxonomyInput{
            ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum{
                shared.GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                shared.GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
            },
            Description: sdk.String("eos"),
            DisplayName: sdk.String("praesentium"),
            Service: &shared.GoogleCloudDatacatalogV1TaxonomyService{
                Identity: sdk.String("quisquam"),
                Name: shared.GoogleCloudDatacatalogV1TaxonomyServiceNameEnumManagingSystemUnspecified.ToPointer(),
            },
            TaxonomyTimestamps: &shared.GoogleCloudDatacatalogV1SystemTimestampsInput{
                CreateTime: sdk.String("ipsa"),
                UpdateTime: sdk.String("id"),
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("illum"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("fuga"),
        Parent: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Taxonomy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesExport

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesExport(ctx, operations.DatacatalogProjectsLocationsTaxonomiesExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("sequi"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        SerializedTaxonomies: sdk.Bool(false),
        Taxonomies: []string{
            "aperiam",
            "distinctio",
            "quod",
            "dignissimos",
        },
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesExportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ExportTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesImport

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesImport(ctx, operations.DatacatalogProjectsLocationsTaxonomiesImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1ImportTaxonomiesRequest: &shared.GoogleCloudDatacatalogV1ImportTaxonomiesRequest{
            CrossRegionalSource: &shared.GoogleCloudDatacatalogV1CrossRegionalSource{
                Taxonomy: sdk.String("accusamus"),
            },
            InlineSource: &shared.GoogleCloudDatacatalogV1InlineSource{
                Taxonomies: []shared.GoogleCloudDatacatalogV1SerializedTaxonomy{
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                            shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                        },
                        Description: sdk.String("sapiente"),
                        DisplayName: sdk.String("dolores"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                },
                                Description: sdk.String("accusantium"),
                                DisplayName: sdk.String("porro"),
                                PolicyTag: sdk.String("eum"),
                            },
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                },
                                Description: sdk.String("praesentium"),
                                DisplayName: sdk.String("consequuntur"),
                                PolicyTag: sdk.String("deleniti"),
                            },
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                },
                                Description: sdk.String("fuga"),
                                DisplayName: sdk.String("mollitia"),
                                PolicyTag: sdk.String("incidunt"),
                            },
                        },
                    },
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomy{
                        ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum{
                            shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                            shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                            shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                        },
                        Description: sdk.String("fugit"),
                        DisplayName: sdk.String("sapiente"),
                        PolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                                },
                                Description: sdk.String("explicabo"),
                                DisplayName: sdk.String("saepe"),
                                PolicyTag: sdk.String("occaecati"),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("veritatis"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ImportTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that you have a permission to view.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesList(ctx, operations.DatacatalogProjectsLocationsTaxonomiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("harum"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(327720),
        PageToken: sdk.String("distinctio"),
        Parent: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ListTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in a taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1PolicyTagInput: &shared.GoogleCloudDatacatalogV1PolicyTagInput{
            Description: sdk.String("cumque"),
            DisplayName: sdk.String("consequuntur"),
            ParentPolicyTag: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("blanditiis"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("sint"),
        Force: sdk.Bool(false),
        Key: sdk.String("pariatur"),
        Name: "Howard Upton",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("similique"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet

Gets a policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGet(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("earum"),
        Key: sdk.String("vel"),
        Name: "Charlotte Rempel",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        ReadMask: sdk.String("sapiente"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(356707),
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("qui"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        Resource: "itaque",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsList

Lists all policy tags in a taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsList(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("et"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("ipsa"),
        PageSize: sdk.Int64(326701),
        PageToken: sdk.String("veritatis"),
        Parent: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1ListPolicyTagsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag, including its display name, description, and parent policy tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1PolicyTagInput: &shared.GoogleCloudDatacatalogV1PolicyTagInput{
            Description: sdk.String("rem"),
            DisplayName: sdk.String("aut"),
            ParentPolicyTag: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("non"),
        Name: "Carmen McClure",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UpdateMask: sdk.String("aut"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1PolicyTag != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("velit"),
                            Expression: sdk.String("voluptatibus"),
                            Location: sdk.String("voluptas"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "ea",
                        },
                        Role: sdk.String("quaerat"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("consequuntur"),
                            Expression: sdk.String("repellendus"),
                            Location: sdk.String("officia"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "officia",
                            "asperiores",
                        },
                        Role: sdk.String("nemo"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quae"),
                            Expression: sdk.String("quaerat"),
                            Location: sdk.String("porro"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "ab",
                            "adipisci",
                        },
                        Role: sdk.String("fuga"),
                    },
                },
                Etag: sdk.String("id"),
                Version: sdk.Int(380729),
            },
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        Resource: "ducimus",
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("vel"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions

Returns your permissions on a specified policy tag or taxonomy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(ctx, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "facilis",
                "cum",
                "commodi",
                "in",
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        Resource: "cum",
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("in"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DatacatalogProjectsLocationsTaxonomiesReplace

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatacatalogProjectsLocationsTaxonomiesReplace(ctx, operations.DatacatalogProjectsLocationsTaxonomiesReplaceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1ReplaceTaxonomyRequest: &shared.GoogleCloudDatacatalogV1ReplaceTaxonomyRequest{
            SerializedTaxonomy: &shared.GoogleCloudDatacatalogV1SerializedTaxonomy{
                ActivatedPolicyTypes: []shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum{
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl,
                    shared.GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified,
                },
                Description: sdk.String("reiciendis"),
                DisplayName: sdk.String("quidem"),
                PolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                        ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                        },
                        Description: sdk.String("dolore"),
                        DisplayName: sdk.String("sunt"),
                        PolicyTag: sdk.String("asperiores"),
                    },
                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                        ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                        },
                        Description: sdk.String("non"),
                        DisplayName: sdk.String("amet"),
                        PolicyTag: sdk.String("beatae"),
                    },
                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                        ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                        },
                        Description: sdk.String("a"),
                        DisplayName: sdk.String("debitis"),
                        PolicyTag: sdk.String("consectetur"),
                    },
                    shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                        ChildPolicyTags: []shared.GoogleCloudDatacatalogV1SerializedPolicyTag{
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                            shared.GoogleCloudDatacatalogV1SerializedPolicyTag{},
                        },
                        Description: sdk.String("harum"),
                        DisplayName: sdk.String("laboriosam"),
                        PolicyTag: sdk.String("ipsa"),
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("similique"),
        Name: "Kelly Hoeger",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.DatacatalogProjectsLocationsTaxonomiesReplaceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Taxonomy != nil {
        // handle response
    }
}
```
