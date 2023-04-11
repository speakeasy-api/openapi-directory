# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/cfb-v3-scores/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/cfb-v3-scores/1.0/typescript
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
* `conferenceHierarchyWithTeams` - Conference Hierarchy (with Teams)
* `currentSeason` - Current Season
* `currentSeasonDetails` - Current Season Details
* `currentSeasontype` - Current SeasonType
* `currentWeek` - Current Week
* `gamesByDate` - Games by Date
* `gamesByWeek` - Games by Week
* `injuredPlayers` - Injured Players
* `playerDetailsByActive` - Player Details By Active
* `playerDetailsByPlayer` - Player Details By Player
* `playerDetailsByTeam` - Player Details by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStatsByWeek` - Team Game Stats by Week
* `teamSeasonStatsStandings` - Team Season Stats & Standings
* `teams` - Teams
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

