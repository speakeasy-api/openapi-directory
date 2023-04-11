# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nhl-v3-scores/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nhl-v3-scores/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AreGamesInProgressRequest,
  AreGamesInProgressResponse,
  AreGamesInProgressFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AreGamesInProgressRequest = {
  format: AreGamesInProgressFormatEnum.Json,
};

sdk.areGamesInProgress(req).then((res: AreGamesInProgressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `areGamesInProgress` - Are Games In Progress
* `currentSeason` - Current Season
* `gamesByDate` - Games by Date
* `news` - News
* `newsByDate` - News by Date
* `newsByPlayer` - News by Player
* `playerDetailsByActive` - Player Details by Active
* `playerDetailsByFreeAgent` - Player Details by Free Agent
* `playerDetailsByPlayer` - Player Details by Player
* `playersByTeam` - Players by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `standings` - Standings
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStatsByDate` - Team Game Stats by Date
* `teamSeasonStats` - Team Season Stats
* `teamsActive` - Teams (Active)
* `teamsAll` - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

