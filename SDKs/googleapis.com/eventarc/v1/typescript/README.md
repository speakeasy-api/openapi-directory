# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/eventarc/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/eventarc/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  EventarcProjectsLocationsChannelConnectionsCreateRequest,
  EventarcProjectsLocationsChannelConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: EventarcProjectsLocationsChannelConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  channelConnectionInput: {
    activationToken: "provident",
    channel: "distinctio",
    name: "quibusdam",
  },
  accessToken: "unde",
  alt: AltEnum.Proto,
  callback: "corrupti",
  channelConnectionId: "illum",
  fields: "vel",
  key: "error",
  oauthToken: "deserunt",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req).then((res: EventarcProjectsLocationsChannelConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `eventarcProjectsLocationsChannelConnectionsCreate` - Create a new ChannelConnection in a particular project and location.
* `eventarcProjectsLocationsChannelConnectionsList` - List channel connections.
* `eventarcProjectsLocationsChannelsCreate` - Create a new channel in a particular project and location.
* `eventarcProjectsLocationsChannelsList` - List channels.
* `eventarcProjectsLocationsList` - Lists information about the supported locations for this service.
* `eventarcProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `eventarcProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `eventarcProjectsLocationsProvidersList` - List providers.
* `eventarcProjectsLocationsTriggersCreate` - Create a new trigger in a particular project and location.
* `eventarcProjectsLocationsTriggersDelete` - Delete a single trigger.
* `eventarcProjectsLocationsTriggersGet` - Get a single trigger.
* `eventarcProjectsLocationsTriggersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `eventarcProjectsLocationsTriggersList` - List triggers.
* `eventarcProjectsLocationsTriggersPatch` - Update a single trigger.
* `eventarcProjectsLocationsTriggersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `eventarcProjectsLocationsTriggersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

