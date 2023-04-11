<!-- Start SDK Example Usage -->
```typescript
import {
  FindRequest,
  FindResponse,
  FindIncludeLicensedContentEnum,
  FindIncludeSpellcheckEnum,
  FindIncludeTestEnum,
  FindSourceEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindRequest = {
  classificationId: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  classificationName: [
    "nulla",
    "corrupti",
    "illum",
  ],
  id: "vel",
  includeLicensedContent: FindIncludeLicensedContentEnum.No,
  includeSpellcheck: FindIncludeSpellcheckEnum.No,
  includeTest: FindIncludeTestEnum.No,
  keyword: "iure",
  locale: "magnam",
  page: "debitis",
  size: "ipsa",
  sort: "delectus",
  source: FindSourceEnum.Universe,
};

sdk.find(req).then((res: FindResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->