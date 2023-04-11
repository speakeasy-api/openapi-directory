# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/symanto.net/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/symanto.net/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CommunicationRequest,
  CommunicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CommunicationRequest = {
  requestBody: [
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
    {
      id: "1",
      language: "en",
      text: "I love the service",
    },
  ],
  all: false,
};

sdk.textAnalysis.communication(req).then((res: CommunicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### textAnalysis

* `communication` - Communication & Tonality
* `ekmanEmotion` - Emotion Analysis
* `emotion` - Emotion Analysis
* `languageDetection` - Language Detection
* `personality` - Personality Traits
* `sentiment` - Sentiment Analysis
* `topicSentiment` - Extracts topics and sentiments and relates them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

