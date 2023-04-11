<!-- Start SDK Example Usage -->
```typescript
import {
  PostV05ConsentRequestsInitJsonRequest,
  PostV05ConsentRequestsInitJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  PermissionAccessModeEnum,
  PermissionFrequencyUnitEnum,
  HITypeEnumEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostV05ConsentRequestsInitJsonRequest = {
  authorization: "corrupti",
  consentRequest: {
    consent: {
      careContexts: [
        {
          careContextReference: "Episode1",
          patientReference: "batman@tmh",
        },
        {
          careContextReference: "Episode1",
          patientReference: "batman@tmh",
        },
        {
          careContextReference: "Episode1",
          patientReference: "batman@tmh",
        },
      ],
      hiTypes: [
        HITypeEnumEnum.DiagnosticReport,
        HITypeEnumEnum.DischargeSummary,
        HITypeEnumEnum.DiagnosticReport,
      ],
      hip: {
        id: "corrupti",
      },
      hiu: {
        id: "illum",
      },
      patient: {
        id: "hinapatel79@ndhm",
      },
      permission: {
        accessMode: PermissionAccessModeEnum.Store,
        dataEraseAt: "2021-09-16T11:56:06.019Z",
        dateRange: {
          from: "2022-07-25T06:44:09.184Z",
          to: "2022-02-09T12:04:06.508Z",
        },
        frequency: {
          repeats: 56713,
          unit: PermissionFrequencyUnitEnum.Year,
          value: 272656,
        },
      },
      purpose: {
        code: "suscipit",
        refUri: "http://spotted-skyline.name",
        text: "iusto",
      },
      requester: {
        identifier: {
          system: "https://www.mciindia.org",
          type: "REGNO",
          value: "MH1001",
        },
        name: "Dr. Manju",
      },
    },
    requestId: "499a5a4a-7dda-4f20-9b67-e24589627061",
    timestamp: "2022-03-20T06:24:36.919Z",
  },
};

sdk.consent.postV05ConsentRequestsInitJson(req).then((res: PostV05ConsentRequestsInitJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->