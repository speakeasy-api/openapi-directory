<!-- Start SDK Example Usage -->
```typescript
import {
  DatamigrationProjectsLocationsConnectionProfilesCreateRequest,
  DatamigrationProjectsLocationsConnectionProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ConnectionProfileProviderEnum,
  ConnectionProfileStateEnum,
  CloudSqlSettingsActivationPolicyEnum,
  CloudSqlSettingsDataDiskTypeEnum,
  CloudSqlSettingsDatabaseVersionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatamigrationProjectsLocationsConnectionProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionProfileInput: {
    cloudsql: {
      settings: {
        activationPolicy: CloudSqlSettingsActivationPolicyEnum.Always,
        autoStorageIncrease: false,
        dataDiskSizeGb: "distinctio",
        dataDiskType: CloudSqlSettingsDataDiskTypeEnum.PdHdd,
        databaseFlags: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        databaseVersion: CloudSqlSettingsDatabaseVersionEnum.Mysql56,
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "magnam",
              label: "debitis",
              ttl: "ipsa",
              value: "delectus",
            },
            {
              expireTime: "tempora",
              label: "suscipit",
              ttl: "molestiae",
              value: "minus",
            },
          ],
          enableIpv4: false,
          privateNetwork: "placeat",
          requireSsl: false,
        },
        rootPassword: "voluptatum",
        sourceId: "iusto",
        storageAutoResizeLimit: "excepturi",
        tier: "nisi",
        userLabels: {
          "temporibus": "ab",
          "quis": "veritatis",
          "deserunt": "perferendis",
          "ipsam": "repellendus",
        },
        zone: "sapiente",
      },
    },
    displayName: "quo",
    error: {
      code: 140350,
      details: [
        {
          "maiores": "molestiae",
          "quod": "quod",
          "esse": "totam",
          "porro": "dolorum",
        },
        {
          "nam": "officia",
        },
        {
          "fugit": "deleniti",
          "hic": "optio",
          "totam": "beatae",
        },
        {
          "molestiae": "modi",
          "qui": "impedit",
        },
      ],
      message: "cum",
    },
    labels: {
      "ipsum": "excepturi",
      "aspernatur": "perferendis",
    },
    mysql: {
      cloudSqlId: "ad",
      host: "natus",
      password: "sed",
      port: 612096,
      ssl: {
        caCertificate: "dolor",
        clientCertificate: "natus",
        clientKey: "laboriosam",
      },
      username: "Tyra.Turcotte35",
    },
    name: "iste",
    provider: ConnectionProfileProviderEnum.Cloudsql,
    state: ConnectionProfileStateEnum.Failed,
  },
  accessToken: "quidem",
  alt: AltEnum.Json,
  callback: "ipsa",
  connectionProfileId: "reiciendis",
  fields: "est",
  key: "mollitia",
  oauthToken: "laborum",
  parent: "dolores",
  prettyPrint: false,
  quotaUser: "dolorem",
  requestId: "corporis",
  uploadType: "explicabo",
  uploadProtocol: "nobis",
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->