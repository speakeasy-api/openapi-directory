# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudsearch/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest(
    dollar_xgafv="2",
    principal=shared.Principal(
        group_resource_name="provident",
        gsuite_principal=shared.GSuitePrincipal(
            gsuite_domain=False,
            gsuite_group_email="distinctio",
            gsuite_user_email="quibusdam",
        ),
        user_resource_name="unde",
    ),
    access_token="nulla",
    alt="media",
    callback="illum",
    debug_options_enable_debugging=False,
    fields_="vel",
    key="error",
    name="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.debug.cloudsearch_debug_datasources_items_check_access(req, operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity(
    option1=operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.check_access_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### debug

* `cloudsearch_debug_datasources_items_check_access` - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* `cloudsearch_debug_datasources_items_search_by_view_url` - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* `cloudsearch_debug_identitysources_items_list_forunmappedidentity` - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* `cloudsearch_debug_identitysources_unmappedids_list` - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### indexing

* `cloudsearch_indexing_datasources_delete_schema` - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `cloudsearch_indexing_datasources_get_schema` - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `cloudsearch_indexing_datasources_items_delete` - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_delete_queue_items` - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_get` - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_index` - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_list` - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_poll` - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_push` - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_unreserve` - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_items_upload` - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearch_indexing_datasources_update_schema` - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### media

* `cloudsearch_media_upload` - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### operations

* `cloudsearch_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudsearch_operations_lro_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### query

* `cloudsearch_query_search` - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `cloudsearch_query_sources_list` - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `cloudsearch_query_suggest` - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### settings

* `cloudsearch_settings_datasources_create` - Creates a datasource. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_datasources_list` - Lists datasources. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_get_customer` - Get customer settings. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_create` - Creates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_delete` - Deletes a search application. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_get` - Gets the specified search application. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_list` - Lists all search applications. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_patch` - Updates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_reset` - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_searchapplications_update` - Updates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearch_settings_update_customer` - Update customer settings. **Note:** This API requires an admin account to execute.

### stats

* `cloudsearch_stats_get_index` - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_get_query` - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_get_searchapplication` - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_get_session` - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_get_user` - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_index_datasources_get` - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_query_searchapplications_get` - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_session_searchapplications_get` - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `cloudsearch_stats_user_searchapplications_get` - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### v1

* `cloudsearch_initialize_customer` - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
