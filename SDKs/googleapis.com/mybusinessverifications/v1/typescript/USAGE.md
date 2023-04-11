<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessverificationsLocationsFetchVerificationOptionsRequest,
  MybusinessverificationsLocationsFetchVerificationOptionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessverificationsLocationsFetchVerificationOptionsRequest = {
  dollarXgafv: XgafvEnum.Two,
  fetchVerificationOptionsRequest: {
    context: {
      address: {
        addressLines: [
          "distinctio",
          "quibusdam",
          "unde",
        ],
        administrativeArea: "nulla",
        languageCode: "corrupti",
        locality: "illum",
        organization: "vel",
        postalCode: "63428-0923",
        recipients: [
          "minus",
          "placeat",
        ],
        regionCode: "voluptatum",
        revision: 479977,
        sortingCode: "excepturi",
        sublocality: "nisi",
      },
    },
    languageCode: "recusandae",
  },
  accessToken: "temporibus",
  alt: AltEnum.Json,
  callback: "quis",
  fields: "veritatis",
  key: "deserunt",
  location: "perferendis",
  oauthToken: "ipsam",
  prettyPrint: false,
  quotaUser: "repellendus",
  uploadType: "sapiente",
  uploadProtocol: "quo",
};

sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req).then((res: MybusinessverificationsLocationsFetchVerificationOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->