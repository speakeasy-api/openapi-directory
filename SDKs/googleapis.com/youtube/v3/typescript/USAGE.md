<!-- Start SDK Example Usage -->
```typescript
import {
  YoutubeAbuseReportsInsertRequest,
  YoutubeAbuseReportsInsertResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: YoutubeAbuseReportsInsertRequest = {
  dollarXgafv: XgafvEnum.Two,
  abuseReport: {
    abuseTypes: [
      {
        id: "distinctio",
      },
      {
        id: "quibusdam",
      },
      {
        id: "unde",
      },
    ],
    description: "nulla",
    relatedEntities: [
      {
        entity: {
          id: "illum",
          typeId: "vel",
          url: "error",
        },
      },
      {
        entity: {
          id: "deserunt",
          typeId: "suscipit",
          url: "iure",
        },
      },
      {
        entity: {
          id: "magnam",
          typeId: "debitis",
          url: "ipsa",
        },
      },
    ],
    subject: {
      id: "delectus",
      typeId: "tempora",
      url: "suscipit",
    },
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "placeat",
  fields: "voluptatum",
  key: "iusto",
  oauthToken: "excepturi",
  part: [
    "recusandae",
    "temporibus",
  ],
  prettyPrint: false,
  quotaUser: "ab",
  uploadType: "quis",
  uploadProtocol: "veritatis",
};

sdk.abuseReports.youtubeAbuseReportsInsert(req).then((res: YoutubeAbuseReportsInsertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->