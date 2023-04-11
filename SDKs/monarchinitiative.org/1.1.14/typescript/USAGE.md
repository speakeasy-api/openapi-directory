<!-- Start SDK Example Usage -->
```typescript
import {
  GetAssociationBySubjectAndAssocTypeRequest,
  GetAssociationBySubjectAndAssocTypeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAssociationBySubjectAndAssocTypeRequest = {
  associationType: "corrupti",
  evidence: "provident",
  excludeAutomaticAssertions: false,
  object: "distinctio",
  rows: 844266,
  start: 602763,
  subject: "nulla",
  unselectEvidence: false,
  useCompactAssociations: false,
};

sdk.association.getAssociationBySubjectAndAssocType(req).then((res: GetAssociationBySubjectAndAssocTypeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->