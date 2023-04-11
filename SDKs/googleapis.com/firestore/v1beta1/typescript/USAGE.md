<!-- Start SDK Example Usage -->
```typescript
import {
  FirestoreProjectsDatabasesDocumentsBatchGetRequest,
  FirestoreProjectsDatabasesDocumentsBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirestoreProjectsDatabasesDocumentsBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchGetDocumentsRequest: {
    documents: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    mask: {
      fieldPaths: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
    },
    newTransaction: {
      readOnly: {
        readTime: "deserunt",
      },
      readWrite: {
        retryTransaction: "suscipit",
      },
    },
    readTime: "iure",
    transaction: "magnam",
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  database: "tempora",
  fields: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.projects.firestoreProjectsDatabasesDocumentsBatchGet(req).then((res: FirestoreProjectsDatabasesDocumentsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->