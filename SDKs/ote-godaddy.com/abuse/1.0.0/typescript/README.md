# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/abuse/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/abuse/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AbuseTicketCreate,
  CreateTicketResponse
} from "openapi/dist/sdk/models/operations";
import {
  AbuseTicketCreateTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AbuseTicketCreate = {
  info: "corrupti",
  infoUrl: "provident",
  intentional: false,
  proxy: "distinctio",
  source: "quibusdam",
  target: "unde",
  type: AbuseTicketCreateTypeEnum.Phishing,
};

sdk.v1.createTicket(req).then((res: CreateTicketResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `createTicket` - Create a new abuse ticket
* `getTicketInfo` - Return the abuse ticket data for a given ticket id
* `getTickets` - List all abuse tickets ids that match user provided filters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

