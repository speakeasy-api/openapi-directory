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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddOrReplaceDocumentsRequest{
        QueryParams: operations.AddOrReplaceDocumentsQueryParams{
            PrimaryKey: "id",
        },
        Request: []AddOrReplaceDocumentsRequestBody{
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Documents.AddOrReplaceDocuments(ctx, req)
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
## SDK Available Operations


### Documents

* `AddOrReplaceDocuments` - Add or replace documents
* `AddOrUpdateDocuments` - Add or update documents
* `DeleteAllDocuments` - Delete all documents
* `DeleteDocuments` - Delete documents
* `DeleteOneDocument` - Delete one document
* `GetDocuments` - Get documents
* `GetOneDocument` - Get one document

### Dumps

* `CreateADump` - Create a dump

### Indexes

* `CreateIndexWithPrimaryKey` - Create index with primary key
* `DeleteAnIndex` - Delete an index
* `GetIndexes` - Get indexes
* `ShowIndex` - Show index
* `SwapIndexes` - Swap indexes
* `UdpateIndex` - Udpate index 

### KeyManagement

* `CreateAKey` - Create a key
* `DeleteAKey` - Delete a key
* `GetKeys` - Get keys
* `GetOneKey` - Get one key
* `UpdateAKey` - Update a key

### Search

* `SearchInIndex` - Search in index
* `SearchInIndex1` - Search in index

### Settings

* `GetAllSettings` - Get all settings
* `GetDisplayedAttributes` - Get displayed attributes
* `GetDistinctAttribute` - Get distinct attribute
* `GetFaceting` - Get faceting
* `GetFilterableAttributes` - Get filterable attributes
* `GetPagination` - Get pagination
* `GetRankingRules` - Get ranking rules
* `GetSearchableAttributes` - Get searchable attributes
* `GetSortableAttributes` - Get sortable attributes
* `GetStopWords` - Get stop-words
* `GetSynonyms` - Get synonyms
* `GetTypoTolerance` - Get typo-tolerance
* `ResetAllSettings` - Reset all settings
* `ResetDisplayedAttributes` - Reset displayed attributes
* `ResetDistinctAttribute` - Reset distinct attribute
* `ResetFaceting` - Reset faceting
* `ResetFilterableAttributes` - Reset filterable attributes
* `ResetPagination` - Reset pagination
* `ResetRankingRules` - Reset ranking rules
* `ResetSearchableAttributes` - Reset searchable attributes
* `ResetSortableAttributes` - Reset sortable attributes
* `ResetStopWords` - Reset stop-words
* `ResetSynonyms` - Reset synonyms
* `ResetTypoTolerance` - Reset typo-tolerance
* `UpdateDisplayedAttributes` - Update displayed attributes
* `UpdateDistinctAttribute` - Update distinct attribute
* `UpdateFaceting` - Update faceting
* `UpdateFilterableAttributes` - Update filterable attributes
* `UpdatePagination` - Update pagination
* `UpdateRankingRules` - Update ranking rules
* `UpdateSearchableAttributes` - Update searchable attributes
* `UpdateSettings` - Update settings
* `UpdateSortableAttributes` - Update sortable attributes
* `UpdateStopWords` - Update stop-words
* `UpdateSynonyms` - Update synonyms
* `UpdateTypoTolerance` - Update typo-tolerance

### Stats

* `GlobalStats` - Global stats
* `Health` - Health
* `StatsOfAnIndex` - Stats of an index
* `Version` - Version

### SubRoutes

* `GetDisplayedAttributes` - Get displayed attributes
* `GetDistinctAttribute` - Get distinct attribute
* `GetFaceting` - Get faceting
* `GetFilterableAttributes` - Get filterable attributes
* `GetPagination` - Get pagination
* `GetRankingRules` - Get ranking rules
* `GetSearchableAttributes` - Get searchable attributes
* `GetSortableAttributes` - Get sortable attributes
* `GetStopWords` - Get stop-words
* `GetSynonyms` - Get synonyms
* `GetTypoTolerance` - Get typo-tolerance
* `ResetDisplayedAttributes` - Reset displayed attributes
* `ResetDistinctAttribute` - Reset distinct attribute
* `ResetFaceting` - Reset faceting
* `ResetFilterableAttributes` - Reset filterable attributes
* `ResetPagination` - Reset pagination
* `ResetRankingRules` - Reset ranking rules
* `ResetSearchableAttributes` - Reset searchable attributes
* `ResetSortableAttributes` - Reset sortable attributes
* `ResetStopWords` - Reset stop-words
* `ResetSynonyms` - Reset synonyms
* `ResetTypoTolerance` - Reset typo-tolerance
* `UpdateDisplayedAttributes` - Update displayed attributes
* `UpdateDistinctAttribute` - Update distinct attribute
* `UpdateFaceting` - Update faceting
* `UpdateFilterableAttributes` - Update filterable attributes
* `UpdatePagination` - Update pagination
* `UpdateRankingRules` - Update ranking rules
* `UpdateSearchableAttributes` - Update searchable attributes
* `UpdateSortableAttributes` - Update sortable attributes
* `UpdateStopWords` - Update stop-words
* `UpdateSynonyms` - Update synonyms
* `UpdateTypoTolerance` - Update typo-tolerance

### Tasks

* `CancelTasks` - Cancel tasks
* `DeleteTasks` - Delete tasks
* `GetAllTasks` - Get all tasks
* `GetOneTask` - Get one task
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
