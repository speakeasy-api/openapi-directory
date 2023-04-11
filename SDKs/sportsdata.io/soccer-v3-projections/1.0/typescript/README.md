# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/soccer-v3-projections/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/sportsdata.io/soccer-v3-projections/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DfsSlatesByDateRequest,
  DfsSlatesByDateResponse,
  DfsSlatesByDateFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DfsSlatesByDateRequest = {
  date: "corrupti",
  format: DfsSlatesByDateFormatEnum.Xml,
};

sdk.dfsSlatesByDate(req).then((res: DfsSlatesByDateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `dfsSlatesByDate` - Dfs Slates By Date
* `injuredPlayersByCompetition` - Injured Players By Competition
* `projectedPlayerGameStatsByCompetitionWDfsSalaries` - Projected Player Game Stats by Competition (w/ DFS Salaries)
* `projectedPlayerGameStatsByDateWDfsSalaries` - Projected Player Game Stats by Date (w/ DFS Salaries)
* `projectedPlayerGameStatsByPlayerWDfsSalaries` - Projected Player Game Stats by Player (w/ DFS Salaries)
* `upcomingDfsSlatesByCompetition` - Upcoming Dfs Slates By Competition
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

