# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddOrReplaceDocumentsQueryParams;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequest;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrReplaceDocumentsRequest req = new AddOrReplaceDocumentsRequest() {{
                queryParams = new AddOrReplaceDocumentsQueryParams() {{
                    primaryKey = "id";
                }};
                request = new org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody[]{{
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                }};
            }};            

            AddOrReplaceDocumentsResponse res = sdk.documents.addOrReplaceDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### documents

* `addOrReplaceDocuments` - Add or replace documents
* `addOrUpdateDocuments` - Add or update documents
* `deleteAllDocuments` - Delete all documents
* `deleteDocuments` - Delete documents
* `deleteOneDocument` - Delete one document
* `getDocuments` - Get documents
* `getOneDocument` - Get one document

### dumps

* `createADump` - Create a dump

### indexes

* `createIndexWithPrimaryKey` - Create index with primary key
* `deleteAnIndex` - Delete an index
* `getIndexes` - Get indexes
* `showIndex` - Show index
* `swapIndexes` - Swap indexes
* `udpateIndex` - Udpate index 

### keyManagement

* `createAKey` - Create a key
* `deleteAKey` - Delete a key
* `getKeys` - Get keys
* `getOneKey` - Get one key
* `updateAKey` - Update a key

### search

* `searchInIndex` - Search in index
* `searchInIndex1` - Search in index

### settings

* `getAllSettings` - Get all settings
* `getDisplayedAttributes` - Get displayed attributes
* `getDistinctAttribute` - Get distinct attribute
* `getFaceting` - Get faceting
* `getFilterableAttributes` - Get filterable attributes
* `getPagination` - Get pagination
* `getRankingRules` - Get ranking rules
* `getSearchableAttributes` - Get searchable attributes
* `getSortableAttributes` - Get sortable attributes
* `getStopWords` - Get stop-words
* `getSynonyms` - Get synonyms
* `getTypoTolerance` - Get typo-tolerance
* `resetAllSettings` - Reset all settings
* `resetDisplayedAttributes` - Reset displayed attributes
* `resetDistinctAttribute` - Reset distinct attribute
* `resetFaceting` - Reset faceting
* `resetFilterableAttributes` - Reset filterable attributes
* `resetPagination` - Reset pagination
* `resetRankingRules` - Reset ranking rules
* `resetSearchableAttributes` - Reset searchable attributes
* `resetSortableAttributes` - Reset sortable attributes
* `resetStopWords` - Reset stop-words
* `resetSynonyms` - Reset synonyms
* `resetTypoTolerance` - Reset typo-tolerance
* `updateDisplayedAttributes` - Update displayed attributes
* `updateDistinctAttribute` - Update distinct attribute
* `updateFaceting` - Update faceting
* `updateFilterableAttributes` - Update filterable attributes
* `updatePagination` - Update pagination
* `updateRankingRules` - Update ranking rules
* `updateSearchableAttributes` - Update searchable attributes
* `updateSettings` - Update settings
* `updateSortableAttributes` - Update sortable attributes
* `updateStopWords` - Update stop-words
* `updateSynonyms` - Update synonyms
* `updateTypoTolerance` - Update typo-tolerance

### stats

* `globalStats` - Global stats
* `health` - Health
* `statsOfAnIndex` - Stats of an index
* `version` - Version

### subRoutes

* `getDisplayedAttributes` - Get displayed attributes
* `getDistinctAttribute` - Get distinct attribute
* `getFaceting` - Get faceting
* `getFilterableAttributes` - Get filterable attributes
* `getPagination` - Get pagination
* `getRankingRules` - Get ranking rules
* `getSearchableAttributes` - Get searchable attributes
* `getSortableAttributes` - Get sortable attributes
* `getStopWords` - Get stop-words
* `getSynonyms` - Get synonyms
* `getTypoTolerance` - Get typo-tolerance
* `resetDisplayedAttributes` - Reset displayed attributes
* `resetDistinctAttribute` - Reset distinct attribute
* `resetFaceting` - Reset faceting
* `resetFilterableAttributes` - Reset filterable attributes
* `resetPagination` - Reset pagination
* `resetRankingRules` - Reset ranking rules
* `resetSearchableAttributes` - Reset searchable attributes
* `resetSortableAttributes` - Reset sortable attributes
* `resetStopWords` - Reset stop-words
* `resetSynonyms` - Reset synonyms
* `resetTypoTolerance` - Reset typo-tolerance
* `updateDisplayedAttributes` - Update displayed attributes
* `updateDistinctAttribute` - Update distinct attribute
* `updateFaceting` - Update faceting
* `updateFilterableAttributes` - Update filterable attributes
* `updatePagination` - Update pagination
* `updateRankingRules` - Update ranking rules
* `updateSearchableAttributes` - Update searchable attributes
* `updateSortableAttributes` - Update sortable attributes
* `updateStopWords` - Update stop-words
* `updateSynonyms` - Update synonyms
* `updateTypoTolerance` - Update typo-tolerance

### tasks

* `cancelTasks` - Cancel tasks
* `deleteTasks` - Delete tasks
* `getAllTasks` - Get all tasks
* `getOneTask` - Get one task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
