<!-- Start SDK Example Usage -->
```typescript
import {
  CheckSpellingRussianRequest,
  CheckSpellingRussianResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CheckSpellingRussianRequest = {
  requestBody: {
    langCode: "ru",
    text: "Добрый вее!",
  },
  xRapidAPIKey: "corrupti",
};

sdk.checkSpellingRussian(req).then((res: CheckSpellingRussianResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->