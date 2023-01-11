<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GkebackupProjectsLocationsBackupPlansBackupsCreateRequest, GkebackupProjectsLocationsBackupPlansBackupsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GkebackupProjectsLocationsBackupPlansBackupsCreateRequest = {
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
    backupId: "consequuntur",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    clusterMetadata: {
      anthosVersion: "debitis",
      backupCrdVersions: {
        "et": "ut",
      },
      cluster: "dolorem",
      gkeVersion: "et",
      k8sVersion: "voluptate",
    },
    deleteLockDays: 3287288577352441706,
    description: "vitae",
    encryptionKey: {
      gcpKmsEncryptionKey: "totam",
    },
    labels: {
      "illum": "debitis",
    },
    retainDays: 3706853784096366226,
    selectedApplications: {
      namespacedNames: [
        {
          name: "dolore",
          namespace: "id",
        },
      ],
    },
    selectedNamespaces: {
      namespaces: [
        "accusantium",
      ],
    },
  },
};

sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req).then((res: GkebackupProjectsLocationsBackupPlansBackupsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->