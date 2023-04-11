# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_proxy_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_proxy_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMessageInteractionRequest,
  CreateMessageInteractionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateMessageInteractionRequest = {
  participantSid: "corrupti",
  requestBody: {
    body: "provident",
    mediaUrl: [
      "https://outstanding-strait.name",
      "https://impressive-ox.name",
      "http://innocent-effect.org",
    ],
  },
  serviceSid: "ipsa",
  sessionSid: "delectus",
};

sdk.createMessageInteraction(req).then((res: CreateMessageInteractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createMessageInteraction` - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* `createParticipant` - Add a new Participant to the Session
* `createPhoneNumber` - Add a Phone Number to a Service's Proxy Number Pool.
* `createService` - Create a new Service for Twilio Proxy
* `createSession` - Create a new Session
* `createShortCode` - Add a Short Code to the Proxy Number Pool for the Service.
* `deleteInteraction` - Delete a specific Interaction.
* `deleteParticipant` - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* `deletePhoneNumber` - Delete a specific Phone Number from a Service.
* `deleteService` - Delete a specific Service.
* `deleteSession` - Delete a specific Session.
* `deleteShortCode` - Delete a specific Short Code from a Service.
* `fetchInteraction` - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* `fetchMessageInteraction`
* `fetchParticipant` - Fetch a specific Participant.
* `fetchPhoneNumber` - Fetch a specific Phone Number.
* `fetchService` - Fetch a specific Service.
* `fetchSession` - Fetch a specific Session.
* `fetchShortCode` - Fetch a specific Short Code.
* `listInteraction` - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* `listMessageInteraction`
* `listParticipant` - Retrieve a list of all Participants in a Session.
* `listPhoneNumber` - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* `listService` - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* `listSession` - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* `listShortCode` - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* `updatePhoneNumber` - Update a specific Proxy Number.
* `updateService` - Update a specific Service.
* `updateSession` - Update a specific Session.
* `updateShortCode` - Update a specific Short Code.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

