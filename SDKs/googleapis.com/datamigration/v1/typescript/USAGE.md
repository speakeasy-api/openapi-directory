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
  CloudSqlSettingsAvailabilityTypeEnum,
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
    alloydb: {
      clusterId: "provident",
      settings: {
        initialUser: {
          password: "distinctio",
          user: "quibusdam",
        },
        labels: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        primaryInstanceSettings: {
          databaseFlags: {
            "iure": "magnam",
            "debitis": "ipsa",
          },
          id: "delectus",
          labels: {
            "suscipit": "molestiae",
            "minus": "placeat",
          },
          machineConfig: {
            cpuCount: 528895,
          },
        },
        vpcNetwork: "iusto",
      },
    },
    cloudsql: {
      settings: {
        activationPolicy: CloudSqlSettingsActivationPolicyEnum.Always,
        autoStorageIncrease: false,
        availabilityType: CloudSqlSettingsAvailabilityTypeEnum.Zonal,
        cmekKeyName: "recusandae",
        collation: "temporibus",
        dataDiskSizeGb: "ab",
        dataDiskType: CloudSqlSettingsDataDiskTypeEnum.PdSsd,
        databaseFlags: {
          "deserunt": "perferendis",
        },
        databaseVersion: CloudSqlSettingsDatabaseVersionEnum.Postgres96,
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "sapiente",
              label: "quo",
              ttl: "odit",
              value: "at",
            },
            {
              expireTime: "at",
              label: "maiores",
              ttl: "molestiae",
              value: "quod",
            },
            {
              expireTime: "quod",
              label: "esse",
              ttl: "totam",
              value: "porro",
            },
            {
              expireTime: "dolorum",
              label: "dicta",
              ttl: "nam",
              value: "officia",
            },
          ],
          enableIpv4: false,
          privateNetwork: "occaecati",
          requireSsl: false,
        },
        rootPassword: "fugit",
        secondaryZone: "deleniti",
        sourceId: "hic",
        storageAutoResizeLimit: "optio",
        tier: "totam",
        userLabels: {
          "commodi": "molestiae",
        },
        zone: "modi",
      },
    },
    displayName: "qui",
    error: {
      code: 774234,
      details: [
        {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
        {
          "natus": "sed",
          "iste": "dolor",
        },
        {
          "laboriosam": "hic",
          "saepe": "fuga",
          "in": "corporis",
        },
      ],
      message: "iste",
    },
    labels: {
      "saepe": "quidem",
      "architecto": "ipsa",
    },
    mysql: {
      cloudSqlId: "reiciendis",
      host: "est",
      password: "mollitia",
      port: 670638,
      ssl: {
        caCertificate: "dolores",
        clientCertificate: "dolorem",
        clientKey: "corporis",
      },
      username: "Braulio60",
    },
    name: "nemo",
    oracle: {
      databaseService: "minima",
      forwardSshConnectivity: {
        hostname: "nippy-apse.info",
        password: "culpa",
        port: 988374,
        privateKey: "sapiente",
        username: "Bart63",
      },
      host: "consequuntur",
      password: "repellat",
      port: 653108,
      privateConnectivity: {
        privateConnection: "occaecati",
      },
      staticServiceIpConnectivity: {
        "commodi": "quam",
        "molestiae": "velit",
      },
      username: "Linda.Cronin",
    },
    postgresql: {
      cloudSqlId: "laborum",
      host: "animi",
      password: "enim",
      port: 138183,
      privateServiceConnectConnectivity: {
        serviceAttachment: "quo",
      },
      ssl: {
        caCertificate: "sequi",
        clientCertificate: "tenetur",
        clientKey: "ipsam",
      },
      staticIpConnectivity: {
        "possimus": "aut",
        "quasi": "error",
        "temporibus": "laborum",
      },
      username: "Austyn_Witting46",
    },
    provider: ConnectionProfileProviderEnum.Rds,
    state: ConnectionProfileStateEnum.Failed,
  },
  accessToken: "ipsa",
  alt: AltEnum.Media,
  callback: "voluptate",
  connectionProfileId: "cum",
  fields: "perferendis",
  key: "doloremque",
  oauthToken: "reprehenderit",
  parent: "ut",
  prettyPrint: false,
  quotaUser: "maiores",
  requestId: "dicta",
  skipValidation: false,
  uploadType: "corporis",
  uploadProtocol: "dolore",
  validateOnly: false,
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->