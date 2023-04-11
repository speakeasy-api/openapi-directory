# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/replicapool/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/replicapool/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ReplicapoolPoolsDeleteRequest,
  ReplicapoolPoolsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ReplicapoolPoolsDeleteRequest = {
  poolsDeleteRequest: {
    abandonInstances: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  alt: AltEnum.Json,
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  poolName: "illum",
  prettyPrint: false,
  projectName: "vel",
  quotaUser: "error",
  userIp: "deserunt",
  zone: "suscipit",
};

sdk.pools.replicapoolPoolsDelete(req).then((res: ReplicapoolPoolsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pools

* `replicapoolPoolsDelete` - Deletes a replica pool.
* `replicapoolPoolsGet` - Gets information about a single replica pool.
* `replicapoolPoolsInsert` - Inserts a new replica pool.
* `replicapoolPoolsList` - List all replica pools.
* `replicapoolPoolsResize` - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* `replicapoolPoolsUpdatetemplate` - Update the template used by the pool.

### replicas

* `replicapoolReplicasDelete` - Deletes a replica from the pool.
* `replicapoolReplicasGet` - Gets information about a specific replica.
* `replicapoolReplicasList` - Lists all replicas in a pool.
* `replicapoolReplicasRestart` - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

