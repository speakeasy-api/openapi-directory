# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SearchCatalogRequestScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogCatalogSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1SearchCatalogRequest = new GoogleCloudDatacatalogV1SearchCatalogRequest();
    $request->googleCloudDatacatalogV1SearchCatalogRequest->orderBy = 'provident';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->pageSize = 715190;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->pageToken = 'quibusdam';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->query = 'unde';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope = new GoogleCloudDatacatalogV1SearchCatalogRequestScope();
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeGcpPublicDatasets = false;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeOrgIds = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeProjectIds = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includePublicTagTemplates = false;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->restrictedLocations = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->starredOnly = false;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DatacatalogCatalogSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->datacatalogCatalogSearch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1SearchCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [catalog](docs/catalog/README.md)

* [datacatalogCatalogSearch](docs/catalog/README.md#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

### [entries](docs/entries/README.md)

* [datacatalogEntriesLookup](docs/entries/README.md#datacatalogentrieslookup) - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

### [projects](docs/projects/README.md)

* [datacatalogProjectsLocationsEntryGroupsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupscreate) - Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsEntryGroupsEntriesCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
* [datacatalogProjectsLocationsEntryGroupsEntriesImport](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriesimport) - Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.
* [datacatalogProjectsLocationsEntryGroupsEntriesList](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
* [datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriesmodifyentrycontacts) - Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
* [datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriesmodifyentryoverview) - Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
* [datacatalogProjectsLocationsEntryGroupsEntriesStar](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriesstar) - Marks an Entry as starred by the current user. Starring information is private to each user.
* [datacatalogProjectsLocationsEntryGroupsEntriesTagsReconcile](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriestagsreconcile) - `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message.
* [datacatalogProjectsLocationsEntryGroupsEntriesUnstar](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriesunstar) - Marks an Entry as NOT starred by the current user. Starring information is private to each user.
* [datacatalogProjectsLocationsEntryGroupsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [datacatalogProjectsLocationsEntryGroupsTagsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
* [datacatalogProjectsLocationsEntryGroupsTagsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [datacatalogProjectsLocationsOperationsCancel](docs/projects/README.md#datacatalogprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datacatalogProjectsLocationsOperationsList](docs/projects/README.md#datacatalogprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datacatalogProjectsLocationsTagTemplatesCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsTagTemplatesFieldsCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
* [datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
* [datacatalogProjectsLocationsTaxonomiesCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
* [datacatalogProjectsLocationsTaxonomiesExport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesexport) - Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
* [datacatalogProjectsLocationsTaxonomiesImport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesimport) - Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
* [datacatalogProjectsLocationsTaxonomiesList](docs/projects/README.md#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that you have a permission to view.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGet](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a policy tag or a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsList](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag, including its display name, description, and parent policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a policy tag or a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns your permissions on a specified policy tag or taxonomy.
* [datacatalogProjectsLocationsTaxonomiesReplace](docs/projects/README.md#datacatalogprojectslocationstaxonomiesreplace) - Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
