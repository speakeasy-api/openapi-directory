# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/discovery/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/discovery/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FindRequest,
  FindResponse,
  FindIncludeLicensedContentEnum,
  FindIncludeSpellcheckEnum,
  FindIncludeTestEnum,
  FindSourceEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindRequest = {
  classificationId: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  classificationName: [
    "nulla",
    "corrupti",
    "illum",
  ],
  id: "vel",
  includeLicensedContent: FindIncludeLicensedContentEnum.No,
  includeSpellcheck: FindIncludeSpellcheckEnum.No,
  includeTest: FindIncludeTestEnum.No,
  keyword: "iure",
  locale: "magnam",
  page: "debitis",
  size: "ipsa",
  sort: "delectus",
  source: FindSourceEnum.Universe,
};

sdk.find(req).then((res: FindResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `find` - Attraction Search
* `get` - Get Attraction Details
* `getGenre` - Get Genre Details
* `getImages` - Get Event Images
* `getSegment` - Get Segment Details
* `getSubgenre` - Get Sub-Genre Details
* `getDiscoveryV2Classifications` - Classification Search
* `getDiscoveryV2ClassificationsId` - Get Classification Details
* `getDiscoveryV2Events` - Event Search
* `getDiscoveryV2EventsId` - Get Event Details
* `getDiscoveryV2Venues` - Venue Search
* `getDiscoveryV2VenuesId` - Get Venue Details

### v2

* `getDiscoveryV2Suggest` - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

