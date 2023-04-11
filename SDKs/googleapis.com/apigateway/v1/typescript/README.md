# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/apigateway/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/apigateway/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ApigatewayProjectsLocationsApisConfigsCreateRequest,
  ApigatewayProjectsLocationsApisConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApigatewayProjectsLocationsApisConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  apigatewayApiConfigInput: {
    displayName: "provident",
    gatewayServiceAccount: "distinctio",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "unde",
          path: "nulla",
        },
        source: [
          {
            contents: "illum",
            path: "vel",
          },
          {
            contents: "error",
            path: "deserunt",
          },
          {
            contents: "suscipit",
            path: "iure",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "magnam",
          path: "debitis",
        },
        source: [
          {
            contents: "delectus",
            path: "tempora",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "suscipit",
          path: "molestiae",
        },
        source: [
          {
            contents: "placeat",
            path: "voluptatum",
          },
          {
            contents: "iusto",
            path: "excepturi",
          },
          {
            contents: "nisi",
            path: "recusandae",
          },
          {
            contents: "temporibus",
            path: "ab",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "quis",
          path: "veritatis",
        },
        source: [
          {
            contents: "perferendis",
            path: "ipsam",
          },
          {
            contents: "repellendus",
            path: "sapiente",
          },
          {
            contents: "quo",
            path: "odit",
          },
        ],
      },
    ],
    labels: {
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
      "totam": "porro",
    },
    managedServiceConfigs: [
      {
        contents: "dicta",
        path: "nam",
      },
      {
        contents: "officia",
        path: "occaecati",
      },
      {
        contents: "fugit",
        path: "deleniti",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "optio",
          path: "totam",
        },
      },
      {
        document: {
          contents: "beatae",
          path: "commodi",
        },
      },
      {
        document: {
          contents: "molestiae",
          path: "modi",
        },
      },
      {
        document: {
          contents: "qui",
          path: "impedit",
        },
      },
    ],
  },
  accessToken: "cum",
  alt: AltEnum.Media,
  apiConfigId: "ipsum",
  callback: "excepturi",
  fields: "aspernatur",
  key: "perferendis",
  oauthToken: "ad",
  parent: "natus",
  prettyPrint: false,
  quotaUser: "sed",
  uploadType: "iste",
  uploadProtocol: "dolor",
};

sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req).then((res: ApigatewayProjectsLocationsApisConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `apigatewayProjectsLocationsApisConfigsCreate` - Creates a new ApiConfig in a given project and location.
* `apigatewayProjectsLocationsApisConfigsList` - Lists ApiConfigs in a given project and location.
* `apigatewayProjectsLocationsApisCreate` - Creates a new Api in a given project and location.
* `apigatewayProjectsLocationsApisList` - Lists Apis in a given project and location.
* `apigatewayProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `apigatewayProjectsLocationsGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigatewayProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `apigatewayProjectsLocationsGatewaysPatch` - Updates the parameters of a single Gateway.
* `apigatewayProjectsLocationsGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigatewayProjectsLocationsGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `apigatewayProjectsLocationsList` - Lists information about the supported locations for this service.
* `apigatewayProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigatewayProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigatewayProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigatewayProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

