# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/meilisearch.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Documents.AddOrReplaceDocuments(ctx, operations.AddOrReplaceDocumentsRequest{
        RequestBody: []AddOrReplaceDocumentsRequestBody{
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
        },
        CsvDelimiter: sdk.String(";"),
        PrimaryKey: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Documents](docs/documents/README.md)

* [AddOrReplaceDocuments](docs/documents/README.md#addorreplacedocuments) - Add or replace documents
* [AddOrUpdateDocuments](docs/documents/README.md#addorupdatedocuments) - Add or update documents
* [DeleteAllDocuments](docs/documents/README.md#deletealldocuments) - Delete all documents
* [DeleteDocuments](docs/documents/README.md#deletedocuments) - Delete documents
* [DeleteOneDocument](docs/documents/README.md#deleteonedocument) - Delete one document
* [GetDocuments](docs/documents/README.md#getdocuments) - Get documents
* [GetOneDocument](docs/documents/README.md#getonedocument) - Get one document

### [Dumps](docs/dumps/README.md)

* [CreateADump](docs/dumps/README.md#createadump) - Create a dump

### [Indexes](docs/indexes/README.md)

* [CreateIndexWithPrimaryKey](docs/indexes/README.md#createindexwithprimarykey) - Create index with primary key
* [DeleteAnIndex](docs/indexes/README.md#deleteanindex) - Delete an index
* [GetIndexes](docs/indexes/README.md#getindexes) - Get indexes
* [ShowIndex](docs/indexes/README.md#showindex) - Show index
* [SwapIndexes](docs/indexes/README.md#swapindexes) - Swap indexes
* [UpdateIndex](docs/indexes/README.md#updateindex) - Update index

### [KeyManagement](docs/keymanagement/README.md)

* [CreateAKey](docs/keymanagement/README.md#createakey) - Create a key
* [DeleteAKey](docs/keymanagement/README.md#deleteakey) - Delete a key
* [GetKeys](docs/keymanagement/README.md#getkeys) - Get keys
* [GetOneKey](docs/keymanagement/README.md#getonekey) - Get one key
* [UpdateAKey](docs/keymanagement/README.md#updateakey) - Update a key

### [MultiSearch](docs/multisearch/README.md)

* [SearchOneOrMoreIndexes](docs/multisearch/README.md#searchoneormoreindexes) - Search one or more indexes

### [Search](docs/search/README.md)

* [SearchInIndex](docs/search/README.md#searchinindex) - Search in index
* [SearchInIndex1](docs/search/README.md#searchinindex1) - Search in index

### [Settings](docs/settings/README.md)

* [GetAllSettings](docs/settings/README.md#getallsettings) - Get all settings
* [GetDisplayedAttributes](docs/settings/README.md#getdisplayedattributes) - Get displayed attributes
* [GetDistinctAttribute](docs/settings/README.md#getdistinctattribute) - Get distinct attribute
* [GetFaceting](docs/settings/README.md#getfaceting) - Get faceting
* [GetFilterableAttributes](docs/settings/README.md#getfilterableattributes) - Get filterable attributes
* [GetPagination](docs/settings/README.md#getpagination) - Get pagination
* [GetRankingRules](docs/settings/README.md#getrankingrules) - Get ranking rules
* [GetSearchableAttributes](docs/settings/README.md#getsearchableattributes) - Get searchable attributes
* [GetSortableAttributes](docs/settings/README.md#getsortableattributes) - Get sortable attributes
* [GetStopWords](docs/settings/README.md#getstopwords) - Get stop-words
* [GetSynonyms](docs/settings/README.md#getsynonyms) - Get synonyms
* [GetTypoTolerance](docs/settings/README.md#gettypotolerance) - Get typo-tolerance
* [ResetAllSettings](docs/settings/README.md#resetallsettings) - Reset all settings
* [ResetDisplayedAttributes](docs/settings/README.md#resetdisplayedattributes) - Reset displayed attributes
* [ResetDistinctAttribute](docs/settings/README.md#resetdistinctattribute) - Reset distinct attribute
* [ResetFaceting](docs/settings/README.md#resetfaceting) - Reset faceting
* [ResetFilterableAttributes](docs/settings/README.md#resetfilterableattributes) - Reset filterable attributes
* [ResetPagination](docs/settings/README.md#resetpagination) - Reset pagination
* [ResetRankingRules](docs/settings/README.md#resetrankingrules) - Reset ranking rules
* [ResetSearchableAttributes](docs/settings/README.md#resetsearchableattributes) - Reset searchable attributes
* [ResetSortableAttributes](docs/settings/README.md#resetsortableattributes) - Reset sortable attributes
* [ResetStopWords](docs/settings/README.md#resetstopwords) - Reset stop-words
* [ResetSynonyms](docs/settings/README.md#resetsynonyms) - Reset synonyms
* [ResetTypoTolerance](docs/settings/README.md#resettypotolerance) - Reset typo-tolerance
* [UpdateDisplayedAttributes](docs/settings/README.md#updatedisplayedattributes) - Update displayed attributes
* [UpdateDistinctAttribute](docs/settings/README.md#updatedistinctattribute) - Update distinct attribute
* [UpdateFaceting](docs/settings/README.md#updatefaceting) - Update faceting
* [UpdateFilterableAttributes](docs/settings/README.md#updatefilterableattributes) - Update filterable attributes
* [UpdatePagination](docs/settings/README.md#updatepagination) - Update pagination
* [UpdateRankingRules](docs/settings/README.md#updaterankingrules) - Update ranking rules
* [UpdateSearchableAttributes](docs/settings/README.md#updatesearchableattributes) - Update searchable attributes
* [UpdateSettings](docs/settings/README.md#updatesettings) - Update settings
* [UpdateSortableAttributes](docs/settings/README.md#updatesortableattributes) - Update sortable attributes
* [UpdateStopWords](docs/settings/README.md#updatestopwords) - Update stop-words
* [UpdateSynonyms](docs/settings/README.md#updatesynonyms) - Update synonyms
* [UpdateTypoTolerance](docs/settings/README.md#updatetypotolerance) - Update typo-tolerance

### [Stats](docs/stats/README.md)

* [GlobalStats](docs/stats/README.md#globalstats) - Global stats
* [Health](docs/stats/README.md#health) - Health
* [StatsOfAnIndex](docs/stats/README.md#statsofanindex) - Stats of an index
* [Version](docs/stats/README.md#version) - Version

### [SubRoutes](docs/subroutes/README.md)

* [GetDisplayedAttributes](docs/subroutes/README.md#getdisplayedattributes) - Get displayed attributes
* [GetDistinctAttribute](docs/subroutes/README.md#getdistinctattribute) - Get distinct attribute
* [GetFaceting](docs/subroutes/README.md#getfaceting) - Get faceting
* [GetFilterableAttributes](docs/subroutes/README.md#getfilterableattributes) - Get filterable attributes
* [GetPagination](docs/subroutes/README.md#getpagination) - Get pagination
* [GetRankingRules](docs/subroutes/README.md#getrankingrules) - Get ranking rules
* [GetSearchableAttributes](docs/subroutes/README.md#getsearchableattributes) - Get searchable attributes
* [GetSortableAttributes](docs/subroutes/README.md#getsortableattributes) - Get sortable attributes
* [GetStopWords](docs/subroutes/README.md#getstopwords) - Get stop-words
* [GetSynonyms](docs/subroutes/README.md#getsynonyms) - Get synonyms
* [GetTypoTolerance](docs/subroutes/README.md#gettypotolerance) - Get typo-tolerance
* [ResetDisplayedAttributes](docs/subroutes/README.md#resetdisplayedattributes) - Reset displayed attributes
* [ResetDistinctAttribute](docs/subroutes/README.md#resetdistinctattribute) - Reset distinct attribute
* [ResetFaceting](docs/subroutes/README.md#resetfaceting) - Reset faceting
* [ResetFilterableAttributes](docs/subroutes/README.md#resetfilterableattributes) - Reset filterable attributes
* [ResetPagination](docs/subroutes/README.md#resetpagination) - Reset pagination
* [ResetRankingRules](docs/subroutes/README.md#resetrankingrules) - Reset ranking rules
* [ResetSearchableAttributes](docs/subroutes/README.md#resetsearchableattributes) - Reset searchable attributes
* [ResetSortableAttributes](docs/subroutes/README.md#resetsortableattributes) - Reset sortable attributes
* [ResetStopWords](docs/subroutes/README.md#resetstopwords) - Reset stop-words
* [ResetSynonyms](docs/subroutes/README.md#resetsynonyms) - Reset synonyms
* [ResetTypoTolerance](docs/subroutes/README.md#resettypotolerance) - Reset typo-tolerance
* [UpdateDisplayedAttributes](docs/subroutes/README.md#updatedisplayedattributes) - Update displayed attributes
* [UpdateDistinctAttribute](docs/subroutes/README.md#updatedistinctattribute) - Update distinct attribute
* [UpdateFaceting](docs/subroutes/README.md#updatefaceting) - Update faceting
* [UpdateFilterableAttributes](docs/subroutes/README.md#updatefilterableattributes) - Update filterable attributes
* [UpdatePagination](docs/subroutes/README.md#updatepagination) - Update pagination
* [UpdateRankingRules](docs/subroutes/README.md#updaterankingrules) - Update ranking rules
* [UpdateSearchableAttributes](docs/subroutes/README.md#updatesearchableattributes) - Update searchable attributes
* [UpdateSortableAttributes](docs/subroutes/README.md#updatesortableattributes) - Update sortable attributes
* [UpdateStopWords](docs/subroutes/README.md#updatestopwords) - Update stop-words
* [UpdateSynonyms](docs/subroutes/README.md#updatesynonyms) - Update synonyms
* [UpdateTypoTolerance](docs/subroutes/README.md#updatetypotolerance) - Update typo-tolerance

### [Tasks](docs/tasks/README.md)

* [CancelTasks](docs/tasks/README.md#canceltasks) - Cancel tasks
* [DeleteTasks](docs/tasks/README.md#deletetasks) - Delete tasks
* [GetAllTasks](docs/tasks/README.md#getalltasks) - Get all tasks
* [GetOneTask](docs/tasks/README.md#getonetask) - Get one task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
