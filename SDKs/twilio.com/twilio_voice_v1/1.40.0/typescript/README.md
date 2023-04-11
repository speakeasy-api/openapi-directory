# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_voice_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_voice_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateByocTrunkCreateByocTrunkRequest,
  CreateByocTrunkResponse,
  CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum,
  CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum,
  CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateByocTrunkCreateByocTrunkRequest = {
  cnamLookupEnabled: false,
  connectionPolicySid: "corrupti",
  friendlyName: "provident",
  fromDomainSid: "distinctio",
  statusCallbackMethod: CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum.Delete,
  statusCallbackUrl: "https://tidy-mascara.org",
  voiceFallbackMethod: CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum.Post,
  voiceFallbackUrl: "https://present-giggle.info",
  voiceMethod: CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum.Get,
  voiceUrl: "https://awesome-voter.biz",
};

sdk.createByocTrunk(req).then((res: CreateByocTrunkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createByocTrunk`
* `createConnectionPolicy`
* `createConnectionPolicyTarget`
* `createDialingPermissionsCountryBulkUpdate` - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `createIpRecord`
* `createSourceIpMapping`
* `deleteArchivedCall` - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* `deleteByocTrunk`
* `deleteConnectionPolicy`
* `deleteConnectionPolicyTarget`
* `deleteIpRecord`
* `deleteSourceIpMapping`
* `fetchByocTrunk`
* `fetchConnectionPolicy`
* `fetchConnectionPolicyTarget`
* `fetchDialingPermissionsCountry` - Retrieve voice dialing country permissions identified by the given ISO country code
* `fetchDialingPermissionsSettings` - Retrieve voice dialing permissions inheritance for the sub-account
* `fetchIpRecord`
* `fetchSourceIpMapping`
* `listByocTrunk`
* `listConnectionPolicy`
* `listConnectionPolicyTarget`
* `listDialingPermissionsCountry` - Retrieve all voice dialing country permissions for this account
* `listDialingPermissionsHrsPrefixes` - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `listIpRecord`
* `listSourceIpMapping`
* `updateByocTrunk`
* `updateConnectionPolicy`
* `updateConnectionPolicyTarget`
* `updateDialingPermissionsSettings` - Update voice dialing permissions inheritance for the sub-account
* `updateIpRecord`
* `updateSourceIpMapping`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

