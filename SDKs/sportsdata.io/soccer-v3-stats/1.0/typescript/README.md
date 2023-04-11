# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/soccer-v3-stats/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/soccer-v3-stats/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AreasCountriesRequest,
  AreasCountriesResponse,
  AreasCountriesFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AreasCountriesRequest = {
  format: AreasCountriesFormatEnum.Json,
};

sdk.areasCountries(req).then((res: AreasCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `areasCountries` - Areas (Countries)
* `boxScore` - Box Score
* `boxScoresByDate` - Box Scores by Date
* `boxScoresByDateByCompetition` - Box Scores by Date by Competition
* `boxScoresByDateDelta` - Box Scores by Date Delta
* `boxScoresDeltaByDateByCompetition` - Box Scores Delta by Date by Competition
* `competitionFixturesLeagueDetails` - Competition Fixtures (League Details)
* `competitionHierarchyLeagueHierarchy` - Competition Hierarchy (League Hierarchy)
* `competitionsLeagues` - Competitions (Leagues)
* `dfsSlatesByDate` - Dfs Slates By Date
* `gamesByDate` - Games by Date
* `membershipsActive` - Memberships (Active)
* `membershipsByCompetitionActive` - Memberships by Competition (Active)
* `membershipsByCompetitionHistorical` - Memberships by Competition (Historical)
* `membershipsByTeamActive` - Memberships by Team (Active)
* `membershipsByTeamHistorical` - Memberships by Team (Historical)
* `membershipsHistorical` - Memberships (Historical)
* `membershipsRecentlyChanged` - Memberships (Recently Changed)
* `player` - Player
* `playerGameStatsByDate` - Player Game Stats by Date
* `playerGameStatsByPlayer` - Player Game Stats by Player
* `playerSeasonStats` - Player Season Stats
* `playerSeasonStatsByPlayer` - Player Season Stats by Player
* `playerSeasonStatsByTeam` - Player Season Stats by Team
* `players` - Players
* `playersByTeam` - Players by Team
* `schedule` - Schedule
* `seasonTeams` - Season Teams
* `standings` - Standings
* `teamGameStatsByDate` - Team Game Stats by Date
* `teamSeasonStats` - Team Season Stats
* `teams` - Teams
* `upcomingDfsSlatesByCompetition` - Upcoming Dfs Slates By Competition
* `upcomingScheduleByPlayer` - Upcoming Schedule By Player
* `venues` - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

