<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConnectorsProjectsLocationsConnectionsCreateRequest, ConnectorsProjectsLocationsConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConnectorsProjectsLocationsConnectionsCreateRequest = {
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
    connectionId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    authConfig: {
      additionalVariables: [
        {
          boolValue: true,
          intValue: "et",
          key: "ut",
          secretValue: {
            secretVersion: "dolorem",
          },
          stringValue: "et",
        },
      ],
      authType: "AUTH_TYPE_UNSPECIFIED",
      oauth2ClientCredentials: {
        clientId: "iste",
        clientSecret: {
          secretVersion: "vitae",
        },
      },
      oauth2JwtBearer: {
        clientKey: {
          secretVersion: "totam",
        },
        jwtClaims: {
          audience: "dolores",
          issuer: "illum",
          subject: "debitis",
        },
      },
      sshPublicKey: {
        certType: "vel",
        sshClientCert: {
          secretVersion: "odio",
        },
        sshClientCertPass: {
          secretVersion: "dolore",
        },
        username: "id",
      },
      userPassword: {
        password: {
          secretVersion: "aspernatur",
        },
        username: "accusantium",
      },
    },
    configVariables: [
      {
        boolValue: false,
        intValue: "quis",
        key: "est",
        secretValue: {
          secretVersion: "aut",
        },
        stringValue: "odit",
      },
      {
        boolValue: true,
        intValue: "voluptas",
        key: "omnis",
        secretValue: {
          secretVersion: "aut",
        },
        stringValue: "illo",
      },
      {
        boolValue: false,
        intValue: "officiis",
        key: "autem",
        secretValue: {
          secretVersion: "consectetur",
        },
        stringValue: "nobis",
      },
    ],
    connectorVersion: "odio",
    description: "qui",
    destinationConfigs: [
      {
        destinations: [
          {
            host: "ipsum",
            port: 8902041070398994519,
            serviceAttachment: "modi",
          },
          {
            host: "sint",
            port: 5392504858645185670,
            serviceAttachment: "ut",
          },
        ],
        key: "exercitationem",
      },
      {
        destinations: [
          {
            host: "reprehenderit",
            port: 4736217237333769909,
            serviceAttachment: "maiores",
          },
          {
            host: "incidunt",
            port: 7242748068272024738,
            serviceAttachment: "beatae",
          },
          {
            host: "veritatis",
            port: 2671030200101705776,
            serviceAttachment: "et",
          },
        ],
        key: "omnis",
      },
      {
        destinations: [
          {
            host: "ex",
            port: 7014402135919778893,
            serviceAttachment: "placeat",
          },
        ],
        key: "vel",
      },
    ],
    labels: {
      "mollitia": "voluptas",
      "quam": "reprehenderit",
      "qui": "qui",
    },
    lockConfig: {
      locked: false,
      reason: "in",
    },
    nodeConfig: {
      maxNodeCount: 7132033595893905170,
      minNodeCount: 8086159467323165929,
    },
    serviceAccount: "ut",
    status: {
      description: "itaque",
      state: "DELETING",
      status: "neque",
    },
    suspended: true,
  },
};

sdk.projects.connectorsProjectsLocationsConnectionsCreate(req).then((res: ConnectorsProjectsLocationsConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->