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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogCatalogSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest = new GoogleCloudDatacatalogV1beta1SearchCatalogRequest();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->orderBy = 'provident';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageSize = 715190;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageToken = 'quibusdam';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->query = 'unde';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope = new GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeGcpPublicDatasets = false;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeOrgIds = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeProjectIds = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->restrictedLocations = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
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

    if ($response->googleCloudDatacatalogV1beta1SearchCatalogResponse !== null) {
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

* [datacatalogCatalogSearch](docs/catalog/README.md#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### [entries](docs/entries/README.md)

* [datacatalogEntriesLookup](docs/entries/README.md#datacatalogentrieslookup) - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

### [projects](docs/projects/README.md)

* [datacatalogProjectsLocationsEntryGroupsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupscreate) - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsEntryGroupsEntriesCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* [datacatalogProjectsLocationsEntryGroupsEntriesList](docs/projects/README.md#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries.
* [datacatalogProjectsLocationsEntryGroupsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [datacatalogProjectsLocationsEntryGroupsTagsCreate](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* [datacatalogProjectsLocationsEntryGroupsTagsList](docs/projects/README.md#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [datacatalogProjectsLocationsTagTemplatesCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsCreate](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](docs/projects/README.md#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* [datacatalogProjectsLocationsTaxonomiesCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in the specified project.
* [datacatalogProjectsLocationsTaxonomiesExport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesexport) - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* [datacatalogProjectsLocationsTaxonomiesImport](docs/projects/README.md#datacatalogprojectslocationstaxonomiesimport) - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* [datacatalogProjectsLocationsTaxonomiesList](docs/projects/README.md#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in the specified taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag. Also deletes all of its descendant policy tags.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGet](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsList](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](docs/projects/README.md#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns the permissions that a caller has on the specified taxonomy or policy tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
