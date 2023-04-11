<!-- Start SDK Example Usage -->
```typescript
import {
  DataprocProjectsLocationsBatchesCreateRequest,
  DataprocProjectsLocationsBatchesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DataprocProjectsLocationsBatchesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchInput: {
    environmentConfig: {
      executionConfig: {
        idleTtl: "provident",
        kmsKey: "distinctio",
        networkTags: [
          "unde",
          "nulla",
          "corrupti",
          "illum",
        ],
        networkUri: "vel",
        serviceAccount: "error",
        stagingBucket: "deserunt",
        subnetworkUri: "suscipit",
        ttl: "iure",
      },
      peripheralsConfig: {
        metastoreService: "magnam",
        sparkHistoryServerConfig: {
          dataprocCluster: "debitis",
        },
      },
    },
    labels: {
      "delectus": "tempora",
    },
    pysparkBatch: {
      archiveUris: [
        "molestiae",
        "minus",
      ],
      args: [
        "voluptatum",
        "iusto",
        "excepturi",
        "nisi",
      ],
      fileUris: [
        "temporibus",
        "ab",
        "quis",
        "veritatis",
      ],
      jarFileUris: [
        "perferendis",
        "ipsam",
        "repellendus",
      ],
      mainPythonFileUri: "sapiente",
      pythonFileUris: [
        "odit",
        "at",
        "at",
        "maiores",
      ],
    },
    runtimeConfig: {
      containerImage: "molestiae",
      properties: {
        "quod": "esse",
        "totam": "porro",
        "dolorum": "dicta",
        "nam": "officia",
      },
      version: "occaecati",
    },
    runtimeInfo: {
      approximateUsage: {
        milliDcuSeconds: "fugit",
        shuffleStorageGbSeconds: "deleniti",
      },
      currentUsage: {
        milliDcu: "hic",
        shuffleStorageGb: "optio",
        snapshotTime: "totam",
      },
    },
    sparkBatch: {
      archiveUris: [
        "commodi",
      ],
      args: [
        "modi",
        "qui",
      ],
      fileUris: [
        "cum",
        "esse",
        "ipsum",
        "excepturi",
      ],
      jarFileUris: [
        "perferendis",
      ],
      mainClass: "ad",
      mainJarFileUri: "natus",
    },
    sparkRBatch: {
      archiveUris: [
        "iste",
      ],
      args: [
        "natus",
      ],
      fileUris: [
        "hic",
        "saepe",
      ],
      mainRFileUri: "fuga",
    },
    sparkSqlBatch: {
      jarFileUris: [
        "corporis",
        "iste",
      ],
      queryFileUri: "iure",
      queryVariables: {
        "quidem": "architecto",
        "ipsa": "reiciendis",
        "est": "mollitia",
        "laborum": "dolores",
      },
    },
  },
  accessToken: "dolorem",
  alt: AltEnum.Media,
  batchId: "explicabo",
  callback: "nobis",
  fields: "enim",
  key: "omnis",
  oauthToken: "nemo",
  parent: "minima",
  prettyPrint: false,
  quotaUser: "excepturi",
  requestId: "accusantium",
  uploadType: "iure",
  uploadProtocol: "culpa",
};

sdk.projects.dataprocProjectsLocationsBatchesCreate(req).then((res: DataprocProjectsLocationsBatchesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->