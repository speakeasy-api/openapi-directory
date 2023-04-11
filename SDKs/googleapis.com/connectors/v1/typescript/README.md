# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest,
  ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req).then((res: ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh` - Refresh runtime schema of a connection.
* `connectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `connectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `connectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `connectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `connectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `connectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `connectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `connectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `connectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `connectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `connectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

