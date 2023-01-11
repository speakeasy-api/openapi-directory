<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PatchAttractionRequest, PatchAttractionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PatchAttractionRequest = {
  pathParams: {
    id: "sit",
  },
  headers: {
    tmpsCorrelationId: "voluptas",
  },
  request: {
    changes: [
      {
        from: "expedita",
        op: "test",
        path: "dolor",
        value: {
          "voluptas": "fugit",
          "et": "nihil",
        },
      },
      {
        from: "rerum",
        op: "test",
        path: "debitis",
        value: {
          "et": "ut",
        },
      },
    ],
    relatedEntityId: "dolorem",
    relatedEntityType: "attraction",
    score: 94.199997,
    source: "vitae",
    versionNumber: 4706154865122290029,
  },
};

sdk.patchAttraction(req).then((res: PatchAttractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->