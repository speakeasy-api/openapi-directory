# projects

### Available Operations

* [datacatalogProjectsLocationsEntryGroupsCreate](#datacatalogprojectslocationsentrygroupscreate) - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsEntryGroupsEntriesCreate](#datacatalogprojectslocationsentrygroupsentriescreate) - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
* [datacatalogProjectsLocationsEntryGroupsEntriesList](#datacatalogprojectslocationsentrygroupsentrieslist) - Lists entries.
* [datacatalogProjectsLocationsEntryGroupsList](#datacatalogprojectslocationsentrygroupslist) - Lists entry groups.
* [datacatalogProjectsLocationsEntryGroupsTagsCreate](#datacatalogprojectslocationsentrygroupstagscreate) - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
* [datacatalogProjectsLocationsEntryGroupsTagsList](#datacatalogprojectslocationsentrygroupstagslist) - Lists tags assigned to an Entry. The columns in the response are lowercased.
* [datacatalogProjectsLocationsTagTemplatesCreate](#datacatalogprojectslocationstagtemplatescreate) - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsCreate](#datacatalogprojectslocationstagtemplatesfieldscreate) - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
* [datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename](#datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename) - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
* [datacatalogProjectsLocationsTaxonomiesCreate](#datacatalogprojectslocationstaxonomiescreate) - Creates a taxonomy in the specified project.
* [datacatalogProjectsLocationsTaxonomiesExport](#datacatalogprojectslocationstaxonomiesexport) - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
* [datacatalogProjectsLocationsTaxonomiesImport](#datacatalogprojectslocationstaxonomiesimport) - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
* [datacatalogProjectsLocationsTaxonomiesList](#datacatalogprojectslocationstaxonomieslist) - Lists all taxonomies in a project in a particular location that the caller has permission to view.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate](#datacatalogprojectslocationstaxonomiespolicytagscreate) - Creates a policy tag in the specified taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete](#datacatalogprojectslocationstaxonomiespolicytagsdelete) - Deletes a policy tag. Also deletes all of its descendant policy tags.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGet](#datacatalogprojectslocationstaxonomiespolicytagsget) - Gets a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy) - Gets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsList](#datacatalogprojectslocationstaxonomiespolicytagslist) - Lists all policy tags in a taxonomy.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch](#datacatalogprojectslocationstaxonomiespolicytagspatch) - Updates a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy](#datacatalogprojectslocationstaxonomiespolicytagssetiampolicy) - Sets the IAM policy for a taxonomy or a policy tag.
* [datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions](#datacatalogprojectslocationstaxonomiespolicytagstestiampermissions) - Returns the permissions that a caller has on the specified taxonomy or policy tag.

## datacatalogProjectsLocationsEntryGroupsCreate

A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1EntryGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1EntryGroupInput = new GoogleCloudDatacatalogV1beta1EntryGroupInput();
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->dataCatalogTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->dataCatalogTimestamps->createTime = 'excepturi';
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->dataCatalogTimestamps->updateTime = 'aspernatur';
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->description = 'perferendis';
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->displayName = 'ad';
    $request->googleCloudDatacatalogV1beta1EntryGroupInput->name = 'Louis Moore';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->entryGroupId = 'fuga';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->oauthToken = 'iste';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1EntryGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesCreate

Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1EntryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1Schema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1ColumnSchema;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1EntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1UsageSignal;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1UsageStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1EntryInput = new GoogleCloudDatacatalogV1beta1EntryInput();
    $request->googleCloudDatacatalogV1beta1EntryInput->description = 'reiciendis';
    $request->googleCloudDatacatalogV1beta1EntryInput->displayName = 'est';
    $request->googleCloudDatacatalogV1beta1EntryInput->gcsFilesetSpec = new GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput();
    $request->googleCloudDatacatalogV1beta1EntryInput->gcsFilesetSpec->filePatterns = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->googleCloudDatacatalogV1beta1EntryInput->linkedResource = 'corporis';
    $request->googleCloudDatacatalogV1beta1EntryInput->schema = new GoogleCloudDatacatalogV1beta1Schema();
    $request->googleCloudDatacatalogV1beta1EntryInput->schema->columns = [
        new GoogleCloudDatacatalogV1beta1ColumnSchema(),
    ];
    $request->googleCloudDatacatalogV1beta1EntryInput->sourceSystemTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1beta1EntryInput->sourceSystemTimestamps->createTime = 'nobis';
    $request->googleCloudDatacatalogV1beta1EntryInput->sourceSystemTimestamps->updateTime = 'enim';
    $request->googleCloudDatacatalogV1beta1EntryInput->type = GoogleCloudDatacatalogV1beta1EntryTypeEnum::DATA_STREAM;
    $request->googleCloudDatacatalogV1beta1EntryInput->usageSignal = new GoogleCloudDatacatalogV1beta1UsageSignal();
    $request->googleCloudDatacatalogV1beta1EntryInput->usageSignal->updateTime = 'nemo';
    $request->googleCloudDatacatalogV1beta1EntryInput->usageSignal->usageWithinTimeRange = [
        'excepturi' => new GoogleCloudDatacatalogV1beta1UsageStats(),
        'accusantium' => new GoogleCloudDatacatalogV1beta1UsageStats(),
    ];
    $request->googleCloudDatacatalogV1beta1EntryInput->userSpecifiedSystem = 'iure';
    $request->googleCloudDatacatalogV1beta1EntryInput->userSpecifiedType = 'culpa';
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->entryId = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1Entry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsEntriesList

Lists entries.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->pageSize = 110375;
    $request->pageToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->readMask = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsEntriesList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ListEntriesResponse !== null) {
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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->pageSize = 837945;
    $request->pageToken = 'laborum';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ListEntryGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsEntryGroupsTagsCreate

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1TagInput = new GoogleCloudDatacatalogV1beta1TagInput();
    $request->googleCloudDatacatalogV1beta1TagInput->column = 'praesentium';
    $request->googleCloudDatacatalogV1beta1TagInput->fields = [
        'ipsa' => new GoogleCloudDatacatalogV1beta1TagFieldInput(),
        'omnis' => new GoogleCloudDatacatalogV1beta1TagFieldInput(),
        'voluptate' => new GoogleCloudDatacatalogV1beta1TagFieldInput(),
        'cum' => new GoogleCloudDatacatalogV1beta1TagFieldInput(),
    ];
    $request->googleCloudDatacatalogV1beta1TagInput->name = 'Sharon Kiehn';
    $request->googleCloudDatacatalogV1beta1TagInput->template = 'dicta';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsTagsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1Tag !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->pageSize = 523248;
    $request->pageToken = 'voluptates';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new DatacatalogProjectsLocationsEntryGroupsTagsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsEntryGroupsTagsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ListTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesCreate

Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagTemplateFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1beta1TagTemplateInput = new GoogleCloudDatacatalogV1beta1TagTemplateInput();
    $request->googleCloudDatacatalogV1beta1TagTemplateInput->displayName = 'incidunt';
    $request->googleCloudDatacatalogV1beta1TagTemplateInput->fields = [
        'consequatur' => new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput(),
        'est' => new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput(),
    ];
    $request->googleCloudDatacatalogV1beta1TagTemplateInput->name = 'Benjamin O'Connell';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->tagTemplateId = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1TagTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsCreate

Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TagTemplateFieldInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput = new GoogleCloudDatacatalogV1beta1TagTemplateFieldInput();
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->description = 'dolorum';
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->displayName = 'excepturi';
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->isRequired = false;
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->order = 270008;
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->type = new GoogleCloudDatacatalogV1beta1FieldType();
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->type->enumType = new GoogleCloudDatacatalogV1beta1FieldTypeEnumType();
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->type->enumType->allowedValues = [
        new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue(),
        new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue(),
        new GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue(),
    ];
    $request->googleCloudDatacatalogV1beta1TagTemplateFieldInput->type->primitiveType = GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum::BOOL;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->tagTemplateFieldId = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesFieldsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1TagTemplateField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename

Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest = new GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest();
    $request->googleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest->newEnumValueDisplayName = 'debitis';
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1TagTemplateField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesCreate

Creates a taxonomy in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TaxonomyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TaxonomyService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1beta1TaxonomyInput = new GoogleCloudDatacatalogV1beta1TaxonomyInput();
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->activatedPolicyTypes = [
        GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum::FINE_GRAINED_ACCESS_CONTROL,
    ];
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->description = 'enim';
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->displayName = 'accusamus';
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->service = new GoogleCloudDatacatalogV1beta1TaxonomyService();
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->service->identity = 'delectus';
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->service->name = GoogleCloudDatacatalogV1beta1TaxonomyServiceNameEnum::MANAGING_SYSTEM_OTHER;
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->taxonomyTimestamps = new GoogleCloudDatacatalogV1beta1SystemTimestampsInput();
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->taxonomyTimestamps->createTime = 'provident';
    $request->googleCloudDatacatalogV1beta1TaxonomyInput->taxonomyTimestamps->updateTime = 'nam';
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1Taxonomy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesExport

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->serializedTaxonomies = false;
    $request->taxonomies = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesExport($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ExportTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesImport

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1InlineSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SerializedTaxonomy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SerializedPolicyTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1ImportTaxonomiesRequest = new GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest();
    $request->googleCloudDatacatalogV1beta1ImportTaxonomiesRequest->inlineSource = new GoogleCloudDatacatalogV1beta1InlineSource();
    $request->googleCloudDatacatalogV1beta1ImportTaxonomiesRequest->inlineSource->taxonomies = [
        new GoogleCloudDatacatalogV1beta1SerializedTaxonomy(),
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesImport($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ImportTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesList

Lists all taxonomies in a project in a particular location that the caller has permission to view.

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
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'nemo';
    $request->filter = 'quasi';
    $request->key = 'iure';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 891924;
    $request->pageToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ListTaxonomiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate

Creates a policy tag in the specified taxonomy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1PolicyTagInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1PolicyTagInput = new GoogleCloudDatacatalogV1beta1PolicyTagInput();
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->description = 'architecto';
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->displayName = 'repudiandae';
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->parentPolicyTag = 'ullam';
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->oauthToken = 'saepe';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete

Deletes a policy tag. Also deletes all of its descendant policy tags.

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
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->force = false;
    $request->key = 'pariatur';
    $request->name = 'Nathaniel Marks';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'eaque';
    $request->key = 'pariatur';
    $request->name = 'Camille Armstrong';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->readMask = 'corporis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsGet($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy

Gets the IAM policy for a taxonomy or a policy tag.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 171629;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'eaque';
    $request->key = 'quis';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->resource = 'perferendis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'minus';

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
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->pageSize = 704415;
    $request->pageToken = 'perspiciatis';
    $request->parent = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsList($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1ListPolicyTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch

Updates a policy tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1PolicyTagInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1beta1PolicyTagInput = new GoogleCloudDatacatalogV1beta1PolicyTagInput();
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->description = 'eaque';
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->displayName = 'occaecati';
    $request->googleCloudDatacatalogV1beta1PolicyTagInput->parentPolicyTag = 'rerum';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->name = 'Casey Stracke';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->updateMask = 'quaerat';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1PolicyTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy

Sets the IAM policy for a taxonomy or a policy tag.

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
    ];
    $request->setIamPolicyRequest->policy->etag = 'dolor';
    $request->setIamPolicyRequest->policy->version = 186193;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->resource = 'amet';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'numquam';

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

Returns the permissions that a caller has on the specified taxonomy or policy tag.

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
        'ipsa',
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'accusamus';
    $request->key = 'quidem';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->resource = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

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
