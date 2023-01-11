<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest, ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest = {
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
    analysisResult: {
      callAnalysisMetadata: {
        annotations: [
          {
            annotationEndBoundary: {
              transcriptIndex: 2518412263346885298,
              wordIndex: 5617773211005988520,
            },
            annotationStartBoundary: {
              transcriptIndex: 2339563716805116249,
              wordIndex: 7144924247938981575,
            },
            channelTag: 161231572858529631,
            entityMentionData: {
              entityUniqueId: "et",
              sentiment: {
                magnitude: 94.199997,
                score: 68.099998,
              },
              type: "MENTION_TYPE_UNSPECIFIED",
            },
            holdData: {
              "debitis": "vel",
              "odio": "dolore",
              "id": "aspernatur",
            },
            intentMatchData: {
              intentUniqueId: "accusantium",
            },
            interruptionData: {
              "commodi": "quis",
              "est": "aut",
              "odit": "non",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "voluptas",
                issue: "omnis",
                score: 44.099998,
              },
            },
            phraseMatchData: {
              displayName: "sed",
              phraseMatcher: "officiis",
            },
            sentimentData: {
              magnitude: 87.099998,
              score: 0.100000,
            },
            silenceData: {
              "recusandae": "at",
            },
          },
          {
            annotationEndBoundary: {
              transcriptIndex: 3959279844101328186,
              wordIndex: 8902041070398994519,
            },
            annotationStartBoundary: {
              transcriptIndex: 303089054982227392,
              wordIndex: 7338728586234333996,
            },
            channelTag: 5392504858645185670,
            entityMentionData: {
              entityUniqueId: "ut",
              sentiment: {
                magnitude: 56.099998,
                score: 30.200001,
              },
              type: "MENTION_TYPE_UNSPECIFIED",
            },
            holdData: {
              "dolor": "beatae",
              "veritatis": "in",
              "et": "omnis",
            },
            intentMatchData: {
              intentUniqueId: "ipsum",
            },
            interruptionData: {
              "dolores": "placeat",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "vel",
                issue: "rerum",
                score: 89.099998,
              },
            },
            phraseMatchData: {
              displayName: "quam",
              phraseMatcher: "reprehenderit",
            },
            sentimentData: {
              magnitude: 94.099998,
              score: 72.199997,
            },
            silenceData: {
              "qui": "ut",
              "itaque": "ab",
            },
          },
          {
            annotationEndBoundary: {
              transcriptIndex: 8218430188258725598,
              wordIndex: 4255970180603226314,
            },
            annotationStartBoundary: {
              transcriptIndex: 2682844416202521633,
              wordIndex: 4304520335772049496,
            },
            channelTag: 3462733497206508461,
            entityMentionData: {
              entityUniqueId: "architecto",
              sentiment: {
                magnitude: 38.200001,
                score: 20.100000,
              },
              type: "PROPER",
            },
            holdData: {
              "magni": "et",
              "optio": "qui",
            },
            intentMatchData: {
              intentUniqueId: "earum",
            },
            interruptionData: {
              "omnis": "ut",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "consequatur",
                issue: "dolor",
                score: 26.100000,
              },
            },
            phraseMatchData: {
              displayName: "reprehenderit",
              phraseMatcher: "consectetur",
            },
            sentimentData: {
              magnitude: 59.200001,
              score: 64.099998,
            },
            silenceData: {
              "soluta": "aut",
            },
          },
        ],
        entities: {
          "consequuntur": {
            displayName: "laudantium",
            metadata: {
              "ipsa": "expedita",
            },
            salience: 20.200001,
            sentiment: {
              magnitude: 26.200001,
              score: 87.099998,
            },
            type: "DATE",
          },
          "maxime": {
            displayName: "eum",
            metadata: {
              "et": "rerum",
              "reiciendis": "quis",
            },
            salience: 97.199997,
            sentiment: {
              magnitude: 1.200000,
              score: 40.200001,
            },
            type: "PHONE_NUMBER",
          },
          "et": {
            displayName: "impedit",
            metadata: {
              "expedita": "vel",
              "qui": "modi",
              "nihil": "tempora",
            },
            salience: 42.200001,
            sentiment: {
              magnitude: 60.099998,
              score: 34.099998,
            },
            type: "LOCATION",
          },
        },
        intents: {
          "placeat": {
            displayName: "qui",
            id: "nisi",
          },
          "quis": {
            displayName: "adipisci",
            id: "porro",
          },
        },
        issueModelResult: {
          issueModel: "rerum",
          issues: [
            {
              displayName: "accusamus",
              issue: "numquam",
              score: 58.200001,
            },
          ],
        },
        phraseMatchers: {
          "laborum": {
            displayName: "fugit",
            phraseMatcher: "quis",
          },
          "minus": {
            displayName: "soluta",
            phraseMatcher: "aperiam",
          },
        },
        sentiments: [
          {
            channelTag: 4970157864765978097,
            sentimentData: {
              magnitude: 52.099998,
              score: 29.200001,
            },
          },
          {
            channelTag: 8997481548049309375,
            sentimentData: {
              magnitude: 86.099998,
              score: 68.199997,
            },
          },
          {
            channelTag: 7899896093082851758,
            sentimentData: {
              magnitude: 83.099998,
              score: 30.100000,
            },
          },
        ],
      },
      endTime: "cupiditate",
    },
    annotatorSelector: {
      issueModels: [
        "molestiae",
        "pariatur",
        "quasi",
      ],
      phraseMatchers: [
        "enim",
        "qui",
        "sit",
      ],
      runEntityAnnotator: false,
      runIntentAnnotator: true,
      runInterruptionAnnotator: true,
      runIssueModelAnnotator: false,
      runPhraseMatcherAnnotator: true,
      runSentimentAnnotator: true,
      runSilenceAnnotator: true,
    },
    name: "occaecati",
  },
};

sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req).then((res: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->