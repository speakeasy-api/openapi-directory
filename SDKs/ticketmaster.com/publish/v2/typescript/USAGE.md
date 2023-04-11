<!-- Start SDK Example Usage -->
```typescript
import {
  PatchAttractionRequest,
  PatchAttractionResponse
} from "openapi/dist/sdk/models/operations";
import {
  AugmentationDataRelatedEntityTypeEnum,
  ChangeOpEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PatchAttractionRequest = {
  augmentationData: {
    changes: [
      {
        from: "provident",
        op: ChangeOpEnum.Copy,
        path: "quibusdam",
        value: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
      },
      {
        from: "suscipit",
        op: ChangeOpEnum.Replace,
        path: "magnam",
        value: {
          "ipsa": "delectus",
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
      },
      {
        from: "iusto",
        op: ChangeOpEnum.Move,
        path: "nisi",
        value: {
          "temporibus": "ab",
          "quis": "veritatis",
          "deserunt": "perferendis",
          "ipsam": "repellendus",
        },
      },
    ],
    relatedEntityId: "sapiente",
    relatedEntityType: AugmentationDataRelatedEntityTypeEnum.Venue,
    score: 1403.5,
    source: "at",
    versionNumber: 870088,
  },
  tmpsCorrelationId: "maiores",
  id: "molestiae",
};

sdk.patchAttraction(req).then((res: PatchAttractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->