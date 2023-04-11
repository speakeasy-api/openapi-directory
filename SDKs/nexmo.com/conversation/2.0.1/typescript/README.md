# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/conversation/2.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nexmo.com/conversation/2.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConversationRequestBody,
  CreateConversationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateConversationRequestBody = {
  displayName: "Customer Chat",
  imageUrl: "https://example.com/image.png",
  name: "customer_chat",
  properties: {
    ttl: 60,
  },
};

sdk.conversation.createConversation(req).then((res: CreateConversationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### conversation

* `createConversation` - Create a conversation
* `deleteConversation` - Delete a conversation
* `listConversations` - List conversations
* `recordConversation` - Record a conversation
* `replaceConversation` - Update a conversation
* `retrieveConversation` - Retrieve a conversation

### event

* `createEvent` - Create an event
* `deleteEvent` - Delete an event
* `getEvent` - Retrieve an event
* `getEvents` - List events

### leg

* `deleteLeg` - Delete a leg
* `listLegs` - List legs

### member

* `createMember` - Create a member
* `deleteMember` - Delete a member
* `getMember` - Retrieve a member
* `getMembers` - List members
* `updateMember` - Update a member

### user

* `createUser` - Create a user
* `deleteUser` - Delete a user
* `getUser` - Retrieve a user
* `getUsers` - List users
* `getuserConversations` - List user conversations
* `updateUser` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

