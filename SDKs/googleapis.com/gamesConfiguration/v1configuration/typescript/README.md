# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gamesConfiguration/v1configuration/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gamesConfiguration/v1configuration/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### achievementConfigurations

* `gamesConfigurationAchievementConfigurationsDelete` - Delete the achievement configuration with the given ID.
* `gamesConfigurationAchievementConfigurationsGet` - Retrieves the metadata of the achievement configuration with the given ID.
* `gamesConfigurationAchievementConfigurationsInsert` - Insert a new achievement configuration in this application.
* `gamesConfigurationAchievementConfigurationsList` - Returns a list of the achievement configurations in this application.
* `gamesConfigurationAchievementConfigurationsUpdate` - Update the metadata of the achievement configuration with the given ID.

### leaderboardConfigurations

* `gamesConfigurationLeaderboardConfigurationsDelete` - Delete the leaderboard configuration with the given ID.
* `gamesConfigurationLeaderboardConfigurationsGet` - Retrieves the metadata of the leaderboard configuration with the given ID.
* `gamesConfigurationLeaderboardConfigurationsInsert` - Insert a new leaderboard configuration in this application.
* `gamesConfigurationLeaderboardConfigurationsList` - Returns a list of the leaderboard configurations in this application.
* `gamesConfigurationLeaderboardConfigurationsUpdate` - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

