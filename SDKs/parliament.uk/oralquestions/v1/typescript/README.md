# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/parliament.uk/oralquestions/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/parliament.uk/oralquestions/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PublishedEarlyDayMotionGetRequest,
  PublishedEarlyDayMotionGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PublishedEarlyDayMotionGetRequest = {
  id: 548814,
};

sdk.earlyDayMotions.publishedEarlyDayMotionGet(req).then((res: PublishedEarlyDayMotionGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### earlyDayMotions

* `publishedEarlyDayMotionGet` - Returns a single Early Day Motion by ID
* `getEarlyDayMotionsList` - Returns a list of Early Day Motions

### oralQuestionTimes

* `publishedOralQuestionTimeGet` - Returns a list of oral question times

### oralQuestions

* `publishedOralQuestionGet` - Returns a list of oral questions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

