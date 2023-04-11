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
    databaseId: "provident",
    keys: [
      {
        partitionId: {
          databaseId: "quibusdam",
          namespaceId: "unde",
          projectId: "nulla",
        },
        path: [
          {
            id: "illum",
            kind: "vel",
            name: "error",
          },
          {
            id: "deserunt",
            kind: "suscipit",
            name: "iure",
          },
          {
            id: "magnam",
            kind: "debitis",
            name: "ipsa",
          },
        ],
      },
      {
        partitionId: {
          databaseId: "delectus",
          namespaceId: "tempora",
          projectId: "suscipit",
        },
        path: [
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
        ],
      },
      {
        partitionId: {
          databaseId: "recusandae",
          namespaceId: "temporibus",
          projectId: "ab",
        },
        path: [
          {
            id: "veritatis",
            kind: "deserunt",
            name: "perferendis",
          },
          {
            id: "ipsam",
            kind: "repellendus",
            name: "sapiente",
          },
        ],
      },
    ],
  },
  accessToken: "quo",
  alt: AltEnum.Json,
  callback: "at",
  fields: "at",
  key: "maiores",
  oauthToken: "molestiae",
  prettyPrint: false,
  projectId: "quod",
  quotaUser: "quod",
  uploadType: "esse",
  uploadProtocol: "totam",
};

sdk.projects.datastoreProjectsAllocateIds(req).then((res: DatastoreProjectsAllocateIdsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->