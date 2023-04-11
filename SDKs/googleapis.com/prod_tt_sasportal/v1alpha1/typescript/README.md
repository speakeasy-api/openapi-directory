# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/prod_tt_sasportal/v1alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/prod_tt_sasportal/v1alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ProdTtSasportalCustomersListRequest,
  ProdTtSasportalCustomersListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ProdTtSasportalCustomersListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.customers.prodTtSasportalCustomersList(req).then((res: ProdTtSasportalCustomersListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `prodTtSasportalCustomersList` - Returns a list of requested customers.
* `prodTtSasportalCustomersProvisionDeployment` - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### installer

* `prodTtSasportalInstallerGenerateSecret` - Generates a secret to be used with the ValidateInstaller.
* `prodTtSasportalInstallerValidate` - Validates the identity of a Certified Professional Installer (CPI).

### nodes

* `prodTtSasportalNodesDevicesSignDevice` - Signs a device.
* `prodTtSasportalNodesDevicesUpdateSigned` - Updates a signed device.
* `prodTtSasportalNodesNodesDelete` - Deletes a node.
* `prodTtSasportalNodesNodesDeploymentsCreate` - Creates a new deployment.
* `prodTtSasportalNodesNodesDeploymentsList` - Lists deployments.
* `prodTtSasportalNodesNodesDevicesCreate` - Creates a device under a node or customer.
* `prodTtSasportalNodesNodesDevicesCreateSigned` - Creates a signed device under a node or customer.
* `prodTtSasportalNodesNodesDevicesList` - Lists devices under a node or customer.
* `prodTtSasportalNodesNodesGet` - Returns a requested node.
* `prodTtSasportalNodesNodesMove` - Moves a node under another node or customer.
* `prodTtSasportalNodesNodesNodesCreate` - Creates a new node.
* `prodTtSasportalNodesNodesNodesList` - Lists nodes.
* `prodTtSasportalNodesNodesPatch` - Updates an existing node.

### policies

* `prodTtSasportalPoliciesGet` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `prodTtSasportalPoliciesSet` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `prodTtSasportalPoliciesTest` - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

