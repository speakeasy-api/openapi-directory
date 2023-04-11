# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigqueryconnection/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigqueryconnection/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BigqueryconnectionProjectsLocationsConnectionsCreateRequest,
  BigqueryconnectionProjectsLocationsConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CloudSqlPropertiesTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigqueryconnectionProjectsLocationsConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionInput: {
    cloudSql: {
      credential: {
        password: "provident",
        username: "Micheal_Sporer",
      },
      database: "corrupti",
      instanceId: "illum",
      type: CloudSqlPropertiesTypeEnum.Postgres,
    },
    description: "error",
    friendlyName: "deserunt",
    name: "suscipit",
  },
  accessToken: "iure",
  alt: AltEnum.Json,
  callback: "debitis",
  connectionId: "ipsa",
  fields: "delectus",
  key: "tempora",
  oauthToken: "suscipit",
  parent: "molestiae",
  prettyPrint: false,
  quotaUser: "minus",
  uploadType: "placeat",
  uploadProtocol: "voluptatum",
};

sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req).then((res: BigqueryconnectionProjectsLocationsConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `bigqueryconnectionProjectsLocationsConnectionsCreate` - Creates a new connection.
* `bigqueryconnectionProjectsLocationsConnectionsDelete` - Deletes connection and associated credential.
* `bigqueryconnectionProjectsLocationsConnectionsGet` - Returns specified connection.
* `bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `bigqueryconnectionProjectsLocationsConnectionsList` - Returns a list of connections in the given project.
* `bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `bigqueryconnectionProjectsLocationsConnectionsUpdateCredential` - Sets the credential for the specified connection.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

