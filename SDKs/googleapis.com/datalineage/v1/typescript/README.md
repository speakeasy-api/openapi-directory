# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datalineage/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datalineage/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatalineageProjectsLocationsBatchSearchLinkProcessesRequest,
  DatalineageProjectsLocationsBatchSearchLinkProcessesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatalineageProjectsLocationsBatchSearchLinkProcessesRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: {
    links: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    pageSize: 857946,
    pageToken: "corrupti",
  },
  accessToken: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req).then((res: DatalineageProjectsLocationsBatchSearchLinkProcessesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datalineageProjectsLocationsBatchSearchLinkProcesses` - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* `datalineageProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datalineageProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datalineageProjectsLocationsProcessesCreate` - Creates a new process.
* `datalineageProjectsLocationsProcessesList` - List processes in the given project and location. List order is descending by insertion time.
* `datalineageProjectsLocationsProcessesRunsCreate` - Creates a new run.
* `datalineageProjectsLocationsProcessesRunsLineageEventsCreate` - Creates a new lineage event.
* `datalineageProjectsLocationsProcessesRunsLineageEventsDelete` - Deletes the lineage event with the specified name.
* `datalineageProjectsLocationsProcessesRunsLineageEventsGet` - Gets details of a specified lineage event.
* `datalineageProjectsLocationsProcessesRunsLineageEventsList` - Lists lineage events in the given project and location. The list order is not defined.
* `datalineageProjectsLocationsProcessesRunsList` - Lists runs in the given project and location. List order is descending by `start_time`.
* `datalineageProjectsLocationsProcessesRunsPatch` - Updates a run.
* `datalineageProjectsLocationsSearchLinks` - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

