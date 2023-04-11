<!-- Start SDK Example Usage -->
```typescript
import {
  ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest,
  ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudContactcenterinsightsV1EntityTypeEnum,
  GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudContactcenterinsightsV1AnalysisInput: {
    analysisResult: {
      callAnalysisMetadata: {
        annotations: [
          {
            annotationEndBoundary: {
              transcriptIndex: 715190,
              wordIndex: 844266,
            },
            annotationStartBoundary: {
              transcriptIndex: 602763,
              wordIndex: 857946,
            },
            channelTag: 544883,
            entityMentionData: {
              entityUniqueId: "illum",
              sentiment: {
                magnitude: 4236.55,
                score: 6235.64,
              },
              type: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.Proper,
            },
            holdData: {
              "iure": "magnam",
              "debitis": "ipsa",
            },
            intentMatchData: {
              intentUniqueId: "delectus",
            },
            interruptionData: {
              "suscipit": "molestiae",
              "minus": "placeat",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "voluptatum",
                issue: "iusto",
                score: 5680.45,
              },
            },
            phraseMatchData: {
              displayName: "nisi",
              phraseMatcher: "recusandae",
            },
            sentimentData: {
              magnitude: 8360.79,
              score: 710.36,
            },
            silenceData: {
              "veritatis": "deserunt",
              "perferendis": "ipsam",
            },
          },
          {
            annotationEndBoundary: {
              transcriptIndex: 832620,
              wordIndex: 957156,
            },
            annotationStartBoundary: {
              transcriptIndex: 778157,
              wordIndex: 140350,
            },
            channelTag: 870013,
            entityMentionData: {
              entityUniqueId: "at",
              sentiment: {
                magnitude: 9786.19,
                score: 4736.08,
              },
              type: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.Common,
            },
            holdData: {
              "esse": "totam",
              "porro": "dolorum",
              "dicta": "nam",
              "officia": "occaecati",
            },
            intentMatchData: {
              intentUniqueId: "fugit",
            },
            interruptionData: {
              "hic": "optio",
              "totam": "beatae",
              "commodi": "molestiae",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "modi",
                issue: "qui",
                score: 7742.34,
              },
            },
            phraseMatchData: {
              displayName: "cum",
              phraseMatcher: "esse",
            },
            sentimentData: {
              magnitude: 2165.5,
              score: 5684.34,
            },
            silenceData: {
              "perferendis": "ad",
            },
          },
          {
            annotationEndBoundary: {
              transcriptIndex: 617636,
              wordIndex: 149675,
            },
            annotationStartBoundary: {
              transcriptIndex: 612096,
              wordIndex: 222321,
            },
            channelTag: 616934,
            entityMentionData: {
              entityUniqueId: "laboriosam",
              sentiment: {
                magnitude: 9437.49,
                score: 9025.99,
              },
              type: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum.Common,
            },
            holdData: {
              "corporis": "iste",
              "iure": "saepe",
            },
            intentMatchData: {
              intentUniqueId: "quidem",
            },
            interruptionData: {
              "ipsa": "reiciendis",
            },
            issueMatchData: {
              issueAssignment: {
                displayName: "est",
                issue: "mollitia",
                score: 6706.38,
              },
            },
            phraseMatchData: {
              displayName: "dolores",
              phraseMatcher: "dolorem",
            },
            sentimentData: {
              magnitude: 3581.52,
              score: 1289.26,
            },
            silenceData: {
              "enim": "omnis",
              "nemo": "minima",
              "excepturi": "accusantium",
              "iure": "culpa",
            },
          },
        ],
        entities: {
          "sapiente": {
            displayName: "architecto",
            metadata: {
              "dolorem": "culpa",
              "consequuntur": "repellat",
              "mollitia": "occaecati",
            },
            salience: 2532.91,
            sentiment: {
              magnitude: 4143.69,
              score: 4663.11,
            },
            type: GoogleCloudContactcenterinsightsV1EntityTypeEnum.ConsumerGood,
          },
          "velit": {
            displayName: "error",
            metadata: {
              "quis": "vitae",
            },
            salience: 6747.52,
            sentiment: {
              magnitude: 6563.3,
              score: 3172.02,
            },
            type: GoogleCloudContactcenterinsightsV1EntityTypeEnum.Person,
          },
          "quo": {
            displayName: "sequi",
            metadata: {
              "ipsam": "id",
              "possimus": "aut",
              "quasi": "error",
              "temporibus": "laborum",
            },
            salience: 960.98,
            sentiment: {
              magnitude: 9719.45,
              score: 9764.6,
            },
            type: GoogleCloudContactcenterinsightsV1EntityTypeEnum.Number,
          },
          "nihil": {
            displayName: "praesentium",
            metadata: {
              "ipsa": "omnis",
              "voluptate": "cum",
              "perferendis": "doloremque",
              "reprehenderit": "ut",
            },
            salience: 9795.87,
            sentiment: {
              magnitude: 1201.96,
              score: 3594.44,
            },
            type: GoogleCloudContactcenterinsightsV1EntityTypeEnum.Organization,
          },
        },
        intents: {
          "dicta": {
            displayName: "harum",
            id: "enim",
          },
          "accusamus": {
            displayName: "commodi",
            id: "repudiandae",
          },
        },
        issueModelResult: {
          issueModel: "quae",
          issues: [
            {
              displayName: "quidem",
              issue: "molestias",
              score: 5666.02,
            },
          ],
        },
        phraseMatchers: {
          "modi": {
            displayName: "praesentium",
            phraseMatcher: "rem",
          },
          "voluptates": {
            displayName: "quasi",
            phraseMatcher: "repudiandae",
          },
          "sint": {
            displayName: "veritatis",
            phraseMatcher: "itaque",
          },
          "incidunt": {
            displayName: "enim",
            phraseMatcher: "consequatur",
          },
        },
        sentiments: [
          {
            channelTag: 842342,
            sentimentData: {
              magnitude: 1317.97,
              score: 6471.74,
            },
          },
          {
            channelTag: 716327,
            sentimentData: {
              magnitude: 8413.86,
              score: 2894.06,
            },
          },
          {
            channelTag: 264730,
            sentimentData: {
              magnitude: 1831.91,
              score: 3978.21,
            },
          },
        ],
      },
      endTime: "cupiditate",
    },
    annotatorSelector: {
      issueModels: [
        "perferendis",
        "magni",
        "assumenda",
      ],
      phraseMatchers: [
        "alias",
        "fugit",
      ],
      runEntityAnnotator: false,
      runIntentAnnotator: false,
      runInterruptionAnnotator: false,
      runIssueModelAnnotator: false,
      runPhraseMatcherAnnotator: false,
      runSentimentAnnotator: false,
      runSilenceAnnotator: false,
    },
    name: "dolorum",
  },
  accessToken: "excepturi",
  alt: AltEnum.Json,
  callback: "facilis",
  fields: "tempore",
  key: "labore",
  oauthToken: "delectus",
  parent: "eum",
  prettyPrint: false,
  quotaUser: "non",
  uploadType: "eligendi",
  uploadProtocol: "sint",
};

sdk.projects.contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req).then((res: ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->