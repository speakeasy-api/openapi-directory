# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/commentanalyzer/v1alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/commentanalyzer/v1alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CommentanalyzerCommentsAnalyzeRequest,
  CommentanalyzerCommentsAnalyzeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AttributeParametersScoreTypeEnum,
  TextEntryTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CommentanalyzerCommentsAnalyzeRequest = {
  dollarXgafv: XgafvEnum.Two,
  analyzeCommentRequest: {
    clientToken: "provident",
    comment: {
      text: "distinctio",
      type: TextEntryTypeEnum.Html,
    },
    communityId: "unde",
    context: {
      articleAndParentComment: {
        article: {
          text: "nulla",
          type: TextEntryTypeEnum.PlainText,
        },
        parentComment: {
          text: "illum",
          type: TextEntryTypeEnum.PlainText,
        },
      },
      entries: [
        {
          text: "deserunt",
          type: TextEntryTypeEnum.PlainText,
        },
        {
          text: "iure",
          type: TextEntryTypeEnum.TextTypeUnspecified,
        },
        {
          text: "debitis",
          type: TextEntryTypeEnum.TextTypeUnspecified,
        },
      ],
    },
    doNotStore: false,
    dropUnsupportedAttributes: false,
    languages: [
      "tempora",
      "suscipit",
      "molestiae",
      "minus",
    ],
    requestedAttributes: {
      "voluptatum": {
        scoreThreshold: 4799.77,
        scoreType: AttributeParametersScoreTypeEnum.StdDevScore,
      },
      "nisi": {
        scoreThreshold: 9255.97,
        scoreType: AttributeParametersScoreTypeEnum.Raw,
      },
      "ab": {
        scoreThreshold: 3373.96,
        scoreType: AttributeParametersScoreTypeEnum.ScoreTypeUnspecified,
      },
      "deserunt": {
        scoreThreshold: 202.18,
        scoreType: AttributeParametersScoreTypeEnum.Probability,
      },
    },
    sessionId: "repellendus",
    spanAnnotations: false,
  },
  accessToken: "sapiente",
  alt: AltEnum.Proto,
  callback: "odit",
  fields: "at",
  key: "at",
  oauthToken: "maiores",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "quod",
  uploadProtocol: "quod",
};

sdk.comments.commentanalyzerCommentsAnalyze(req).then((res: CommentanalyzerCommentsAnalyzeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### comments

* `commentanalyzerCommentsAnalyze` - Analyzes the provided text and returns scores for requested attributes.
* `commentanalyzerCommentsSuggestscore` - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

