# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vpcaccess/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/vpcaccess/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  VpcaccessProjectsLocationsConnectorsCreateRequest,
  VpcaccessProjectsLocationsConnectorsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VpcaccessProjectsLocationsConnectorsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectorInput: {
    ipCidrRange: "provident",
    machineType: "distinctio",
    maxInstances: 844266,
    maxThroughput: 602763,
    minInstances: 857946,
    minThroughput: 544883,
    name: "illum",
    network: "vel",
    subnet: {
      name: "error",
      projectId: "deserunt",
    },
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "magnam",
  connectorId: "debitis",
  fields: "ipsa",
  key: "delectus",
  oauthToken: "tempora",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req).then((res: VpcaccessProjectsLocationsConnectorsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `vpcaccessProjectsLocationsConnectorsCreate` - Creates a Serverless VPC Access connector, returns an operation.
* `vpcaccessProjectsLocationsConnectorsDelete` - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* `vpcaccessProjectsLocationsConnectorsList` - Lists Serverless VPC Access connectors.
* `vpcaccessProjectsLocationsConnectorsPatch` - Updates a Serverless VPC Access connector, returns an operation.
* `vpcaccessProjectsLocationsList` - Lists information about the supported locations for this service.
* `vpcaccessProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `vpcaccessProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

