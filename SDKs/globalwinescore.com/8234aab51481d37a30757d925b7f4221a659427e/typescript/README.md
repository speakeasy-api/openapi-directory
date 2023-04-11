# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/globalwinescore.com/8234aab51481d37a30757d925b7f4221a659427e/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/globalwinescore.com/8234aab51481d37a30757d925b7f4221a659427e/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetGlobalwinescoresLatestRequest,
  GetGlobalwinescoresLatestResponse,
  GetGlobalwinescoresLatestColorEnum,
  GetGlobalwinescoresLatestOrderingEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    tokenAuthentication: "YOUR_API_KEY_HERE",
  },
});

const req: GetGlobalwinescoresLatestRequest = {
  authorization: "corrupti",
  color: GetGlobalwinescoresLatestColorEnum.White,
  isPrimeurs: false,
  limit: 715190,
  lwin: "quibusdam",
  lwin11: "unde",
  offset: 857946,
  ordering: GetGlobalwinescoresLatestOrderingEnum.Score,
  vintage: "illum",
  wineId: [
    623564,
    645894,
  ],
};

sdk.globalWineScore.getGlobalwinescoresLatest(req).then((res: GetGlobalwinescoresLatestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### globalWineScore

* `getGlobalwinescoresLatest` - List all latest GWS
* `listHistoricalGWS` - List all historical GWS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

