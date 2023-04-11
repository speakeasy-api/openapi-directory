# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/orgpolicy/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/orgpolicy/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  OrgpolicyOrganizationsCustomConstraintsCreateRequest,
  OrgpolicyOrganizationsCustomConstraintsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum,
  GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OrgpolicyOrganizationsCustomConstraintsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudOrgpolicyV2CustomConstraintInput: {
    actionType: GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum.Allow,
    condition: "distinctio",
    description: "quibusdam",
    displayName: "unde",
    methodTypes: [
      GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.Update,
      GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.Delete,
      GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.Create,
      GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.Update,
    ],
    name: "deserunt",
    resourceTypes: [
      "iure",
      "magnam",
    ],
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  fields: "tempora",
  key: "suscipit",
  oauthToken: "molestiae",
  parent: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.organizations.orgpolicyOrganizationsCustomConstraintsCreate(req).then((res: OrgpolicyOrganizationsCustomConstraintsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### organizations

* `orgpolicyOrganizationsCustomConstraintsCreate` - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* `orgpolicyOrganizationsCustomConstraintsList` - Retrieves all of the custom constraints that exist on a particular organization resource.

### projects

* `orgpolicyProjectsConstraintsList` - Lists constraints that could be applied on the specified resource.
* `orgpolicyProjectsPoliciesCreate` - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* `orgpolicyProjectsPoliciesDelete` - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* `orgpolicyProjectsPoliciesGet` - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* `orgpolicyProjectsPoliciesGetEffectivePolicy` - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* `orgpolicyProjectsPoliciesList` - Retrieves all of the policies that exist on a particular resource.
* `orgpolicyProjectsPoliciesPatch` - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

