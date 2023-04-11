# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  LanguageDetectionsDetectRequest,
  LanguageDetectionsDetectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LanguageDetectionsDetectRequest = {
  dollarXgafv: XgafvEnum.Two,
  detectLanguageRequest: {
    q: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
  },
  accessToken: "nulla",
  alt: AltEnum.Media,
  bearerToken: "illum",
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  pp: false,
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.detections.languageDetectionsDetect(req).then((res: LanguageDetectionsDetectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### detections

* `languageDetectionsDetect` - Detects the language of text within a request.
* `languageDetectionsList` - Detects the language of text within a request.

### languages

* `languageLanguagesList` - Returns a list of supported languages for translation.

### translations

* `languageTranslationsList` - Translates input text, returning translated text.
* `languageTranslationsTranslate` - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

