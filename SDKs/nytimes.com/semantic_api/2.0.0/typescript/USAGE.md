<!-- Start SDK Example Usage -->
```typescript
import {
  GetNameConceptTypeSpecificConceptJsonRequest,
  GetNameConceptTypeSpecificConceptJsonResponse,
  GetNameConceptTypeSpecificConceptJsonConceptTypeEnum,
  GetNameConceptTypeSpecificConceptJsonFieldsEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetNameConceptTypeSpecificConceptJsonRequest = {
  conceptType: GetNameConceptTypeSpecificConceptJsonConceptTypeEnum.NytdOrg,
  fields: GetNameConceptTypeSpecificConceptJsonFieldsEnum.Combinations,
  query: "distinctio",
  specificConcept: "quibusdam",
};

sdk.getNameConceptTypeSpecificConceptJson(req).then((res: GetNameConceptTypeSpecificConceptJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->