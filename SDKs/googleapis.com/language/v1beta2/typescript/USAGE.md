<!-- Start SDK Example Usage -->
```typescript
import {
  LanguageDocumentsAnalyzeEntitiesRequest,
  LanguageDocumentsAnalyzeEntitiesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AnalyzeEntitiesRequestEncodingTypeEnum,
  DocumentBoilerplateHandlingEnum,
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
      boilerplateHandling: DocumentBoilerplateHandlingEnum.SkipBoilerplate,
      content: "distinctio",
      gcsContentUri: "quibusdam",
      language: "unde",
      referenceWebUri: "nulla",
      type: DocumentTypeEnum.PlainText,
    },
    encodingType: AnalyzeEntitiesRequestEncodingTypeEnum.Utf32,
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.documents.languageDocumentsAnalyzeEntities(req).then((res: LanguageDocumentsAnalyzeEntitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->