# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromepolicy/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/chromepolicy/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest,
  ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: {
    requests: [
      {
        policySchema: "distinctio",
        policyTargetKey: {
          additionalTargetKeys: {
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
          },
          targetResource: "iure",
        },
      },
      {
        policySchema: "magnam",
        policyTargetKey: {
          additionalTargetKeys: {
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
          },
          targetResource: "iusto",
        },
      },
      {
        policySchema: "excepturi",
        policyTargetKey: {
          additionalTargetKeys: {
            "recusandae": "temporibus",
            "ab": "quis",
          },
          targetResource: "veritatis",
        },
      },
    ],
  },
  accessToken: "deserunt",
  alt: AltEnum.Json,
  callback: "ipsam",
  customer: "repellendus",
  fields: "sapiente",
  key: "quo",
  oauthToken: "odit",
  prettyPrint: false,
  quotaUser: "at",
  uploadType: "at",
  uploadProtocol: "maiores",
};

sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req).then((res: ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `chromepolicyCustomersPoliciesGroupsBatchDelete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsBatchModify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesNetworksDefineCertificate` - Creates a certificate at a specified OU for a customer.
* `chromepolicyCustomersPoliciesNetworksDefineNetwork` - Define a new network.
* `chromepolicyCustomersPoliciesNetworksRemoveCertificate` - Remove an existing certificate by guid.
* `chromepolicyCustomersPoliciesNetworksRemoveNetwork` - Remove an existing network by guid.
* `chromepolicyCustomersPoliciesOrgunitsBatchInherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesOrgunitsBatchModify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesResolve` - Gets the resolved policy values for a list of policies that match a search query.
* `chromepolicyCustomersPolicySchemasGet` - Get a specific policy schema for a customer by its resource name.
* `chromepolicyCustomersPolicySchemasList` - Gets a list of policy schemas that match a specified filter value for a given customer.

### media

* `chromepolicyMediaUpload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

