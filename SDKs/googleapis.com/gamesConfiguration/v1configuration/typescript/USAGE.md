<!-- Start SDK Example Usage -->
```typescript
import {
  GamesConfigurationAchievementConfigurationsDeleteRequest,
  GamesConfigurationAchievementConfigurationsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GamesConfigurationAchievementConfigurationsDeleteRequest = {
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

sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsDelete(req).then((res: GamesConfigurationAchievementConfigurationsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->