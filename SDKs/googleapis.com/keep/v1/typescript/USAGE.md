<!-- Start SDK Example Usage -->
```typescript
import {
  KeepNotesCreateRequest,
  KeepNotesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KeepNotesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  noteInput: {
    body: {
      list: {
        listItems: [
          {
            checked: false,
            childListItems: [
              {},
              {},
              {},
            ],
            text: {
              text: "quibusdam",
            },
          },
          {
            checked: false,
            childListItems: [
              {},
              {},
              {},
            ],
            text: {
              text: "nulla",
            },
          },
          {
            checked: false,
            childListItems: [
              {},
              {},
              {},
            ],
            text: {
              text: "illum",
            },
          },
        ],
      },
      text: {
        text: "vel",
      },
    },
    title: "Miss",
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.notes.keepNotesCreate(req).then((res: KeepNotesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->