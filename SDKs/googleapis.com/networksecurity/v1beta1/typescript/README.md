# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest,
  NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest = {
  dollarXgafv: XgafvEnum.Two,
  addAddressGroupItemsRequest: {
    items: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    requestId: "nulla",
  },
  accessToken: "corrupti",
  addressGroup: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  prettyPrint: false,
  quotaUser: "magnam",
  uploadType: "debitis",
  uploadProtocol: "ipsa",
};

sdk.projects.networksecurityProjectsLocationsAddressGroupsAddItems(req).then((res: NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `networksecurityProjectsLocationsAddressGroupsAddItems` - Adds items to an address group.
* `networksecurityProjectsLocationsAddressGroupsCloneItems` - Clones items from one address group to another.
* `networksecurityProjectsLocationsAddressGroupsCreate` - Creates a new address group in a given project and location.
* `networksecurityProjectsLocationsAddressGroupsList` - Lists address groups in a given project and location.
* `networksecurityProjectsLocationsAddressGroupsListReferences` - Lists references of an address group.
* `networksecurityProjectsLocationsAddressGroupsRemoveItems` - Removes items from an address group.
* `networksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsGatewaySecurityPoliciesCreate` - Creates a new GatewaySecurityPolicy in a given project and location.
* `networksecurityProjectsLocationsGatewaySecurityPoliciesList` - Lists GatewaySecurityPolicies in a given project and location.
* `networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate` - Creates a new GatewaySecurityPolicy in a given project and location.
* `networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList` - Lists GatewaySecurityPolicyRules in a given project and location.
* `networksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `networksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networksecurityProjectsLocationsServerTlsPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurityProjectsLocationsServerTlsPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networksecurityProjectsLocationsTlsInspectionPoliciesCreate` - Creates a new TlsInspectionPolicy in a given project and location.
* `networksecurityProjectsLocationsTlsInspectionPoliciesList` - Lists TlsInspectionPolicies in a given project and location.
* `networksecurityProjectsLocationsUrlListsCreate` - Creates a new UrlList in a given project and location.
* `networksecurityProjectsLocationsUrlListsDelete` - Deletes a single UrlList.
* `networksecurityProjectsLocationsUrlListsGet` - Gets details of a single UrlList.
* `networksecurityProjectsLocationsUrlListsList` - Lists UrlLists in a given project and location.
* `networksecurityProjectsLocationsUrlListsPatch` - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

