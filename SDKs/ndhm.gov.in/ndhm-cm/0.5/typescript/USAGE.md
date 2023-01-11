<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostV05ConsentRequestsInitRequest, PostV05ConsentRequestsInitResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostV05ConsentRequestsInitRequest = {
  headers: {
    authorization: "sit",
  },
  request: {
    applicationXML: "voluptas".encode(),
    consentRequest: {
      consent: {
        careContexts: [
          {
            careContextReference: "expedita",
            patientReference: "consequuntur",
          },
          {
            careContextReference: "dolor",
            patientReference: "expedita",
          },
        ],
        hiTypes: [
          "OPConsultation",
          "OPConsultation",
          "OPConsultation",
        ],
        hip: {
          id: "rerum",
        },
        hiu: {
          id: "dicta",
        },
        patient: {
          id: "debitis",
        },
        permission: {
          accessMode: "VIEW",
          dataEraseAt: "2005-09-27T09:17:54Z",
          dateRange: {
            from: "1970-04-14T21:44:49Z",
            to: "2021-10-23T13:19:10Z",
          },
          frequency: {
            repeats: 7259475919510918339,
            unit: "YEAR",
            value: 3287288577352441706,
          },
        },
        purpose: {
          code: "vitae",
          refUri: "totam",
          text: "dolores",
        },
        requester: {
          identifier: {
            system: "illum",
            type: "debitis",
            value: "vel",
          },
          name: "odio",
        },
      },
      requestId: "dolore",
      timestamp: "1993-03-23T22:53:08Z",
    },
  },
};

sdk.consent.postV05ConsentRequestsInit(req).then((res: PostV05ConsentRequestsInitResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->