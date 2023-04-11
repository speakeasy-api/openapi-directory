<!-- Start SDK Example Usage -->
```typescript
import {
  GetSectionFormatRequest,
  GetSectionFormatResponse,
  GetSectionFormatFormatEnum,
  GetSectionFormatSectionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetSectionFormatRequest = {
  callback: "corrupti",
  format: GetSectionFormatFormatEnum.Jsonp,
  section: GetSectionFormatSectionEnum.Tmagazine,
};

sdk.stories.getSectionFormat(req).then((res: GetSectionFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->