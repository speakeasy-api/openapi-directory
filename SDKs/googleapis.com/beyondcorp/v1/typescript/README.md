# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/beyondcorp/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/beyondcorp/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BeyondcorpProjectsLocationsAppConnectionsCreateRequest,
  BeyondcorpProjectsLocationsAppConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum,
  GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BeyondcorpProjectsLocationsAppConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudBeyondcorpAppconnectionsV1AppConnectionInput: {
    applicationEndpoint: {
      host: "provident",
      port: 715190,
    },
    connectors: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    displayName: "vel",
    gateway: {
      appGateway: "error",
      type: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum.GcpRegionalMig,
    },
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    name: "delectus",
    type: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum.TypeUnspecified,
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  appConnectionId: "minus",
  callback: "placeat",
  fields: "voluptatum",
  key: "iusto",
  oauthToken: "excepturi",
  parent: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  requestId: "temporibus",
  uploadType: "ab",
  uploadProtocol: "quis",
  validateOnly: false,
};

sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req).then((res: BeyondcorpProjectsLocationsAppConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `beyondcorpProjectsLocationsAppConnectionsCreate` - Creates a new AppConnection in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsList` - Lists AppConnections in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsResolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `beyondcorpProjectsLocationsAppConnectorsCreate` - Creates a new AppConnector in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsList` - Lists AppConnectors in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsReportStatus` - Report status for a given connector.
* `beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `beyondcorpProjectsLocationsAppGatewaysCreate` - Creates a new AppGateway in a given project and location.
* `beyondcorpProjectsLocationsAppGatewaysList` - Lists AppGateways in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesCreate` - Creates a new ClientConnectorService in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesList` - Lists ClientConnectorServices in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesPatch` - Updates the parameters of a single ClientConnectorService.
* `beyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorpProjectsLocationsClientGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `beyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

