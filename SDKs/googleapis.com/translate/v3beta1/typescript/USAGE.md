<!-- Start SDK Example Usage -->
```typescript
import {
  TranslateProjectsLocationsBatchTranslateDocumentRequest,
  TranslateProjectsLocationsBatchTranslateDocumentResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TranslateProjectsLocationsBatchTranslateDocumentRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchTranslateDocumentRequest: {
    customizedAttribution: "provident",
    enableShadowRemovalNativePdf: false,
    formatConversions: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    glossaries: {
      "deserunt": {
        glossary: "suscipit",
        ignoreCase: false,
      },
      "iure": {
        glossary: "magnam",
        ignoreCase: false,
      },
      "debitis": {
        glossary: "ipsa",
        ignoreCase: false,
      },
    },
    inputConfigs: [
      {
        gcsSource: {
          inputUri: "tempora",
        },
      },
      {
        gcsSource: {
          inputUri: "suscipit",
        },
      },
      {
        gcsSource: {
          inputUri: "molestiae",
        },
      },
      {
        gcsSource: {
          inputUri: "minus",
        },
      },
    ],
    models: {
      "voluptatum": "iusto",
      "excepturi": "nisi",
      "recusandae": "temporibus",
      "ab": "quis",
    },
    outputConfig: {
      gcsDestination: {
        outputUriPrefix: "veritatis",
      },
    },
    sourceLanguageCode: "deserunt",
    targetLanguageCodes: [
      "ipsam",
    ],
  },
  accessToken: "repellendus",
  alt: AltEnum.Proto,
  callback: "quo",
  fields: "odit",
  key: "at",
  oauthToken: "at",
  parent: "maiores",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "quod",
  uploadProtocol: "quod",
};

sdk.projects.translateProjectsLocationsBatchTranslateDocument(req).then((res: TranslateProjectsLocationsBatchTranslateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->