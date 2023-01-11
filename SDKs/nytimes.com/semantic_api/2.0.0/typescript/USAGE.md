<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetNameConceptTypeSpecificConceptJsonRequest, GetNameConceptTypeSpecificConceptJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetNameConceptTypeSpecificConceptJsonRequest = {
  pathParams: {
    conceptType: "nytd_org",
    specificConcept: "voluptas",
  },
  queryParams: {
    fields: "links",
    query: "expedita",
  },
};

sdk.getNameConceptTypeSpecificConceptJson(req).then((res: GetNameConceptTypeSpecificConceptJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->