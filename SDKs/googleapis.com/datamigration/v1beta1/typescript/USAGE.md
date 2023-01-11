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
    cloudsql: {
      settings: {
        activationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        autoStorageIncrease: false,
        dataDiskSizeGb: "ut",
        dataDiskType: "PD_HDD",
        databaseFlags: {
          "voluptate": "iste",
          "vitae": "totam",
        },
        databaseVersion: "SQL_DATABASE_VERSION_UNSPECIFIED",
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "debitis",
              label: "vel",
              ttl: "odio",
              value: "dolore",
            },
            {
              expireTime: "id",
              label: "aspernatur",
              ttl: "accusantium",
              value: "totam",
            },
            {
              expireTime: "commodi",
              label: "quis",
              ttl: "est",
              value: "aut",
            },
          ],
          enableIpv4: true,
          privateNetwork: "non",
          requireSsl: false,
        },
        rootPassword: "omnis",
        sourceId: "aut",
        storageAutoResizeLimit: "illo",
        tier: "sed",
        userLabels: {
          "autem": "consectetur",
          "nobis": "odio",
        },
        zone: "qui",
      },
    },
    displayName: "recusandae",
    error: {
      code: 7561811714888168464,
      details: [
        {
          "modi": "sint",
          "inventore": "ut",
        },
      ],
      message: "exercitationem",
    },
    labels: {
      "reprehenderit": "tempore",
      "maiores": "incidunt",
      "dolor": "beatae",
    },
    mysql: {
      cloudSqlId: "veritatis",
      host: "in",
      password: "et",
      port: 8565714761387219319,
      ssl: {
        caCertificate: "ipsum",
        clientCertificate: "ex",
        clientKey: "dolores",
      },
      username: "placeat",
    },
    name: "vel",
    provider: "RDS",
    state: "DRAFT",
  },
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->