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