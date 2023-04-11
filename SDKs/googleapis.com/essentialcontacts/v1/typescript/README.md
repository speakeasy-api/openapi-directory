# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/essentialcontacts/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/essentialcontacts/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  EssentialcontactsProjectsContactsComputeRequest,
  EssentialcontactsProjectsContactsComputeResponse,
  EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: EssentialcontactsProjectsContactsComputeRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  notificationCategories: [
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.ProductUpdates,
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.Security,
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.Billing,
  ],
  oauthToken: "deserunt",
  pageSize: 384382,
  pageToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.projects.essentialcontactsProjectsContactsCompute(req).then((res: EssentialcontactsProjectsContactsComputeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `essentialcontactsProjectsContactsCompute` - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* `essentialcontactsProjectsContactsCreate` - Adds a new contact for a resource.
* `essentialcontactsProjectsContactsDelete` - Deletes a contact.
* `essentialcontactsProjectsContactsGet` - Gets a single contact.
* `essentialcontactsProjectsContactsList` - Lists the contacts that have been set on a resource.
* `essentialcontactsProjectsContactsPatch` - Updates a contact. Note: A contact's email address cannot be changed.
* `essentialcontactsProjectsContactsSendTestMessage` - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

