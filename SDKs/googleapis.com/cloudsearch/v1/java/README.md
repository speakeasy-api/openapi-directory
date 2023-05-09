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
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsCheckAccessRequest req = new CloudsearchDebugDatasourcesItemsCheckAccessRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                principal = new Principal() {{
                    groupResourceName = "distinctio";
                    gsuitePrincipal = new GSuitePrincipal() {{
                        gsuiteDomain = false;
                        gsuiteGroupEmail = "quibusdam";
                        gsuiteUserEmail = "unde";
                    }};;
                    userResourceName = "nulla";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                debugOptionsEnableDebugging = false;
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            CloudsearchDebugDatasourcesItemsCheckAccessResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req, new CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {{
                option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [debug](docs/debug/README.md)

* [cloudsearchDebugDatasourcesItemsCheckAccess](docs/debug/README.md#cloudsearchdebugdatasourcesitemscheckaccess) - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugDatasourcesItemsSearchByViewUrl](docs/debug/README.md#cloudsearchdebugdatasourcesitemssearchbyviewurl) - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesItemsListForunmappedidentity](docs/debug/README.md#cloudsearchdebugidentitysourcesitemslistforunmappedidentity) - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesUnmappedidsList](docs/debug/README.md#cloudsearchdebugidentitysourcesunmappedidslist) - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### [indexing](docs/indexing/README.md)

* [cloudsearchIndexingDatasourcesDeleteSchema](docs/indexing/README.md#cloudsearchindexingdatasourcesdeleteschema) - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesGetSchema](docs/indexing/README.md#cloudsearchindexingdatasourcesgetschema) - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [cloudsearchIndexingDatasourcesItemsDelete](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsdelete) - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsDeleteQueueItems](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsdeletequeueitems) - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsGet](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsget) - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsIndex](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsindex) - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsList](docs/indexing/README.md#cloudsearchindexingdatasourcesitemslist) - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPoll](docs/indexing/README.md#cloudsearchindexingdatasourcesitemspoll) - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsPush](docs/indexing/README.md#cloudsearchindexingdatasourcesitemspush) - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUnreserve](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsunreserve) - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesItemsUpload](docs/indexing/README.md#cloudsearchindexingdatasourcesitemsupload) - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [cloudsearchIndexingDatasourcesUpdateSchema](docs/indexing/README.md#cloudsearchindexingdatasourcesupdateschema) - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### [media](docs/media/README.md)

* [cloudsearchMediaUpload](docs/media/README.md#cloudsearchmediaupload) - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### [operations](docs/operations/README.md)

* [cloudsearchOperationsGet](docs/operations/README.md#cloudsearchoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudsearchOperationsLroList](docs/operations/README.md#cloudsearchoperationslrolist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### [query](docs/query/README.md)

* [cloudsearchQuerySearch](docs/query/README.md#cloudsearchquerysearch) - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySourcesList](docs/query/README.md#cloudsearchquerysourceslist) - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySuggest](docs/query/README.md#cloudsearchquerysuggest) - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### [settings](docs/settings/README.md)

* [cloudsearchSettingsDatasourcesCreate](docs/settings/README.md#cloudsearchsettingsdatasourcescreate) - Creates a datasource. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsDatasourcesList](docs/settings/README.md#cloudsearchsettingsdatasourceslist) - Lists datasources. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsGetCustomer](docs/settings/README.md#cloudsearchsettingsgetcustomer) - Get customer settings. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsCreate](docs/settings/README.md#cloudsearchsettingssearchapplicationscreate) - Creates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsDelete](docs/settings/README.md#cloudsearchsettingssearchapplicationsdelete) - Deletes a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsGet](docs/settings/README.md#cloudsearchsettingssearchapplicationsget) - Gets the specified search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsList](docs/settings/README.md#cloudsearchsettingssearchapplicationslist) - Lists all search applications. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsPatch](docs/settings/README.md#cloudsearchsettingssearchapplicationspatch) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsReset](docs/settings/README.md#cloudsearchsettingssearchapplicationsreset) - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsUpdate](docs/settings/README.md#cloudsearchsettingssearchapplicationsupdate) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsUpdateCustomer](docs/settings/README.md#cloudsearchsettingsupdatecustomer) - Update customer settings. **Note:** This API requires an admin account to execute.

### [stats](docs/stats/README.md)

* [cloudsearchStatsGetIndex](docs/stats/README.md#cloudsearchstatsgetindex) - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetQuery](docs/stats/README.md#cloudsearchstatsgetquery) - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSearchapplication](docs/stats/README.md#cloudsearchstatsgetsearchapplication) - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSession](docs/stats/README.md#cloudsearchstatsgetsession) - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetUser](docs/stats/README.md#cloudsearchstatsgetuser) - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsIndexDatasourcesGet](docs/stats/README.md#cloudsearchstatsindexdatasourcesget) - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsQuerySearchapplicationsGet](docs/stats/README.md#cloudsearchstatsquerysearchapplicationsget) - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsSessionSearchapplicationsGet](docs/stats/README.md#cloudsearchstatssessionsearchapplicationsget) - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsUserSearchapplicationsGet](docs/stats/README.md#cloudsearchstatsusersearchapplicationsget) - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### [v1](docs/v1/README.md)

* [cloudsearchInitializeCustomer](docs/v1/README.md#cloudsearchinitializecustomer) - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
