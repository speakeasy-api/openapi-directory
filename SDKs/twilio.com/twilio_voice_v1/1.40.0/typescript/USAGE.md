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