# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/language/v1beta2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/language/v1beta2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documents

* `languageDocumentsAnalyzeEntities` - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* `languageDocumentsAnalyzeEntitySentiment` - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* `languageDocumentsAnalyzeSentiment` - Analyzes the sentiment of the provided text.
* `languageDocumentsAnalyzeSyntax` - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* `languageDocumentsAnnotateText` - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* `languageDocumentsClassifyText` - Classifies a document into categories.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

