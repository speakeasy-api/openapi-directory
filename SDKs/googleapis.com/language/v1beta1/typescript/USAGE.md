<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LanguageDocumentsAnalyzeEntitiesRequest, LanguageDocumentsAnalyzeEntitiesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LanguageDocumentsAnalyzeEntitiesRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    document: {
      content: "rerum",
      gcsContentUri: "dicta",
      language: "debitis",
      type: "TYPE_UNSPECIFIED",
    },
    encodingType: "UTF16",
  },
};

sdk.documents.languageDocumentsAnalyzeEntities(req).then((res: LanguageDocumentsAnalyzeEntitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->