<!-- Start SDK Example Usage -->
```typescript
import {
  GamesAchievementDefinitionsListRequest,
  GamesAchievementDefinitionsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GamesAchievementDefinitionsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  language: "corrupti",
  maxResults: 847252,
  oauthToken: "vel",
  pageToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.achievementDefinitions.gamesAchievementDefinitionsList(req).then((res: GamesAchievementDefinitionsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->