<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CommentanalyzerCommentsAnalyzeRequest, CommentanalyzerCommentsAnalyzeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CommentanalyzerCommentsAnalyzeRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
    clientToken: "rerum",
    comment: {
      text: "dicta",
      type: "TEXT_TYPE_UNSPECIFIED",
    },
    communityId: "voluptatum",
    context: {
      articleAndParentComment: {
        article: {
          text: "et",
          type: "HTML",
        },
        parentComment: {
          text: "dolorem",
          type: "PLAIN_TEXT",
        },
      },
      entries: [
        {
          text: "iste",
          type: "TEXT_TYPE_UNSPECIFIED",
        },
      ],
    },
    doNotStore: true,
    languages: [
      "illum",
    ],
    requestedAttributes: {
      "vel": {
        scoreThreshold: 20.200001,
        scoreType: "STD_DEV_SCORE",
      },
    },
    sessionId: "aspernatur",
    spanAnnotations: true,
  },
};

sdk.comments.commentanalyzerCommentsAnalyze(req).then((res: CommentanalyzerCommentsAnalyzeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->