<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostV05CareContextsDiscoverRequest, PostV05CareContextsDiscoverResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostV05CareContextsDiscoverRequest = {
  headers: {
    authorization: "sit",
    xHIPID: "voluptas",
  },
  request: {
    applicationXML: "culpa".encode(),
    patientDiscoveryRequest: {
      patient: {
        gender: "O",
        id: "consequuntur",
        name: "dolor",
        unverifiedIdentifiers: [
          {
            type: "MR",
            value: "fugit",
          },
          {
            type: "MOBILE",
            value: "nihil",
          },
        ],
        verifiedIdentifiers: [
          {
            type: "HEALTH_ID",
            value: "debitis",
          },
          {
            type: "MOBILE",
            value: "et",
          },
          {
            type: "HEALTH_ID",
            value: "dolorem",
          },
        ],
        yearOfBirth: 7259475919510918339,
      },
      requestId: "voluptate",
      timestamp: "1998-09-30T11:01:25Z",
      transactionId: "vitae",
    },
  },
};

sdk.cmFacing.postV05CareContextsDiscover(req).then((res: PostV05CareContextsDiscoverResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->