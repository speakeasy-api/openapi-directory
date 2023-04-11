# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/contactcenterinsights/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/contactcenterinsights/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `contactcenterinsightsProjectsLocationsConversationsAnalysesCreate` - Creates an analysis. The long running operation is done when the analysis has completed.
* `contactcenterinsightsProjectsLocationsConversationsAnalysesList` - Lists analyses.
* `contactcenterinsightsProjectsLocationsConversationsBulkAnalyze` - Analyzes multiple conversations in a single request.
* `contactcenterinsightsProjectsLocationsConversationsCalculateStats` - Gets conversation statistics.
* `contactcenterinsightsProjectsLocationsConversationsCreate` - Creates a conversation.
* `contactcenterinsightsProjectsLocationsConversationsIngest` - Imports conversations and processes them according to the user's configuration.
* `contactcenterinsightsProjectsLocationsConversationsList` - Lists conversations.
* `contactcenterinsightsProjectsLocationsInsightsdataExport` - Export insights data to a destination defined in the request body.
* `contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats` - Gets an issue model's statistics.
* `contactcenterinsightsProjectsLocationsIssueModelsCreate` - Creates an issue model.
* `contactcenterinsightsProjectsLocationsIssueModelsDeploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `contactcenterinsightsProjectsLocationsIssueModelsIssuesList` - Lists issues.
* `contactcenterinsightsProjectsLocationsIssueModelsList` - Lists issue models.
* `contactcenterinsightsProjectsLocationsIssueModelsUndeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `contactcenterinsightsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenterinsightsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `contactcenterinsightsProjectsLocationsPhraseMatchersCreate` - Creates a phrase matcher.
* `contactcenterinsightsProjectsLocationsPhraseMatchersList` - Lists phrase matchers.
* `contactcenterinsightsProjectsLocationsViewsCreate` - Creates a view.
* `contactcenterinsightsProjectsLocationsViewsDelete` - Deletes a view.
* `contactcenterinsightsProjectsLocationsViewsGet` - Gets a view.
* `contactcenterinsightsProjectsLocationsViewsList` - Lists views.
* `contactcenterinsightsProjectsLocationsViewsPatch` - Updates a view.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

