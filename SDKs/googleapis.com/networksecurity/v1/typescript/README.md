# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest,
  NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AuthorizationPolicyActionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  authorizationPolicyInput: {
    action: AuthorizationPolicyActionEnum.Allow,
    description: "distinctio",
    labels: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    name: "iure",
    rules: [
      {
        destinations: [
          {
            hosts: [
              "delectus",
            ],
            httpHeaderMatch: {
              headerName: "tempora",
              regexMatch: "suscipit",
            },
            methods: [
              "minus",
              "placeat",
            ],
            ports: [
              479977,
              568045,
              392785,
            ],
          },
          {
            hosts: [
              "temporibus",
              "ab",
              "quis",
              "veritatis",
            ],
            httpHeaderMatch: {
              headerName: "deserunt",
              regexMatch: "perferendis",
            },
            methods: [
              "repellendus",
              "sapiente",
            ],
            ports: [
              140350,
              870013,
              870088,
              978619,
            ],
          },
          {
            hosts: [
              "quod",
              "quod",
            ],
            httpHeaderMatch: {
              headerName: "esse",
              regexMatch: "totam",
            },
            methods: [
              "dolorum",
              "dicta",
              "nam",
              "officia",
            ],
            ports: [
              143353,
              537373,
              944669,
            ],
          },
          {
            hosts: [
              "totam",
              "beatae",
              "commodi",
              "molestiae",
            ],
            httpHeaderMatch: {
              headerName: "modi",
              regexMatch: "qui",
            },
            methods: [
              "cum",
              "esse",
              "ipsum",
              "excepturi",
            ],
            ports: [
              18789,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "sed",
              "iste",
              "dolor",
            ],
            principals: [
              "laboriosam",
              "hic",
              "saepe",
            ],
          },
          {
            ipBlocks: [
              "in",
              "corporis",
              "iste",
            ],
            principals: [
              "saepe",
              "quidem",
            ],
          },
        ],
      },
      {
        destinations: [
          {
            hosts: [
              "reiciendis",
            ],
            httpHeaderMatch: {
              headerName: "est",
              regexMatch: "mollitia",
            },
            methods: [
              "dolores",
              "dolorem",
              "corporis",
            ],
            ports: [
              750686,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "nemo",
              "minima",
              "excepturi",
            ],
            principals: [
              "iure",
            ],
          },
          {
            ipBlocks: [
              "doloribus",
              "sapiente",
              "architecto",
            ],
            principals: [
              "dolorem",
              "culpa",
              "consequuntur",
            ],
          },
        ],
      },
    ],
  },
  accessToken: "repellat",
  alt: AltEnum.Media,
  authorizationPolicyId: "occaecati",
  callback: "numquam",
  fields: "commodi",
  key: "quam",
  oauthToken: "molestiae",
  parent: "velit",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "quia",
  uploadProtocol: "quis",
};

sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req).then((res: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `networksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `networksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networksecurityProjectsLocationsServerTlsPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurityProjectsLocationsServerTlsPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

