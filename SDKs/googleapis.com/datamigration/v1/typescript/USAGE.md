<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DatamigrationProjectsLocationsConnectionProfilesCreateRequest, DatamigrationProjectsLocationsConnectionProfilesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatamigrationProjectsLocationsConnectionProfilesCreateRequest = {
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
    callback: "consequuntur",
    connectionProfileId: "dolor",
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
    alloydb: {
      clusterId: "voluptatum",
      settings: {
        initialUser: {
          password: "et",
          user: "ut",
        },
        labels: {
          "et": "voluptate",
          "iste": "vitae",
          "totam": "dolores",
        },
        primaryInstanceSettings: {
          databaseFlags: {
            "debitis": "vel",
            "odio": "dolore",
            "id": "aspernatur",
          },
          id: "accusantium",
          labels: {
            "commodi": "quis",
            "est": "aut",
            "odit": "non",
          },
          machineConfig: {
            cpuCount: 167566062957544642,
          },
        },
        vpcNetwork: "omnis",
      },
    },
    cloudsql: {
      settings: {
        activationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        autoStorageIncrease: true,
        availabilityType: "REGIONAL",
        cmekKeyName: "officiis",
        collation: "autem",
        dataDiskSizeGb: "consectetur",
        dataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
        databaseFlags: {
          "qui": "recusandae",
        },
        databaseVersion: "POSTGRES_13",
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "eveniet",
              label: "modi",
              ttl: "sint",
              value: "inventore",
            },
          ],
          enableIpv4: true,
          privateNetwork: "exercitationem",
          requireSsl: true,
        },
        rootPassword: "reprehenderit",
        secondaryZone: "tempore",
        sourceId: "maiores",
        storageAutoResizeLimit: "incidunt",
        tier: "dolor",
        userLabels: {
          "veritatis": "in",
          "et": "omnis",
          "ipsum": "ex",
        },
        zone: "dolores",
      },
    },
    displayName: "placeat",
    error: {
      code: 2118716725206170867,
      details: [
        {
          "voluptas": "quam",
          "reprehenderit": "qui",
        },
        {
          "unde": "in",
        },
        {
          "qui": "ut",
          "itaque": "ab",
        },
      ],
      message: "neque",
    },
    labels: {
      "et": "accusantium",
      "esse": "architecto",
      "quam": "velit",
    },
    mysql: {
      cloudSqlId: "cumque",
      host: "soluta",
      password: "sunt",
      port: 2408550365227740434,
      ssl: {
        caCertificate: "magni",
        clientCertificate: "et",
        clientKey: "optio",
      },
      username: "qui",
    },
    name: "earum",
    postgresql: {
      cloudSqlId: "illo",
      host: "omnis",
      password: "ut",
      port: 7442289190031176026,
      ssl: {
        caCertificate: "dolor",
        clientCertificate: "commodi",
        clientKey: "error",
      },
      username: "reprehenderit",
    },
    provider: "AURORA",
    state: "READY",
  },
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->