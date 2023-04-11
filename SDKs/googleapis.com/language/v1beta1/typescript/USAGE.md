<!-- Start SDK Example Usage -->
```typescript
import {
  LanguageDocumentsAnalyzeEntitiesRequest,
  LanguageDocumentsAnalyzeEntitiesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AnalyzeEntitiesRequestEncodingTypeEnum,
  DocumentTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LanguageDocumentsAnalyzeEntitiesRequest = {
  dollarXgafv: XgafvEnum.Two,
  analyzeEntitiesRequest: {
    document: {
      content: "provident",
      gcsContentUri: "distinctio",
      language: "quibusdam",
      type: DocumentTypeEnum.PlainText,
    },
    encodingType: AnalyzeEntitiesRequestEncodingTypeEnum.Utf32,
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.documents.languageDocumentsAnalyzeEntities(req).then((res: LanguageDocumentsAnalyzeEntitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->