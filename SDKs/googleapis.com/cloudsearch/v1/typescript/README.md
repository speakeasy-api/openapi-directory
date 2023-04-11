# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudsearch/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudsearch/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudsearchDebugDatasourcesItemsCheckAccessRequest,
  CloudsearchDebugDatasourcesItemsCheckAccessResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudsearchDebugDatasourcesItemsCheckAccessRequest = {
  dollarXgafv: XgafvEnum.Two,
  principal: {
    groupResourceName: "provident",
    gsuitePrincipal: {
      gsuiteDomain: false,
      gsuiteGroupEmail: "distinctio",
      gsuiteUserEmail: "quibusdam",
    },
    userResourceName: "unde",
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  callback: "illum",
  debugOptionsEnableDebugging: false,
  fields: "vel",
  key: "error",
  name: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req).then((res: CloudsearchDebugDatasourcesItemsCheckAccessResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### debug

* `cloudsearchDebugDatasourcesItemsCheckAccess` - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* `cloudsearchDebugDatasourcesItemsSearchByViewUrl` - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* `cloudsearchDebugIdentitysourcesItemsListForunmappedidentity` - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* `cloudsearchDebugIdentitysourcesUnmappedidsList` - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### indexing

* `cloudsearchIndexingDatasourcesDeleteSchema` - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `cloudsearchIndexingDatasourcesGetSchema` - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `cloudsearchIndexingDatasourcesItemsDelete` - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsDeleteQueueItems` - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsGet` - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsIndex` - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsList` - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsPoll` - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsPush` - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsUnreserve` - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesItemsUpload` - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `cloudsearchIndexingDatasourcesUpdateSchema` - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### media

* `cloudsearchMediaUpload` - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### operations

* `cloudsearchOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudsearchOperationsLroList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### query

* `cloudsearchQuerySearch` - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `cloudsearchQuerySourcesList` - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `cloudsearchQuerySuggest` - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### settings

* `cloudsearchSettingsDatasourcesCreate` - Creates a datasource. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsDatasourcesList` - Lists datasources. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsGetCustomer` - Get customer settings. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsCreate` - Creates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsDelete` - Deletes a search application. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsGet` - Gets the specified search application. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsList` - Lists all search applications. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsPatch` - Updates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsReset` - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsSearchapplicationsUpdate` - Updates a search application. **Note:** This API requires an admin account to execute.
* `cloudsearchSettingsUpdateCustomer` - Update customer settings. **Note:** This API requires an admin account to execute.

### stats

* `cloudsearchStatsGetIndex` - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsGetQuery` - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsGetSearchapplication` - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsGetSession` - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsGetUser` - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsIndexDatasourcesGet` - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsQuerySearchapplicationsGet` - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsSessionSearchapplicationsGet` - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `cloudsearchStatsUserSearchapplicationsGet` - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### v1

* `cloudsearchInitializeCustomer` - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

