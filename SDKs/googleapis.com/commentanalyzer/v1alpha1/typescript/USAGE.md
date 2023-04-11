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