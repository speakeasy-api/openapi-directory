# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nfl-v3-scores/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/nfl-v3-scores/1.0/typescript
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
* `byeWeeks` - Bye Weeks
* `depthCharts` - Depth Charts
* `gameStatsBySeasonDeprecatedUseTeamGameStatsInstead` - Game Stats by Season (Deprecated, use Team Game Stats instead)
* `gameStatsByWeekDeprecatedUseTeamGameStatsInstead` - Game Stats by Week (Deprecated, use Team Game Stats instead)
* `news` - News
* `newsByDate` - News by Date
* `newsByPlayer` - News by Player
* `newsByTeam` - News by Team
* `playerDetailsByAvailable` - Player Details by Available
* `playerDetailsByFreeAgents` - Player Details by Free Agents
* `playerDetailsByPlayer` - Player Details by Player
* `playerDetailsByRookieDraftYear` - Player Details by Rookie Draft Year
* `playerDetailsByTeam` - Player Details by Team
* `referees` - Referees
* `schedule` - Schedule
* `scoresByDate` - Scores by Date
* `scoresBySeason` - Scores by Season 
* `scoresByWeek` - Scores by Week
* `scoresByWeekSimulation` - Scores by Week Simulation
* `seasonCurrent` - Season Current
* `seasonLastCompleted` - Season Last Completed
* `seasonUpcoming` - Season Upcoming
* `stadiums` - Stadiums
* `standings` - Standings
* `teamGameLogsBySeason` - Team Game Logs By Season
* `teamGameStats` - Team Game Stats
* `teamSeasonStats` - Team Season Stats
* `teamsActive` - Teams (Active)
* `teamsAll` - Teams (All)
* `teamsBySeason` - Teams by Season
* `timeframes` - Timeframes
* `weekCurrent` - Week Current
* `weekLastCompleted` - Week Last Completed
* `weekUpcoming` - Week Upcoming
* `xPing` - X Ping
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

