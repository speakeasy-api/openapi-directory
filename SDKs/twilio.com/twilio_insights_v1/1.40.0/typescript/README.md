# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_insights_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_insights_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FetchAccountSettingsRequest,
  FetchAccountSettingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchAccountSettingsRequest = {
  subaccountSid: "corrupti",
};

sdk.fetchAccountSettings(req).then((res: FetchAccountSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `fetchAccountSettings`
* `fetchAnnotation` - Fetch a specific Annotation.
* `fetchCall`
* `fetchConference` - Fetch a specific Conference.
* `fetchConferenceParticipant` - Fetch a specific Conference Participant Summary.
* `fetchSummary`
* `fetchVideoParticipantSummary` - Get Video Log Analyzer data for a Room Participant.
* `fetchVideoRoomSummary` - Get Video Log Analyzer data for a Room.
* `listCallSummaries`
* `listConference` - Retrieve a list of Conferences.
* `listConferenceParticipant` - List Conference Participants.
* `listEvent`
* `listMetric`
* `listVideoParticipantSummary` - Get a list of room participants.
* `listVideoRoomSummary` - Get a list of Programmable Video Rooms.
* `updateAccountSettings`
* `updateAnnotation` - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

