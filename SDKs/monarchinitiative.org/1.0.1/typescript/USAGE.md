<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAssociationBySubjectAndAssocTypeRequest, GetAssociationBySubjectAndAssocTypeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAssociationBySubjectAndAssocTypeRequest = {
  pathParams: {
    associationType: "sit",
  },
  queryParams: {
    evidence: "voluptas",
    excludeAutomaticAssertions: true,
    object: "expedita",
    rows: 3390393562759376202,
    start: 2669985732393126063,
    subject: "expedita",
    unselectEvidence: true,
    useCompactAssociations: true,
  },
};

sdk.association.getAssociationBySubjectAndAssocType(req).then((res: GetAssociationBySubjectAndAssocTypeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->