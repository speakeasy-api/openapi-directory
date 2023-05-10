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
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrReplaceDocumentsRequest();
    $request->requestBody = [
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
        new AddOrReplaceDocumentsRequestBody(),
    ];
    $request->csvDelimiter = ';';
    $request->primaryKey = 'id';

    $response = $sdk->documents->addOrReplaceDocuments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documents](docs/documents/README.md)

* [addOrReplaceDocuments](docs/documents/README.md#addorreplacedocuments) - Add or replace documents
* [addOrUpdateDocuments](docs/documents/README.md#addorupdatedocuments) - Add or update documents
* [deleteAllDocuments](docs/documents/README.md#deletealldocuments) - Delete all documents
* [deleteDocuments](docs/documents/README.md#deletedocuments) - Delete documents
* [deleteOneDocument](docs/documents/README.md#deleteonedocument) - Delete one document
* [getDocuments](docs/documents/README.md#getdocuments) - Get documents
* [getOneDocument](docs/documents/README.md#getonedocument) - Get one document

### [dumps](docs/dumps/README.md)

* [createADump](docs/dumps/README.md#createadump) - Create a dump

### [indexes](docs/indexes/README.md)

* [createIndexWithPrimaryKey](docs/indexes/README.md#createindexwithprimarykey) - Create index with primary key
* [deleteAnIndex](docs/indexes/README.md#deleteanindex) - Delete an index
* [getIndexes](docs/indexes/README.md#getindexes) - Get indexes
* [showIndex](docs/indexes/README.md#showindex) - Show index
* [swapIndexes](docs/indexes/README.md#swapindexes) - Swap indexes
* [updateIndex](docs/indexes/README.md#updateindex) - Update index

### [keyManagement](docs/keymanagement/README.md)

* [createAKey](docs/keymanagement/README.md#createakey) - Create a key
* [deleteAKey](docs/keymanagement/README.md#deleteakey) - Delete a key
* [getKeys](docs/keymanagement/README.md#getkeys) - Get keys
* [getOneKey](docs/keymanagement/README.md#getonekey) - Get one key
* [updateAKey](docs/keymanagement/README.md#updateakey) - Update a key

### [multiSearch](docs/multisearch/README.md)

* [searchOneOrMoreIndexes](docs/multisearch/README.md#searchoneormoreindexes) - Search one or more indexes

### [search](docs/search/README.md)

* [searchInIndex](docs/search/README.md#searchinindex) - Search in index
* [searchInIndex1](docs/search/README.md#searchinindex1) - Search in index

### [settings](docs/settings/README.md)

* [getAllSettings](docs/settings/README.md#getallsettings) - Get all settings
* [getDisplayedAttributes](docs/settings/README.md#getdisplayedattributes) - Get displayed attributes
* [getDistinctAttribute](docs/settings/README.md#getdistinctattribute) - Get distinct attribute
* [getFaceting](docs/settings/README.md#getfaceting) - Get faceting
* [getFilterableAttributes](docs/settings/README.md#getfilterableattributes) - Get filterable attributes
* [getPagination](docs/settings/README.md#getpagination) - Get pagination
* [getRankingRules](docs/settings/README.md#getrankingrules) - Get ranking rules
* [getSearchableAttributes](docs/settings/README.md#getsearchableattributes) - Get searchable attributes
* [getSortableAttributes](docs/settings/README.md#getsortableattributes) - Get sortable attributes
* [getStopWords](docs/settings/README.md#getstopwords) - Get stop-words
* [getSynonyms](docs/settings/README.md#getsynonyms) - Get synonyms
* [getTypoTolerance](docs/settings/README.md#gettypotolerance) - Get typo-tolerance
* [resetAllSettings](docs/settings/README.md#resetallsettings) - Reset all settings
* [resetDisplayedAttributes](docs/settings/README.md#resetdisplayedattributes) - Reset displayed attributes
* [resetDistinctAttribute](docs/settings/README.md#resetdistinctattribute) - Reset distinct attribute
* [resetFaceting](docs/settings/README.md#resetfaceting) - Reset faceting
* [resetFilterableAttributes](docs/settings/README.md#resetfilterableattributes) - Reset filterable attributes
* [resetPagination](docs/settings/README.md#resetpagination) - Reset pagination
* [resetRankingRules](docs/settings/README.md#resetrankingrules) - Reset ranking rules
* [resetSearchableAttributes](docs/settings/README.md#resetsearchableattributes) - Reset searchable attributes
* [resetSortableAttributes](docs/settings/README.md#resetsortableattributes) - Reset sortable attributes
* [resetStopWords](docs/settings/README.md#resetstopwords) - Reset stop-words
* [resetSynonyms](docs/settings/README.md#resetsynonyms) - Reset synonyms
* [resetTypoTolerance](docs/settings/README.md#resettypotolerance) - Reset typo-tolerance
* [updateDisplayedAttributes](docs/settings/README.md#updatedisplayedattributes) - Update displayed attributes
* [updateDistinctAttribute](docs/settings/README.md#updatedistinctattribute) - Update distinct attribute
* [updateFaceting](docs/settings/README.md#updatefaceting) - Update faceting
* [updateFilterableAttributes](docs/settings/README.md#updatefilterableattributes) - Update filterable attributes
* [updatePagination](docs/settings/README.md#updatepagination) - Update pagination
* [updateRankingRules](docs/settings/README.md#updaterankingrules) - Update ranking rules
* [updateSearchableAttributes](docs/settings/README.md#updatesearchableattributes) - Update searchable attributes
* [updateSettings](docs/settings/README.md#updatesettings) - Update settings
* [updateSortableAttributes](docs/settings/README.md#updatesortableattributes) - Update sortable attributes
* [updateStopWords](docs/settings/README.md#updatestopwords) - Update stop-words
* [updateSynonyms](docs/settings/README.md#updatesynonyms) - Update synonyms
* [updateTypoTolerance](docs/settings/README.md#updatetypotolerance) - Update typo-tolerance

### [stats](docs/stats/README.md)

* [globalStats](docs/stats/README.md#globalstats) - Global stats
* [health](docs/stats/README.md#health) - Health
* [statsOfAnIndex](docs/stats/README.md#statsofanindex) - Stats of an index
* [version](docs/stats/README.md#version) - Version

### [subRoutes](docs/subroutes/README.md)

* [getDisplayedAttributes](docs/subroutes/README.md#getdisplayedattributes) - Get displayed attributes
* [getDistinctAttribute](docs/subroutes/README.md#getdistinctattribute) - Get distinct attribute
* [getFaceting](docs/subroutes/README.md#getfaceting) - Get faceting
* [getFilterableAttributes](docs/subroutes/README.md#getfilterableattributes) - Get filterable attributes
* [getPagination](docs/subroutes/README.md#getpagination) - Get pagination
* [getRankingRules](docs/subroutes/README.md#getrankingrules) - Get ranking rules
* [getSearchableAttributes](docs/subroutes/README.md#getsearchableattributes) - Get searchable attributes
* [getSortableAttributes](docs/subroutes/README.md#getsortableattributes) - Get sortable attributes
* [getStopWords](docs/subroutes/README.md#getstopwords) - Get stop-words
* [getSynonyms](docs/subroutes/README.md#getsynonyms) - Get synonyms
* [getTypoTolerance](docs/subroutes/README.md#gettypotolerance) - Get typo-tolerance
* [resetDisplayedAttributes](docs/subroutes/README.md#resetdisplayedattributes) - Reset displayed attributes
* [resetDistinctAttribute](docs/subroutes/README.md#resetdistinctattribute) - Reset distinct attribute
* [resetFaceting](docs/subroutes/README.md#resetfaceting) - Reset faceting
* [resetFilterableAttributes](docs/subroutes/README.md#resetfilterableattributes) - Reset filterable attributes
* [resetPagination](docs/subroutes/README.md#resetpagination) - Reset pagination
* [resetRankingRules](docs/subroutes/README.md#resetrankingrules) - Reset ranking rules
* [resetSearchableAttributes](docs/subroutes/README.md#resetsearchableattributes) - Reset searchable attributes
* [resetSortableAttributes](docs/subroutes/README.md#resetsortableattributes) - Reset sortable attributes
* [resetStopWords](docs/subroutes/README.md#resetstopwords) - Reset stop-words
* [resetSynonyms](docs/subroutes/README.md#resetsynonyms) - Reset synonyms
* [resetTypoTolerance](docs/subroutes/README.md#resettypotolerance) - Reset typo-tolerance
* [updateDisplayedAttributes](docs/subroutes/README.md#updatedisplayedattributes) - Update displayed attributes
* [updateDistinctAttribute](docs/subroutes/README.md#updatedistinctattribute) - Update distinct attribute
* [updateFaceting](docs/subroutes/README.md#updatefaceting) - Update faceting
* [updateFilterableAttributes](docs/subroutes/README.md#updatefilterableattributes) - Update filterable attributes
* [updatePagination](docs/subroutes/README.md#updatepagination) - Update pagination
* [updateRankingRules](docs/subroutes/README.md#updaterankingrules) - Update ranking rules
* [updateSearchableAttributes](docs/subroutes/README.md#updatesearchableattributes) - Update searchable attributes
* [updateSortableAttributes](docs/subroutes/README.md#updatesortableattributes) - Update sortable attributes
* [updateStopWords](docs/subroutes/README.md#updatestopwords) - Update stop-words
* [updateSynonyms](docs/subroutes/README.md#updatesynonyms) - Update synonyms
* [updateTypoTolerance](docs/subroutes/README.md#updatetypotolerance) - Update typo-tolerance

### [tasks](docs/tasks/README.md)

* [cancelTasks](docs/tasks/README.md#canceltasks) - Cancel tasks
* [deleteTasks](docs/tasks/README.md#deletetasks) - Delete tasks
* [getAllTasks](docs/tasks/README.md#getalltasks) - Get all tasks
* [getOneTask](docs/tasks/README.md#getonetask) - Get one task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
