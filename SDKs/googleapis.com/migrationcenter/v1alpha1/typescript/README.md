# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/migrationcenter/v1alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/migrationcenter/v1alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MigrationcenterProjectsLocationsAssetsAggregateValuesRequest,
  MigrationcenterProjectsLocationsAssetsAggregateValuesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MigrationcenterProjectsLocationsAssetsAggregateValuesRequest = {
  dollarXgafv: XgafvEnum.Two,
  aggregateAssetsValuesRequest: {
    aggregations: [
      {
        count: {
          "quibusdam": "unde",
          "nulla": "corrupti",
          "illum": "vel",
        },
        field: "error",
        frequency: {
          "suscipit": "iure",
          "magnam": "debitis",
          "ipsa": "delectus",
        },
        histogram: {
          lowerBounds: [
            3834.41,
            4776.65,
          ],
        },
        sum: {
          "placeat": "voluptatum",
          "iusto": "excepturi",
          "nisi": "recusandae",
          "temporibus": "ab",
        },
      },
      {
        count: {
          "veritatis": "deserunt",
          "perferendis": "ipsam",
        },
        field: "repellendus",
        frequency: {
          "quo": "odit",
          "at": "at",
          "maiores": "molestiae",
          "quod": "quod",
        },
        histogram: {
          lowerBounds: [
            5204.78,
            7805.29,
          ],
        },
        sum: {
          "dicta": "nam",
          "officia": "occaecati",
          "fugit": "deleniti",
        },
      },
      {
        count: {
          "optio": "totam",
          "beatae": "commodi",
          "molestiae": "modi",
          "qui": "impedit",
        },
        field: "cum",
        frequency: {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
        histogram: {
          lowerBounds: [
            6176.36,
            1496.75,
          ],
        },
        sum: {
          "dolor": "natus",
          "laboriosam": "hic",
          "saepe": "fuga",
        },
      },
    ],
    filter: "in",
  },
  accessToken: "corporis",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "saepe",
  key: "quidem",
  oauthToken: "architecto",
  parent: "ipsa",
  prettyPrint: false,
  quotaUser: "reiciendis",
  uploadType: "est",
  uploadProtocol: "mollitia",
};

sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req).then((res: MigrationcenterProjectsLocationsAssetsAggregateValuesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `migrationcenterProjectsLocationsAssetsAggregateValues` - Aggregates the requested fields based on provided function.
* `migrationcenterProjectsLocationsAssetsBatchDelete` - Deletes list of Assets.
* `migrationcenterProjectsLocationsAssetsBatchUpdate` - Updates the parameters of a list of assets.
* `migrationcenterProjectsLocationsAssetsList` - Lists all the assets in a given project and location.
* `migrationcenterProjectsLocationsAssetsReportAssetFrames` - Reports a set of frames.
* `migrationcenterProjectsLocationsGroupsAddAssets` - Adds assets to a group.
* `migrationcenterProjectsLocationsGroupsCreate` - Creates a new group in a given project and location.
* `migrationcenterProjectsLocationsGroupsList` - Lists all groups in a given project and location.
* `migrationcenterProjectsLocationsGroupsRemoveAssets` - Removes assets from a group.
* `migrationcenterProjectsLocationsImportJobsCreate` - Creates an import job.
* `migrationcenterProjectsLocationsImportJobsImportDataFilesCreate` - Creates an import data file.
* `migrationcenterProjectsLocationsImportJobsImportDataFilesList` - List import data files.
* `migrationcenterProjectsLocationsImportJobsList` - Lists all import jobs.
* `migrationcenterProjectsLocationsImportJobsRun` - Runs an import job.
* `migrationcenterProjectsLocationsImportJobsValidate` - Validates an import job.
* `migrationcenterProjectsLocationsList` - Lists information about the supported locations for this service.
* `migrationcenterProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `migrationcenterProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `migrationcenterProjectsLocationsPreferenceSetsCreate` - Creates a new preference set in a given project and location.
* `migrationcenterProjectsLocationsPreferenceSetsList` - Lists all the preference sets in a given project and location.
* `migrationcenterProjectsLocationsSourcesCreate` - Creates a new source in a given project and location.
* `migrationcenterProjectsLocationsSourcesDelete` - Deletes a source.
* `migrationcenterProjectsLocationsSourcesGet` - Gets the details of a source.
* `migrationcenterProjectsLocationsSourcesList` - Lists all the sources in a given project and location.
* `migrationcenterProjectsLocationsSourcesPatch` - Updates the parameters of a source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

