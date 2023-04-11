# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trusthub_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trusthub_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCustomerProfileCreateCustomerProfileRequest,
  CreateCustomerProfileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCustomerProfileCreateCustomerProfileRequest = {
  email: "Larue_Rau85@yahoo.com",
  friendlyName: "corrupti",
  policySid: "illum",
  statusCallback: "http://physical-pegboard.info",
};

sdk.createCustomerProfile(req).then((res: CreateCustomerProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createCustomerProfile` - Create a new Customer-Profile.
* `createCustomerProfileChannelEndpointAssignment` - Create a new Assigned Item.
* `createCustomerProfileEntityAssignment` - Create a new Assigned Item.
* `createCustomerProfileEvaluation` - Create a new Evaluation
* `createEndUser` - Create a new End User.
* `createSupportingDocument` - Create a new Supporting Document.
* `createTrustProduct` - Create a new Customer-Profile.
* `createTrustProductChannelEndpointAssignment` - Create a new Assigned Item.
* `createTrustProductEntityAssignment` - Create a new Assigned Item.
* `createTrustProductEvaluation` - Create a new Evaluation
* `deleteCustomerProfile` - Delete a specific Customer-Profile.
* `deleteCustomerProfileChannelEndpointAssignment` - Remove an Assignment Item Instance.
* `deleteCustomerProfileEntityAssignment` - Remove an Assignment Item Instance.
* `deleteEndUser` - Delete a specific End User.
* `deleteSupportingDocument` - Delete a specific Supporting Document.
* `deleteTrustProduct` - Delete a specific Customer-Profile.
* `deleteTrustProductChannelEndpointAssignment` - Remove an Assignment Item Instance.
* `deleteTrustProductEntityAssignment` - Remove an Assignment Item Instance.
* `fetchCustomerProfile` - Fetch a specific Customer-Profile instance.
* `fetchCustomerProfileChannelEndpointAssignment` - Fetch specific Assigned Item Instance.
* `fetchCustomerProfileEntityAssignment` - Fetch specific Assigned Item Instance.
* `fetchCustomerProfileEvaluation` - Fetch specific Evaluation Instance.
* `fetchEndUser` - Fetch specific End User Instance.
* `fetchEndUserType` - Fetch a specific End-User Type Instance.
* `fetchPolicies` - Fetch specific Policy Instance.
* `fetchSupportingDocument` - Fetch specific Supporting Document Instance.
* `fetchSupportingDocumentType` - Fetch a specific Supporting Document Type Instance.
* `fetchTrustProduct` - Fetch a specific Customer-Profile instance.
* `fetchTrustProductChannelEndpointAssignment` - Fetch specific Assigned Item Instance.
* `fetchTrustProductEntityAssignment` - Fetch specific Assigned Item Instance.
* `fetchTrustProductEvaluation` - Fetch specific Evaluation Instance.
* `listCustomerProfile` - Retrieve a list of all Customer-Profiles for an account.
* `listCustomerProfileChannelEndpointAssignment` - Retrieve a list of all Assigned Items for an account.
* `listCustomerProfileEntityAssignment` - Retrieve a list of all Assigned Items for an account.
* `listCustomerProfileEvaluation` - Retrieve a list of Evaluations associated to the customer_profile resource.
* `listEndUser` - Retrieve a list of all End User for an account.
* `listEndUserType` - Retrieve a list of all End-User Types.
* `listPolicies` - Retrieve a list of all Policys.
* `listSupportingDocument` - Retrieve a list of all Supporting Document for an account.
* `listSupportingDocumentType` - Retrieve a list of all Supporting Document Types.
* `listTrustProduct` - Retrieve a list of all Customer-Profiles for an account.
* `listTrustProductChannelEndpointAssignment` - Retrieve a list of all Assigned Items for an account.
* `listTrustProductEntityAssignment` - Retrieve a list of all Assigned Items for an account.
* `listTrustProductEvaluation` - Retrieve a list of Evaluations associated to the trust_product resource.
* `updateCustomerProfile` - Updates a Customer-Profile in an account.
* `updateEndUser` - Update an existing End User.
* `updateSupportingDocument` - Update an existing Supporting Document.
* `updateTrustProduct` - Updates a Customer-Profile in an account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

