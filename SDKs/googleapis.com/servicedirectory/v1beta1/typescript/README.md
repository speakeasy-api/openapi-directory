# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicedirectory/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicedirectory/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ServicedirectoryProjectsLocationsListRequest,
  ServicedirectoryProjectsLocationsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServicedirectoryProjectsLocationsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.servicedirectoryProjectsLocationsList(req).then((res: ServicedirectoryProjectsLocationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `servicedirectoryProjectsLocationsList` - Lists information about the supported locations for this service.
* `servicedirectoryProjectsLocationsNamespacesCreate` - Creates a namespace, and returns the new namespace.
* `servicedirectoryProjectsLocationsNamespacesList` - Lists all namespaces.
* `servicedirectoryProjectsLocationsNamespacesServicesCreate` - Creates a service, and returns the new service.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate` - Creates an endpoint, and returns the new endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete` - Deletes an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet` - Gets an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsList` - Lists all endpoints.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch` - Updates an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesList` - Lists all services belonging to a namespace.
* `servicedirectoryProjectsLocationsNamespacesServicesResolve` - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* `servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy` - Gets the IAM Policy for a resource
* `servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy` - Sets the IAM Policy for a resource
* `servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions` - Tests IAM permissions for a resource (namespace, service or service workload only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

