<!-- Start SDK Example Usage -->
```typescript
import {
  GkebackupProjectsLocationsBackupPlansBackupsCreateRequest,
  GkebackupProjectsLocationsBackupPlansBackupsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GkebackupProjectsLocationsBackupPlansBackupsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  backupInput: {
    clusterMetadata: {
      anthosVersion: "provident",
      backupCrdVersions: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      cluster: "error",
      gkeVersion: "deserunt",
      k8sVersion: "suscipit",
    },
    deleteLockDays: 437587,
    description: "magnam",
    encryptionKey: {
      gcpKmsEncryptionKey: "debitis",
    },
    labels: {
      "delectus": "tempora",
    },
    retainDays: 383441,
    selectedApplications: {
      namespacedNames: [
        {
          name: "minus",
          namespace: "placeat",
        },
        {
          name: "voluptatum",
          namespace: "iusto",
        },
      ],
    },
    selectedNamespaces: {
      namespaces: [
        "nisi",
        "recusandae",
        "temporibus",
      ],
    },
  },
  accessToken: "ab",
  alt: AltEnum.Media,
  backupId: "veritatis",
  callback: "deserunt",
  fields: "perferendis",
  key: "ipsam",
  oauthToken: "repellendus",
  parent: "sapiente",
  prettyPrint: false,
  quotaUser: "quo",
  uploadType: "odit",
  uploadProtocol: "at",
};

sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req).then((res: GkebackupProjectsLocationsBackupPlansBackupsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->