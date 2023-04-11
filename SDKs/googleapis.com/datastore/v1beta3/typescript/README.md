# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatastoreProjectsAllocateIdsRequest,
  DatastoreProjectsAllocateIdsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastoreProjectsAllocateIdsRequest = {
  dollarXgafv: XgafvEnum.Two,
  allocateIdsRequest: {
    keys: [
      {
        partitionId: {
          namespaceId: "distinctio",
          projectId: "quibusdam",
        },
        path: [
          {
            id: "nulla",
            kind: "corrupti",
            name: "illum",
          },
          {
            id: "vel",
            kind: "error",
            name: "deserunt",
          },
          {
            id: "suscipit",
            kind: "iure",
            name: "magnam",
          },
        ],
      },
      {
        partitionId: {
          namespaceId: "debitis",
          projectId: "ipsa",
        },
        path: [
          {
            id: "tempora",
            kind: "suscipit",
            name: "molestiae",
          },
          {
            id: "minus",
            kind: "placeat",
            name: "voluptatum",
          },
          {
            id: "iusto",
            kind: "excepturi",
            name: "nisi",
          },
          {
            id: "recusandae",
            kind: "temporibus",
            name: "ab",
          },
        ],
      },
      {
        partitionId: {
          namespaceId: "quis",
          projectId: "veritatis",
        },
        path: [
          {
            id: "perferendis",
            kind: "ipsam",
            name: "repellendus",
          },
          {
            id: "sapiente",
            kind: "quo",
            name: "odit",
          },
          {
            id: "at",
            kind: "at",
            name: "maiores",
          },
        ],
      },
    ],
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "quod",
  fields: "esse",
  key: "totam",
  oauthToken: "porro",
  prettyPrint: false,
  projectId: "dolorum",
  quotaUser: "dicta",
  uploadType: "nam",
  uploadProtocol: "officia",
};

sdk.projects.datastoreProjectsAllocateIds(req).then((res: DatastoreProjectsAllocateIdsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `datastoreProjectsBeginTransaction` - Begins a new transaction.
* `datastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `datastoreProjectsLookup` - Looks up entities by key.
* `datastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `datastoreProjectsRollback` - Rolls back a transaction.
* `datastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `datastoreProjectsRunQuery` - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

