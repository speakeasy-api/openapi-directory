# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_numbers_v2/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_numbers_v2/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBundleCreateBundleRequest,
  CreateBundleResponse
} from "openapi/dist/sdk/models/operations";
import {
  BundleEnumEndUserTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateBundleCreateBundleRequest = {
  email: "Larue_Rau85@yahoo.com",
  endUserType: BundleEnumEndUserTypeEnum.Business,
  friendlyName: "illum",
  isoCountry: "vel",
  numberType: "error",
  regulationSid: "deserunt",
  statusCallback: "http://innocent-effect.org",
};

sdk.createBundle(req).then((res: CreateBundleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createBundle` - Create a new Bundle.
* `createBundleCopy` - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* `createEndUser` - Create a new End User.
* `createEvaluation` - Creates an evaluation for a bundle
* `createItemAssignment` - Create a new Assigned Item.
* `createReplaceItems` - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* `createSupportingDocument` - Create a new Supporting Document.
* `deleteBundle` - Delete a specific Bundle.
* `deleteEndUser` - Delete a specific End User.
* `deleteItemAssignment` - Remove an Assignment Item Instance.
* `deleteSupportingDocument` - Delete a specific Supporting Document.
* `fetchBundle` - Fetch a specific Bundle instance.
* `fetchEndUser` - Fetch specific End User Instance.
* `fetchEndUserType` - Fetch a specific End-User Type Instance.
* `fetchEvaluation` - Fetch specific Evaluation Instance.
* `fetchItemAssignment` - Fetch specific Assigned Item Instance.
* `fetchRegulation` - Fetch specific Regulation Instance.
* `fetchSupportingDocument` - Fetch specific Supporting Document Instance.
* `fetchSupportingDocumentType` - Fetch a specific Supporting Document Type Instance.
* `listBundle` - Retrieve a list of all Bundles for an account.
* `listBundleCopy` - Retrieve a list of all Bundles Copies for a Bundle.
* `listEndUser` - Retrieve a list of all End User for an account.
* `listEndUserType` - Retrieve a list of all End-User Types.
* `listEvaluation` - Retrieve a list of Evaluations associated to the Bundle resource.
* `listItemAssignment` - Retrieve a list of all Assigned Items for an account.
* `listRegulation` - Retrieve a list of all Regulations.
* `listSupportingDocument` - Retrieve a list of all Supporting Document for an account.
* `listSupportingDocumentType` - Retrieve a list of all Supporting Document Types.
* `updateBundle` - Updates a Bundle in an account.
* `updateEndUser` - Update an existing End User.
* `updateSupportingDocument` - Update an existing Supporting Document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

