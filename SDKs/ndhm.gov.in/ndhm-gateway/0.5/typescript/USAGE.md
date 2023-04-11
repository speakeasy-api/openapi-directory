<!-- Start SDK Example Usage -->
```typescript
import {
  PostV05CareContextsDiscoverJsonRequest,
  PostV05CareContextsDiscoverJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  IdentifierTypeEnum,
  PatientGenderEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostV05CareContextsDiscoverJsonRequest = {
  authorization: "corrupti",
  patientDiscoveryRequest: {
    patient: {
      gender: PatientGenderEnum.O,
      id: "<patient-id>@<consent-manager-id>",
      name: "chandler bing",
      unverifiedIdentifiers: [
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.NdhmHealthNumber,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
      ],
      verifiedIdentifiers: [
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.Mr,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.NdhmHealthNumber,
          value: "+919800083232",
        },
      ],
      yearOfBirth: 2000,
    },
    requestId: "499a5a4a-7dda-4f20-9b67-e24589627061",
    timestamp: "2022-03-26T09:37:56.283Z",
    transactionId: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
  },
  xHipId: "quod",
};

sdk.cmFacing.postV05CareContextsDiscoverJson(req).then((res: PostV05CareContextsDiscoverJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->