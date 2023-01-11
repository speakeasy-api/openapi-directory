<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DataprocProjectsLocationsBatchesCreateRequest, DataprocProjectsLocationsBatchesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DataprocProjectsLocationsBatchesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    batchId: "consequuntur",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    environmentConfig: {
      executionConfig: {
        idleTtl: "voluptatum",
        kmsKey: "et",
        networkTags: [
          "dolorem",
          "et",
          "voluptate",
        ],
        networkUri: "iste",
        serviceAccount: "vitae",
        subnetworkUri: "totam",
      },
      peripheralsConfig: {
        metastoreService: "dolores",
        sparkHistoryServerConfig: {
          dataprocCluster: "illum",
        },
      },
    },
    labels: {
      "vel": "odio",
    },
    pysparkBatch: {
      archiveUris: [
        "id",
        "aspernatur",
      ],
      args: [
        "totam",
        "commodi",
        "quis",
      ],
      fileUris: [
        "aut",
        "odit",
      ],
      jarFileUris: [
        "voluptas",
        "omnis",
        "aut",
      ],
      mainPythonFileUri: "illo",
      pythonFileUris: [
        "officiis",
        "autem",
        "consectetur",
      ],
    },
    runtimeConfig: {
      containerImage: "nobis",
      properties: {
        "qui": "recusandae",
      },
      version: "at",
    },
    runtimeInfo: {
      approximateUsage: {
        milliDcuSeconds: "ipsum",
        shuffleStorageGbSeconds: "eveniet",
      },
    },
    sparkBatch: {
      archiveUris: [
        "sint",
        "inventore",
      ],
      args: [
        "exercitationem",
        "aut",
        "reprehenderit",
      ],
      fileUris: [
        "maiores",
        "incidunt",
        "dolor",
      ],
      jarFileUris: [
        "veritatis",
        "in",
        "et",
      ],
      mainClass: "omnis",
      mainJarFileUri: "ipsum",
    },
    sparkRBatch: {
      archiveUris: [
        "dolores",
      ],
      args: [
        "vel",
      ],
      fileUris: [
        "mollitia",
        "voluptas",
        "quam",
      ],
      mainRFileUri: "reprehenderit",
    },
    sparkSqlBatch: {
      jarFileUris: [
        "qui",
      ],
      queryFileUri: "unde",
      queryVariables: {
        "autem": "qui",
        "ut": "itaque",
      },
    },
  },
};

sdk.projects.dataprocProjectsLocationsBatchesCreate(req).then((res: DataprocProjectsLocationsBatchesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->