# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/marketing/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/marketing/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest,
  PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest = {
  batchInputMarketingEventSubscriber: {
    inputs: [
      {
        interactionDateTime: 592845,
        properties: {
          "quibusdam": "unde",
          "nulla": "corrupti",
          "illum": "vel",
        },
        vid: 623564,
      },
      {
        interactionDateTime: 645894,
        properties: {
          "iure": "magnam",
          "debitis": "ipsa",
        },
        vid: 963663,
      },
      {
        interactionDateTime: 272656,
        properties: {
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
        vid: 479977,
      },
    ],
  },
  externalAccountId: "excepturi",
  externalEventId: "nisi",
  subscriberState: "recusandae",
};

sdk.attendanceSubscriberStateChanges.postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req).then((res: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attendanceSubscriberStateChanges

* `postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate` - Record
* `postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail` - Record

### marketingEventsExternal

* `deleteMarketingV3MarketingEventsEventsExternalEventIdArchive`
* `getMarketingV3MarketingEventsEventsExternalEventIdGetById`
* `patchMarketingV3MarketingEventsEventsExternalEventIdUpdate`
* `postMarketingV3MarketingEventsEventsDeleteArchiveBatch`
* `postMarketingV3MarketingEventsEventsUpsertDoUpsert`
* `postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel`
* `postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete`
* `postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById`
* `postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById`
* `postMarketingV3MarketingEventsEventsCreate`
* `putMarketingV3MarketingEventsEventsExternalEventIdReplace`

### search

* `getMarketingV3MarketingEventsEventsSearchDoSearch` - Search for marketing events

### settingsExternal

* `getMarketingV3MarketingEventsAppIdSettingsGetAll`
* `postMarketingV3MarketingEventsAppIdSettingsCreate`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

