<!-- Start SDK Example Usage -->
```typescript
import {
  DatastoreProjectsAllocateIdsRequest,
  DatastoreProjectsAllocateIdsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastoreProjectsAllocateIdsRequest = {
  dollarXgafv: XgafvEnum.Two,
  allocateIdsRequest: {
    keys: [
      {
        partitionId: {
          namespaceId: "distinctio",
          projectId: "quibusdam",
        },
        path: [
          {
            id: "nulla",
            kind: "corrupti",
            name: "illum",
          },
          {
            id: "vel",
            kind: "error",
            name: "deserunt",
          },
          {
            id: "suscipit",
            kind: "iure",
            name: "magnam",
          },
        ],
      },
      {
        partitionId: {
          namespaceId: "debitis",
          projectId: "ipsa",
        },
        path: [
          {
            id: "tempora",
            kind: "suscipit",
            name: "molestiae",
          },
          {
            id: "minus",
            kind: "placeat",
            name: "voluptatum",
          },
          {
            id: "iusto",
            kind: "excepturi",
            name: "nisi",
          },
          {
            id: "recusandae",
            kind: "temporibus",
            name: "ab",
          },
        ],
      },
      {
        partitionId: {
          namespaceId: "quis",
          projectId: "veritatis",
        },
        path: [
          {
            id: "perferendis",
            kind: "ipsam",
            name: "repellendus",
          },
          {
            id: "sapiente",
            kind: "quo",
            name: "odit",
          },
          {
            id: "at",
            kind: "at",
            name: "maiores",
          },
        ],
      },
    ],
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  callback: "quod",
  fields: "esse",
  key: "totam",
  oauthToken: "porro",
  prettyPrint: false,
  projectId: "dolorum",
  quotaUser: "dicta",
  uploadType: "nam",
  uploadProtocol: "officia",
};

sdk.projects.datastoreProjectsAllocateIds(req).then((res: DatastoreProjectsAllocateIdsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->