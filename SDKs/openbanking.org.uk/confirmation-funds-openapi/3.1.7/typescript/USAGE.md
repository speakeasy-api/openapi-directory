<!-- Start SDK Example Usage -->
```typescript
import {
  CreateFundsConfirmationConsentsRequest,
  CreateFundsConfirmationConsentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateFundsConfirmationConsentsRequest = {
  authorization: "corrupti",
  obFundsConfirmationConsent1: {
    data: {
      debtorAccount: {
        identification: "provident",
        name: "distinctio",
        schemeName: "quibusdam",
        secondaryIdentification: "unde",
      },
      expirationDateTime: "2021-05-14T08:28:11.899Z",
    },
  },
  xCustomerUserAgent: "illum",
  xFapiAuthDate: "vel",
  xFapiCustomerIpAddress: "error",
  xFapiInteractionId: "deserunt",
};

sdk.fundsConfirmations.createFundsConfirmationConsents(req).then((res: CreateFundsConfirmationConsentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->