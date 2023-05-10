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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1EntryGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1EntryGroupInput = new GoogleCloudDatacatalogV1EntryGroupInput();
    $request->googleCloudDatacatalogV1EntryGroupInput->dataCatalogTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1EntryGroupInput->dataCatalogTimestamps->createTime = 'aspernatur';
    $request->googleCloudDatacatalogV1EntryGroupInput->dataCatalogTimestamps->updateTime = 'perferendis';
    $request->googleCloudDatacatalogV1EntryGroupInput->description = 'ad';
    $request->googleCloudDatacatalogV1EntryGroupInput->displayName = 'natus';
    $request->googleCloudDatacatalogV1EntryGroupInput->name = 'Sheryl Fadel';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->entryGroupId = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->oauthToken = 'iure';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1EntryGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1EntryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1BusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1Contacts;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ContactsPerson;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1EntryOverview;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CloudBigtableSystemSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataSourceServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1StorageProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataSourceConnectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1BigQueryConnectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DatabaseTableSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataplexTableSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataplexSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PhysicalSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataplexExternalTable;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FilesetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1DataplexFilesetSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1GcsFilesetSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1LookerSystemSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PersonalDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1RoutineSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1BigQueryRoutineSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1RoutineSpecArgument;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1Schema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ColumnSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ColumnSchemaHighestIndexingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ServiceSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CloudBigtableInstanceSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1EntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1UsageSignalInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CommonUsageStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1EntryInput = new GoogleCloudDatacatalogV1EntryInput();
    $request->googleCloudDatacatalogV1EntryInput->businessContext = new GoogleCloudDatacatalogV1BusinessContext();
    $request->googleCloudDatacatalogV1EntryInput->businessContext->contacts = new GoogleCloudDatacatalogV1Contacts();
    $request->googleCloudDatacatalogV1EntryInput->businessContext->contacts->people = [
        new GoogleCloudDatacatalogV1ContactsPerson(),
        new GoogleCloudDatacatalogV1ContactsPerson(),
        new GoogleCloudDatacatalogV1ContactsPerson(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->businessContext->entryOverview = new GoogleCloudDatacatalogV1EntryOverview();
    $request->googleCloudDatacatalogV1EntryInput->businessContext->entryOverview->overview = 'mollitia';
    $request->googleCloudDatacatalogV1EntryInput->cloudBigtableSystemSpec = new GoogleCloudDatacatalogV1CloudBigtableSystemSpec();
    $request->googleCloudDatacatalogV1EntryInput->cloudBigtableSystemSpec->instanceDisplayName = 'laborum';
    $request->googleCloudDatacatalogV1EntryInput->dataSource = new GoogleCloudDatacatalogV1DataSourceInput();
    $request->googleCloudDatacatalogV1EntryInput->dataSource->resource = 'dolores';
    $request->googleCloudDatacatalogV1EntryInput->dataSource->service = GoogleCloudDatacatalogV1DataSourceServiceEnum::SERVICE_UNSPECIFIED;
    $request->googleCloudDatacatalogV1EntryInput->dataSource->storageProperties = new GoogleCloudDatacatalogV1StorageProperties();
    $request->googleCloudDatacatalogV1EntryInput->dataSource->storageProperties->filePattern = [
        'explicabo',
        'nobis',
    ];
    $request->googleCloudDatacatalogV1EntryInput->dataSource->storageProperties->fileType = 'enim';
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec = new GoogleCloudDatacatalogV1DataSourceConnectionSpec();
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec = new GoogleCloudDatacatalogV1BigQueryConnectionSpec();
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->cloudSql = new GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec();
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->cloudSql->database = 'omnis';
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->cloudSql->instanceId = 'nemo';
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->cloudSql->type = GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum::DATABASE_TYPE_UNSPECIFIED;
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->connectionType = GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum::CLOUD_SQL;
    $request->googleCloudDatacatalogV1EntryInput->dataSourceConnectionSpec->bigqueryConnectionSpec->hasCredential = false;
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec = new GoogleCloudDatacatalogV1DatabaseTableSpec();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->databaseViewSpec = new GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->databaseViewSpec->baseTable = 'accusantium';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->databaseViewSpec->sqlQuery = 'iure';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->databaseViewSpec->viewType = GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpecViewTypeEnum::STANDARD_VIEW;
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable = new GoogleCloudDatacatalogV1DataplexTableSpec();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec = new GoogleCloudDatacatalogV1DataplexSpec();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->asset = 'doloribus';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->compressionFormat = 'sapiente';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat = new GoogleCloudDatacatalogV1PhysicalSchema();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->avro = new GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->avro->text = 'architecto';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->csv = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->orc = [
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->parquet = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->protobuf = new GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->protobuf->text = 'odit';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->thrift = new GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema();
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->dataFormat->thrift->text = 'quo';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->dataplexSpec->projectId = 'sequi';
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->externalTables = [
        new GoogleCloudDatacatalogV1DataplexExternalTable(),
        new GoogleCloudDatacatalogV1DataplexExternalTable(),
        new GoogleCloudDatacatalogV1DataplexExternalTable(),
        new GoogleCloudDatacatalogV1DataplexExternalTable(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->dataplexTable->userManaged = false;
    $request->googleCloudDatacatalogV1EntryInput->databaseTableSpec->type = GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum::NATIVE;
    $request->googleCloudDatacatalogV1EntryInput->description = 'id';
    $request->googleCloudDatacatalogV1EntryInput->displayName = 'possimus';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec = new GoogleCloudDatacatalogV1FilesetSpec();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset = new GoogleCloudDatacatalogV1DataplexFilesetSpec();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec = new GoogleCloudDatacatalogV1DataplexSpec();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->asset = 'aut';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->compressionFormat = 'quasi';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat = new GoogleCloudDatacatalogV1PhysicalSchema();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->avro = new GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->avro->text = 'error';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->csv = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->orc = [
        'omnis' => 'voluptate',
    ];
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->parquet = [
        'perferendis' => 'doloremque',
        'reprehenderit' => 'ut',
        'maiores' => 'dicta',
    ];
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->protobuf = new GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->protobuf->text = 'corporis';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->thrift = new GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema();
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->dataFormat->thrift->text = 'dolore';
    $request->googleCloudDatacatalogV1EntryInput->filesetSpec->dataplexFileset->dataplexSpec->projectId = 'iusto';
    $request->googleCloudDatacatalogV1EntryInput->fullyQualifiedName = 'dicta';
    $request->googleCloudDatacatalogV1EntryInput->gcsFilesetSpec = new GoogleCloudDatacatalogV1GcsFilesetSpecInput();
    $request->googleCloudDatacatalogV1EntryInput->gcsFilesetSpec->filePatterns = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->googleCloudDatacatalogV1EntryInput->labels = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->googleCloudDatacatalogV1EntryInput->linkedResource = 'rem';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec = new GoogleCloudDatacatalogV1LookerSystemSpec();
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentInstanceDisplayName = 'voluptates';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentInstanceId = 'quasi';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentModelDisplayName = 'repudiandae';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentModelId = 'sint';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentViewDisplayName = 'veritatis';
    $request->googleCloudDatacatalogV1EntryInput->lookerSystemSpec->parentViewId = 'itaque';
    $request->googleCloudDatacatalogV1EntryInput->personalDetails = new GoogleCloudDatacatalogV1PersonalDetails();
    $request->googleCloudDatacatalogV1EntryInput->personalDetails->starTime = 'incidunt';
    $request->googleCloudDatacatalogV1EntryInput->personalDetails->starred = false;
    $request->googleCloudDatacatalogV1EntryInput->routineSpec = new GoogleCloudDatacatalogV1RoutineSpec();
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->bigqueryRoutineSpec = new GoogleCloudDatacatalogV1BigQueryRoutineSpec();
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->bigqueryRoutineSpec->importedLibraries = [
        'consequatur',
        'est',
    ];
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->definitionBody = 'quibusdam';
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->language = 'explicabo';
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->returnType = 'deserunt';
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->routineArguments = [
        new GoogleCloudDatacatalogV1RoutineSpecArgument(),
        new GoogleCloudDatacatalogV1RoutineSpecArgument(),
        new GoogleCloudDatacatalogV1RoutineSpecArgument(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->routineSpec->routineType = GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum::PROCEDURE;
    $request->googleCloudDatacatalogV1EntryInput->schema = new GoogleCloudDatacatalogV1Schema();
    $request->googleCloudDatacatalogV1EntryInput->schema->columns = [
        new GoogleCloudDatacatalogV1ColumnSchema(),
        new GoogleCloudDatacatalogV1ColumnSchema(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->serviceSpec = new GoogleCloudDatacatalogV1ServiceSpec();
    $request->googleCloudDatacatalogV1EntryInput->serviceSpec->cloudBigtableInstanceSpec = new GoogleCloudDatacatalogV1CloudBigtableInstanceSpec();
    $request->googleCloudDatacatalogV1EntryInput->serviceSpec->cloudBigtableInstanceSpec->cloudBigtableClusterSpecs = [
        new GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec(),
        new GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->sourceSystemTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1EntryInput->sourceSystemTimestamps->createTime = 'qui';
    $request->googleCloudDatacatalogV1EntryInput->sourceSystemTimestamps->updateTime = 'aliquid';
    $request->googleCloudDatacatalogV1EntryInput->sqlDatabaseSystemSpec = new GoogleCloudDatacatalogV1SqlDatabaseSystemSpec();
    $request->googleCloudDatacatalogV1EntryInput->sqlDatabaseSystemSpec->databaseVersion = 'cupiditate';
    $request->googleCloudDatacatalogV1EntryInput->sqlDatabaseSystemSpec->instanceHost = 'quos';
    $request->googleCloudDatacatalogV1EntryInput->sqlDatabaseSystemSpec->sqlEngine = 'perferendis';
    $request->googleCloudDatacatalogV1EntryInput->type = GoogleCloudDatacatalogV1EntryTypeEnum::MODEL;
    $request->googleCloudDatacatalogV1EntryInput->usageSignal = new GoogleCloudDatacatalogV1UsageSignalInput();
    $request->googleCloudDatacatalogV1EntryInput->usageSignal->commonUsageWithinTimeRange = [
        'ipsam' => new GoogleCloudDatacatalogV1CommonUsageStats(),
        'alias' => new GoogleCloudDatacatalogV1CommonUsageStats(),
        'fugit' => new GoogleCloudDatacatalogV1CommonUsageStats(),
        'dolorum' => new GoogleCloudDatacatalogV1CommonUsageStats(),
    ];
    $request->googleCloudDatacatalogV1EntryInput->usageSignal->favoriteCount = 'excepturi';
    $request->googleCloudDatacatalogV1EntryInput->usageSignal->updateTime = 'tempora';
    $request->googleCloudDatacatalogV1EntryInput->userSpecifiedSystem = 'facilis';
    $request->googleCloudDatacatalogV1EntryInput->userSpecifiedType = 'tempore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->entryId = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Entry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesImport

Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ImportEntriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1ImportEntriesRequest = new GoogleCloudDatacatalogV1ImportEntriesRequest();
    $request->googleCloudDatacatalogV1ImportEntriesRequest->gcsBucketPath = 'debitis';
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 313218;
    $request->pageToken = 'accusamus';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->readMask = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ListEntriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts

Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ModifyEntryContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1Contacts;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ContactsPerson;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1ModifyEntryContactsRequest = new GoogleCloudDatacatalogV1ModifyEntryContactsRequest();
    $request->googleCloudDatacatalogV1ModifyEntryContactsRequest->contacts = new GoogleCloudDatacatalogV1Contacts();
    $request->googleCloudDatacatalogV1ModifyEntryContactsRequest->contacts->people = [
        new GoogleCloudDatacatalogV1ContactsPerson(),
        new GoogleCloudDatacatalogV1ContactsPerson(),
        new GoogleCloudDatacatalogV1ContactsPerson(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->name = 'Ms. Arturo Krajcik';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Contacts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview

Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ModifyEntryOverviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1EntryOverview;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1ModifyEntryOverviewRequest = new GoogleCloudDatacatalogV1ModifyEntryOverviewRequest();
    $request->googleCloudDatacatalogV1ModifyEntryOverviewRequest->entryOverview = new GoogleCloudDatacatalogV1EntryOverview();
    $request->googleCloudDatacatalogV1ModifyEntryOverviewRequest->entryOverview->overview = 'natus';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'aspernatur';
    $request->key = 'architecto';
    $request->name = 'Frances Marks';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1EntryOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesStar

Marks an Entry as starred by the current user. Starring information is private to each user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesStar($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1StarEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile

`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ReconcileTagsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagFieldEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1ReconcileTagsRequestInput = new GoogleCloudDatacatalogV1ReconcileTagsRequestInput();
    $request->googleCloudDatacatalogV1ReconcileTagsRequestInput->forceDeleteMissing = false;
    $request->googleCloudDatacatalogV1ReconcileTagsRequestInput->tagTemplate = 'quibusdam';
    $request->googleCloudDatacatalogV1ReconcileTagsRequestInput->tags = [
        new GoogleCloudDatacatalogV1TagInput(),
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'consequuntur';
    $request->key = 'praesentium';
    $request->oauthToken = 'natus';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesTagsReconcileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesUnstar

Marks an Entry as NOT starred by the current user. Starring information is private to each user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->name = 'Dr. Herman Wolf';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesUnstar($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1UnstarEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsList

Lists entry groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->pageSize = 338985;
    $request->pageToken = 'nesciunt';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ListEntryGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagFieldEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1TagInput = new GoogleCloudDatacatalogV1TagInput();
    $request->googleCloudDatacatalogV1TagInput->column = 'dolor';
    $request->googleCloudDatacatalogV1TagInput->fields = [
        'nostrum' => new GoogleCloudDatacatalogV1TagFieldInput(),
        'hic' => new GoogleCloudDatacatalogV1TagFieldInput(),
        'recusandae' => new GoogleCloudDatacatalogV1TagFieldInput(),
        'omnis' => new GoogleCloudDatacatalogV1TagFieldInput(),
    ];
    $request->googleCloudDatacatalogV1TagInput->name = 'Freddie Bartoletti';
    $request->googleCloudDatacatalogV1TagInput->template = 'blanditiis';
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->parent = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsTagsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsTagsList

Lists tags assigned to an Entry. The columns in the response are lowercased.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsTagsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'libero';
    $request->key = 'delectus';
    $request->oauthToken = 'quaerat';
    $request->pageSize = 554242;
    $request->pageToken = 'aliquid';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsTagsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsTagsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ListTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->name = 'Allen Parisian Jr.';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DatacatalogProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->filter = 'eos';
    $request->key = 'atque';
    $request->name = 'Ginger Bergstrom';
    $request->oauthToken = 'iusto';
    $request->pageSize = 453697;
    $request->pageToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new DatacatalogProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagTemplateFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypeEnumType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1TagTemplateInput = new GoogleCloudDatacatalogV1TagTemplateInput();
    $request->googleCloudDatacatalogV1TagTemplateInput->displayName = 'asperiores';
    $request->googleCloudDatacatalogV1TagTemplateInput->fields = [
        'ipsum' => new GoogleCloudDatacatalogV1TagTemplateFieldInput(),
        'voluptate' => new GoogleCloudDatacatalogV1TagTemplateFieldInput(),
    ];
    $request->googleCloudDatacatalogV1TagTemplateInput->isPubliclyReadable = false;
    $request->googleCloudDatacatalogV1TagTemplateInput->name = 'Elbert Gislason I';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->tagTemplateId = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1TagTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TagTemplateFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypeEnumType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1TagTemplateFieldInput = new GoogleCloudDatacatalogV1TagTemplateFieldInput();
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->description = 'at';
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->displayName = 'quaerat';
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->isRequired = false;
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->order = 273542;
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->type = new GoogleCloudDatacatalogV1FieldType();
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->type->enumType = new GoogleCloudDatacatalogV1FieldTypeEnumType();
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->type->enumType->allowedValues = [
        new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue(),
        new GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue(),
    ];
    $request->googleCloudDatacatalogV1TagTemplateFieldInput->type->primitiveType = GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum::TIMESTAMP;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->oauthToken = 'harum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->tagTemplateFieldId = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesFieldsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1TagTemplateField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. Within a single enum field, enum values must be unique.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest = new GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest();
    $request->googleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest->newEnumValueDisplayName = 'accusamus';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->name = 'Karen Rath';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1TagTemplateField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TaxonomyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TaxonomyService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1TaxonomyServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1TaxonomyInput = new GoogleCloudDatacatalogV1TaxonomyInput();
    $request->googleCloudDatacatalogV1TaxonomyInput->activatedPolicyTypes = [
        GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum::POLICY_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudDatacatalogV1TaxonomyInput->description = 'qui';
    $request->googleCloudDatacatalogV1TaxonomyInput->displayName = 'cupiditate';
    $request->googleCloudDatacatalogV1TaxonomyInput->service = new GoogleCloudDatacatalogV1TaxonomyService();
    $request->googleCloudDatacatalogV1TaxonomyInput->service->identity = 'maxime';
    $request->googleCloudDatacatalogV1TaxonomyInput->service->name = GoogleCloudDatacatalogV1TaxonomyServiceNameEnum::MANAGING_SYSTEM_OTHER;
    $request->googleCloudDatacatalogV1TaxonomyInput->taxonomyTimestamps = new GoogleCloudDatacatalogV1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1TaxonomyInput->taxonomyTimestamps->createTime = 'soluta';
    $request->googleCloudDatacatalogV1TaxonomyInput->taxonomyTimestamps->updateTime = 'dicta';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->key = 'dolores';
    $request->oauthToken = 'distinctio';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Taxonomy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesExport

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->serializedTaxonomies = false;
    $request->taxonomies = [
        'voluptatem',
        'cumque',
        'soluta',
        'nobis',
    ];
    $request->uploadType = 'et';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesExport($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ExportTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesImport

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ImportTaxonomiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1CrossRegionalSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1InlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedTaxonomy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedPolicyTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1ImportTaxonomiesRequest = new GoogleCloudDatacatalogV1ImportTaxonomiesRequest();
    $request->googleCloudDatacatalogV1ImportTaxonomiesRequest->crossRegionalSource = new GoogleCloudDatacatalogV1CrossRegionalSource();
    $request->googleCloudDatacatalogV1ImportTaxonomiesRequest->crossRegionalSource->taxonomy = 'veritatis';
    $request->googleCloudDatacatalogV1ImportTaxonomiesRequest->inlineSource = new GoogleCloudDatacatalogV1InlineSource();
    $request->googleCloudDatacatalogV1ImportTaxonomiesRequest->inlineSource->taxonomies = [
        new GoogleCloudDatacatalogV1SerializedTaxonomy(),
        new GoogleCloudDatacatalogV1SerializedTaxonomy(),
        new GoogleCloudDatacatalogV1SerializedTaxonomy(),
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'aperiam';
    $request->key = 'delectus';
    $request->oauthToken = 'dolorem';
    $request->parent = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesImport($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ImportTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that you have a permission to view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'itaque';
    $request->filter = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->pageSize = 785153;
    $request->pageToken = 'doloribus';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ListTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in a taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PolicyTagInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1PolicyTagInput = new GoogleCloudDatacatalogV1PolicyTagInput();
    $request->googleCloudDatacatalogV1PolicyTagInput->description = 'laudantium';
    $request->googleCloudDatacatalogV1PolicyTagInput->displayName = 'odio';
    $request->googleCloudDatacatalogV1PolicyTagInput->parentPolicyTag = 'occaecati';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'omnis';
    $request->key = 'quis';
    $request->oauthToken = 'ipsum';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'quod';
    $request->force = false;
    $request->key = 'odio';
    $request->name = 'Malcolm Swift';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGet

Gets a policy tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->fields = 'nulla';
    $request->key = 'fugit';
    $request->name = 'Elijah Wyman';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->readMask = 'officia';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsGet($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 136900;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'ratione';
    $request->key = 'ex';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resource = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsList

Lists all policy tags in a taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->key = 'sapiente';
    $request->oauthToken = 'quisquam';
    $request->pageSize = 906556;
    $request->pageToken = 'ea';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1ListPolicyTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag, including its display name, description, and parent policy tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1PolicyTagInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1PolicyTagInput = new GoogleCloudDatacatalogV1PolicyTagInput();
    $request->googleCloudDatacatalogV1PolicyTagInput->description = 'magnam';
    $request->googleCloudDatacatalogV1PolicyTagInput->displayName = 'ea';
    $request->googleCloudDatacatalogV1PolicyTagInput->parentPolicyTag = 'quo';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'minima';
    $request->key = 'eaque';
    $request->name = 'Ms. Marco Ankunding';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->updateMask = 'accusamus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a policy tag or a taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'laborum';
    $request->setIamPolicyRequest->policy->version = 810424;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nobis';
    $request->key = 'quas';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->resource = 'voluptas';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions

Returns your permissions on a specified policy tag or taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'explicabo',
        'provident',
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'odio';
    $request->key = 'eius';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->resource = 'rem';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesReplace

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1ReplaceTaxonomyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedTaxonomy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SerializedPolicyTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesReplaceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest = new GoogleCloudDatacatalogV1ReplaceTaxonomyRequest();
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest->serializedTaxonomy = new GoogleCloudDatacatalogV1SerializedTaxonomy();
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest->serializedTaxonomy->activatedPolicyTypes = [
        GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum::POLICY_TYPE_UNSPECIFIED,
        GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum::POLICY_TYPE_UNSPECIFIED,
        GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum::POLICY_TYPE_UNSPECIFIED,
        GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum::FINE_GRAINED_ACCESS_CONTROL,
    ];
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest->serializedTaxonomy->description = 'eos';
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest->serializedTaxonomy->displayName = 'praesentium';
    $request->googleCloudDatacatalogV1ReplaceTaxonomyRequest->serializedTaxonomy->policyTags = [
        new GoogleCloudDatacatalogV1SerializedPolicyTag(),
        new GoogleCloudDatacatalogV1SerializedPolicyTag(),
        new GoogleCloudDatacatalogV1SerializedPolicyTag(),
        new GoogleCloudDatacatalogV1SerializedPolicyTag(),
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'quidem';
    $request->key = 'neque';
    $request->name = 'Dallas Sanford';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesReplaceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesReplace($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Taxonomy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
