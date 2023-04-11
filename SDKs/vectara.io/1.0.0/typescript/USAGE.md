<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCorpusRequest,
  CreateCorpusResponse
} from "openapi/dist/sdk/models/operations";
import {
  AdminFilterAttributeTypeEnum,
  AdminFilterAttributeLevelEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreateCorpusRequest = {
  adminCreateCorpusRequest: {
    corpus: {
      customDimensions: [
        {
          description: "provident",
          indexingDefault: 7151.9,
          name: "quibusdam",
          servingDefault: 6027.63,
        },
        {
          description: "nulla",
          indexingDefault: 5448.83,
          name: "illum",
          servingDefault: 4236.55,
        },
        {
          description: "error",
          indexingDefault: 6458.94,
          name: "suscipit",
          servingDefault: 4375.87,
        },
      ],
      description: "magnam",
      dtProvision: "debitis",
      enabled: false,
      encoderId: "ipsa",
      encrypted: false,
      filterAttributes: [
        {
          description: "tempora",
          indexed: false,
          level: AdminFilterAttributeLevelEnum.FilterAttributeLevelDocument,
          name: "molestiae",
          type: AdminFilterAttributeTypeEnum.FilterAttributeTypeText,
        },
        {
          description: "placeat",
          indexed: false,
          level: AdminFilterAttributeLevelEnum.FilterAttributeLevelDocument,
          name: "iusto",
          type: AdminFilterAttributeTypeEnum.FilterAttributeTypeReal,
        },
        {
          description: "nisi",
          indexed: false,
          level: AdminFilterAttributeLevelEnum.FilterAttributeLevelDocumentPart,
          name: "temporibus",
          type: AdminFilterAttributeTypeEnum.FilterAttributeTypeUndefined,
        },
        {
          description: "quis",
          indexed: false,
          level: AdminFilterAttributeLevelEnum.FilterAttributeLevelUndefined,
          name: "deserunt",
          type: AdminFilterAttributeTypeEnum.FilterAttributeTypeUndefined,
        },
      ],
      id: 368241,
      metadataMaxBytes: 832620,
      name: "sapiente",
      swapIenc: false,
      swapQenc: false,
      textless: false,
    },
  },
  customerId: 778157,
};

sdk.adminService.createCorpus(req).then((res: CreateCorpusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->