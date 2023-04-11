<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCompositionCreateCompositionRequest,
  CreateCompositionResponse,
  CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CompositionEnumFormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateCompositionCreateCompositionRequest = {
  audioSources: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  audioSourcesExcluded: [
    "nulla",
    "corrupti",
    "illum",
  ],
  format: CompositionEnumFormatEnum.Mp4,
  resolution: "error",
  roomSid: "deserunt",
  statusCallback: "http://innocent-effect.org",
  statusCallbackMethod: CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum.Head,
  trim: false,
  videoLayout: "delectus",
};

sdk.createComposition(req).then((res: CreateCompositionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->