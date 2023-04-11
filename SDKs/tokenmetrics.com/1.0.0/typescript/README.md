# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tokenmetrics.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/tokenmetrics.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CorrelationRequest,
  CorrelationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CorrelationRequest = {
  limit: "1000",
  tokens: "3375, 3306",
};

sdk.correlation(req).then((res: CorrelationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `correlation` - Correlation
* `indices` - Indices
* `investorGrades` - Investor Grades
* `marketIndicator` - Market Indicator
* `price` - Price
* `pricePrediction` - Price Prediction
* `quantmetricsTier1` - Quantmetrics Tier 1
* `quantmetricsTier2` - Quantmetrics Tier 2
* `resistanceSupport` - Resistance & Support
* `scenarioAnalysis` - Scenario Analysis
* `sentiments` - Sentiments
* `tokens` - Tokens
* `traderGrades` - Trader Grades
* `tradingIndicator` - Trading Indicator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

