# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_ip_messaging_v2/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_ip_messaging_v2/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateChannelRequest,
  CreateChannelResponse
} from "openapi/dist/sdk/models/operations";
import {
  ChannelEnumWebhookEnabledTypeEnum,
  ChannelEnumChannelTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateChannelRequest = {
  requestBody: {
    attributes: "corrupti",
    createdBy: "provident",
    dateCreated: "2021-04-24T16:27:50.833Z",
    dateUpdated: "2021-04-14T16:47:33.722Z",
    friendlyName: "corrupti",
    type: ChannelEnumChannelTypeEnum.Private,
    uniqueName: "vel",
  },
  serviceSid: "error",
  xTwilioWebhookEnabled: ChannelEnumWebhookEnabledTypeEnum.False,
};

sdk.createChannel(req).then((res: CreateChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createChannel`
* `createChannelWebhook`
* `createCredential`
* `createInvite`
* `createMember`
* `createMessage`
* `createRole`
* `createService`
* `createUser`
* `deleteBinding`
* `deleteChannel`
* `deleteChannelWebhook`
* `deleteCredential`
* `deleteInvite`
* `deleteMember`
* `deleteMessage`
* `deleteRole`
* `deleteService`
* `deleteUser`
* `deleteUserBinding`
* `deleteUserChannel`
* `fetchBinding`
* `fetchChannel`
* `fetchChannelWebhook`
* `fetchCredential`
* `fetchInvite`
* `fetchMember`
* `fetchMessage`
* `fetchRole`
* `fetchService`
* `fetchUser`
* `fetchUserBinding`
* `fetchUserChannel`
* `listBinding`
* `listChannel`
* `listChannelWebhook`
* `listCredential`
* `listInvite`
* `listMember`
* `listMessage`
* `listRole`
* `listService`
* `listUser`
* `listUserBinding`
* `listUserChannel`
* `updateChannel`
* `updateChannelWebhook`
* `updateCredential`
* `updateMember`
* `updateMessage`
* `updateRole`
* `updateService`
* `updateUser`
* `updateUserChannel`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

