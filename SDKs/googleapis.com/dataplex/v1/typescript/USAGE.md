<!-- Start SDK Example Usage -->
```typescript
import {
  DataplexProjectsLocationsDataAttributeBindingsCreateRequest,
  DataplexProjectsLocationsDataAttributeBindingsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DataplexProjectsLocationsDataAttributeBindingsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDataplexV1DataAttributeBindingInput: {
    attributes: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    description: "nulla",
    displayName: "corrupti",
    etag: "illum",
    labels: {
      "error": "deserunt",
      "suscipit": "iure",
    },
    paths: [
      {
        attributes: [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
        name: "molestiae",
      },
      {
        attributes: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
        name: "nisi",
      },
    ],
    resource: "recusandae",
  },
  accessToken: "temporibus",
  alt: AltEnum.Json,
  callback: "quis",
  dataAttributeBindingId: "veritatis",
  fields: "deserunt",
  key: "perferendis",
  oauthToken: "ipsam",
  parent: "repellendus",
  prettyPrint: false,
  quotaUser: "sapiente",
  uploadType: "quo",
  uploadProtocol: "odit",
  validateOnly: false,
};

sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req).then((res: DataplexProjectsLocationsDataAttributeBindingsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->