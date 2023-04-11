# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_chat_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_chat_v1/1.40.0/typescript
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
  ChannelEnumChannelTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateChannelRequest = {
  requestBody: {
    attributes: "corrupti",
    friendlyName: "provident",
    type: ChannelEnumChannelTypeEnum.Private,
    uniqueName: "quibusdam",
  },
  serviceSid: "unde",
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
* `createCredential`
* `createInvite`
* `createMember`
* `createMessage`
* `createRole`
* `createService`
* `createUser`
* `deleteChannel`
* `deleteCredential`
* `deleteInvite`
* `deleteMember`
* `deleteMessage`
* `deleteRole`
* `deleteService`
* `deleteUser`
* `fetchChannel`
* `fetchCredential`
* `fetchInvite`
* `fetchMember`
* `fetchMessage`
* `fetchRole`
* `fetchService`
* `fetchUser`
* `listChannel`
* `listCredential`
* `listInvite`
* `listMember`
* `listMessage`
* `listRole`
* `listService`
* `listUser`
* `listUserChannel` - List all Channels for a given User.
* `updateChannel`
* `updateCredential`
* `updateMember`
* `updateMessage`
* `updateRole`
* `updateService`
* `updateUser`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

