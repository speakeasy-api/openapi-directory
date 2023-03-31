# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/meilisearch.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddOrReplaceDocumentsRequest(
    request_body=[
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
    ],
    primary_key="id",
)
    
res = s.documents.add_or_replace_documents(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documents

* `add_or_replace_documents` - Add or replace documents
* `add_or_update_documents` - Add or update documents
* `delete_all_documents` - Delete all documents
* `delete_documents` - Delete documents
* `delete_one_document` - Delete one document
* `get_documents` - Get documents
* `get_one_document` - Get one document

### dumps

* `create_a_dump` - Create a dump

### indexes

* `create_index_with_primary_key` - Create index with primary key
* `delete_an_index` - Delete an index
* `get_indexes` - Get indexes
* `show_index` - Show index
* `swap_indexes` - Swap indexes
* `udpate_index` - Udpate index 

### key_management

* `create_a_key` - Create a key
* `delete_a_key` - Delete a key
* `get_keys` - Get keys
* `get_one_key` - Get one key
* `update_a_key` - Update a key

### search

* `search_in_index` - Search in index
* `search_in_index1` - Search in index

### settings

* `get_all_settings` - Get all settings
* `get_displayed_attributes` - Get displayed attributes
* `get_distinct_attribute` - Get distinct attribute
* `get_faceting` - Get faceting
* `get_filterable_attributes` - Get filterable attributes
* `get_pagination` - Get pagination
* `get_ranking_rules` - Get ranking rules
* `get_searchable_attributes` - Get searchable attributes
* `get_sortable_attributes` - Get sortable attributes
* `get_stop_words` - Get stop-words
* `get_synonyms` - Get synonyms
* `get_typo_tolerance` - Get typo-tolerance
* `reset_all_settings` - Reset all settings
* `reset_displayed_attributes` - Reset displayed attributes
* `reset_distinct_attribute` - Reset distinct attribute
* `reset_faceting` - Reset faceting
* `reset_filterable_attributes` - Reset filterable attributes
* `reset_pagination` - Reset pagination
* `reset_ranking_rules` - Reset ranking rules
* `reset_searchable_attributes` - Reset searchable attributes
* `reset_sortable_attributes` - Reset sortable attributes
* `reset_stop_words` - Reset stop-words
* `reset_synonyms` - Reset synonyms
* `reset_typo_tolerance` - Reset typo-tolerance
* `update_displayed_attributes` - Update displayed attributes
* `update_distinct_attribute` - Update distinct attribute
* `update_faceting` - Update faceting
* `update_filterable_attributes` - Update filterable attributes
* `update_pagination` - Update pagination
* `update_ranking_rules` - Update ranking rules
* `update_searchable_attributes` - Update searchable attributes
* `update_settings` - Update settings
* `update_sortable_attributes` - Update sortable attributes
* `update_stop_words` - Update stop-words
* `update_synonyms` - Update synonyms
* `update_typo_tolerance` - Update typo-tolerance

### stats

* `global_stats` - Global stats
* `health` - Health
* `stats_of_an_index` - Stats of an index
* `version` - Version

### sub_routes

* `get_displayed_attributes` - Get displayed attributes
* `get_distinct_attribute` - Get distinct attribute
* `get_faceting` - Get faceting
* `get_filterable_attributes` - Get filterable attributes
* `get_pagination` - Get pagination
* `get_ranking_rules` - Get ranking rules
* `get_searchable_attributes` - Get searchable attributes
* `get_sortable_attributes` - Get sortable attributes
* `get_stop_words` - Get stop-words
* `get_synonyms` - Get synonyms
* `get_typo_tolerance` - Get typo-tolerance
* `reset_displayed_attributes` - Reset displayed attributes
* `reset_distinct_attribute` - Reset distinct attribute
* `reset_faceting` - Reset faceting
* `reset_filterable_attributes` - Reset filterable attributes
* `reset_pagination` - Reset pagination
* `reset_ranking_rules` - Reset ranking rules
* `reset_searchable_attributes` - Reset searchable attributes
* `reset_sortable_attributes` - Reset sortable attributes
* `reset_stop_words` - Reset stop-words
* `reset_synonyms` - Reset synonyms
* `reset_typo_tolerance` - Reset typo-tolerance
* `update_displayed_attributes` - Update displayed attributes
* `update_distinct_attribute` - Update distinct attribute
* `update_faceting` - Update faceting
* `update_filterable_attributes` - Update filterable attributes
* `update_pagination` - Update pagination
* `update_ranking_rules` - Update ranking rules
* `update_searchable_attributes` - Update searchable attributes
* `update_sortable_attributes` - Update sortable attributes
* `update_stop_words` - Update stop-words
* `update_synonyms` - Update synonyms
* `update_typo_tolerance` - Update typo-tolerance

### tasks

* `cancel_tasks` - Cancel tasks
* `delete_tasks` - Delete tasks
* `get_all_tasks` - Get all tasks
* `get_one_task` - Get one task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
