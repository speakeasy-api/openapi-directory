<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TranslateProjectsLocationsBatchTranslateDocumentRequest, TranslateProjectsLocationsBatchTranslateDocumentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranslateProjectsLocationsBatchTranslateDocumentRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    formatConversions: {
      "debitis": "voluptatum",
      "et": "ut",
      "dolorem": "et",
    },
    glossaries: {
      "iste": {
        glossary: "vitae",
        ignoreCase: true,
      },
    },
    inputConfigs: [
      {
        gcsSource: {
          inputUri: "illum",
        },
      },
    ],
    models: {
      "vel": "odio",
    },
    outputConfig: {
      gcsDestination: {
        outputUriPrefix: "dolore",
      },
    },
    sourceLanguageCode: "id",
    targetLanguageCodes: [
      "accusantium",
    ],
  },
};

sdk.projects.translateProjectsLocationsBatchTranslateDocument(req).then((res: TranslateProjectsLocationsBatchTranslateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->