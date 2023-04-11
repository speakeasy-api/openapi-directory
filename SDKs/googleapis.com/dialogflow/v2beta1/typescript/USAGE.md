<!-- Start SDK Example Usage -->
```typescript
import {
  DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest,
  DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDialogflowV2beta1CompileSuggestionRequest: {
    contextSize: 592845,
    latestMessage: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.dialogflowProjectsConversationsParticipantsSuggestionsCompile(req).then((res: DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->