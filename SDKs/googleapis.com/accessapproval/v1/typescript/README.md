# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accessapproval/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accessapproval/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AccessapprovalProjectsApprovalRequestsApproveRequest,
  AccessapprovalProjectsApprovalRequestsApproveResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccessapprovalProjectsApprovalRequestsApproveRequest = {
  dollarXgafv: XgafvEnum.Two,
  approveApprovalRequestMessage: {
    expireTime: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req).then((res: AccessapprovalProjectsApprovalRequestsApproveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `accessapprovalProjectsApprovalRequestsApprove` - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `accessapprovalProjectsApprovalRequestsDismiss` - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* `accessapprovalProjectsApprovalRequestsGet` - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* `accessapprovalProjectsApprovalRequestsInvalidate` - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* `accessapprovalProjectsApprovalRequestsList` - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* `accessapprovalProjectsDeleteAccessApprovalSettings` - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* `accessapprovalProjectsUpdateAccessApprovalSettings` - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

