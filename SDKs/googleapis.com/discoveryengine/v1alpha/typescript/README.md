# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/discoveryengine/v1alpha/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/discoveryengine/v1alpha/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest,
  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDiscoveryengineV1alphaDocument: {
    id: "provident",
    jsonData: "distinctio",
    name: "quibusdam",
    parentDocumentId: "unde",
    schemaId: "nulla",
    structData: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  accessToken: "magnam",
  alt: AltEnum.Proto,
  callback: "ipsa",
  documentId: "delectus",
  fields: "tempora",
  key: "suscipit",
  oauthToken: "molestiae",
  parent: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req).then((res: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate` - Creates a Document.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete` - Deletes a Document.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport` - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsList` - Gets a list of Documents.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch` - Updates a Document.
* `discoveryengineProjectsLocationsDataStoresServingConfigsRecommend` - Makes a recommendation, which requires a contextual user event.
* `discoveryengineProjectsLocationsDataStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `discoveryengineProjectsLocationsDataStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `discoveryengineProjectsLocationsDataStoresUserEventsWrite` - Writes a single user event.
* `discoveryengineProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `discoveryengineProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

