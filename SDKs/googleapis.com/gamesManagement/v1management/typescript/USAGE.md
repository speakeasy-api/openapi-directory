<!-- Start SDK Example Usage -->
```typescript
import {
  GamesManagementAchievementsResetRequest,
  GamesManagementAchievementsResetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GamesManagementAchievementsResetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  achievementId: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.achievements.gamesManagementAchievementsReset(req).then((res: GamesManagementAchievementsResetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->