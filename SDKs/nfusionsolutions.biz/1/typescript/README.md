# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nfusionsolutions.biz/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nfusionsolutions.biz/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CurrenciesHistoryGETRequest,
  CurrenciesHistoryGETResponse,
  CurrenciesHistoryGETFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    token: "YOUR_API_KEY_HERE",
  },
});

const req: CurrenciesHistoryGETRequest = {
  end: "2021-10-25T05:21:43.948Z",
  format: CurrenciesHistoryGETFormatEnum.Xml,
  interval: "quibusdam",
  pairs: "unde",
  start: "2021-05-14T08:28:11.899Z",
};

sdk.currencies.currenciesHistoryGET(req).then((res: CurrenciesHistoryGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### currencies

* `currenciesHistoryGET` - Get historical prices for requested currency pairs
* `currenciesRateGET` - Get latest mid rate for requested currency pairs
* `currenciesSummaryGET` - Get latest Summary for requested currency pairs
* `currenciesSupportedCurrenciesHistoryGET` - Get list of currency pairs supported by the history endpoint
* `currenciesSupportedCurrenciesRateGET` - Get list of currencies supported by the rate endpoint
* `currenciesSupportedCurrenciesSummaryGET` - Get list of currency pairs supported by the Summary endpoint

### metals

* `metalsBenchmarkHistoryGET` - Get historical benchmark prices for requested metals
* `metalsBenchmarkSummaryGET` - Get latest Benchmark prices for requested metals
* `metalsBenchmarkSupportedMetalsGET` - Get list of symbols supported by the benchmark endpoints
* `metalsSpotAnnualHistoricalPerformanceGET` - Get Historical Annual Performance for requested metals
* `metalsSpotHistoricalPerformanceGET` - Get Historical Performance for requested metals
* `metalsSpotHistoryGET` - Get historical Spot prices for requested metals
* `metalsSpotRatioHistoryGET` - Get historical Spot Ratio prices for requested metals
* `metalsSpotRatioSummaryGET` - Get latest Spot Summary for requested metal ratios
* `metalsSpotSummaryGET` - Get latest Spot Summary for requested metals
* `metalsSpotSupportedMetalsGET` - Get list of symbols supported by the spot endpoints
* `metalsSupportedCurrenciesMetalsGET` - Get list of currencies supported by metals endpoints for currency conversion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

