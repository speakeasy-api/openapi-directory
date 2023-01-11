<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DatastreamProjectsLocationsConnectionProfilesCreateRequest, DatastreamProjectsLocationsConnectionProfilesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatastreamProjectsLocationsConnectionProfilesCreateRequest = {
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
    force: true,
    key: "fugit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    requestId: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
    validateOnly: false,
  },
  request: {
    bigqueryProfile: {
      "dolorem": "et",
      "voluptate": "iste",
      "vitae": "totam",
    },
    displayName: "dolores",
    forwardSshConnectivity: {
      hostname: "illum",
      password: "debitis",
      port: 3706853784096366226,
      privateKey: "odio",
      username: "dolore",
    },
    gcsProfile: {
      bucket: "id",
      rootPath: "aspernatur",
    },
    labels: {
      "totam": "commodi",
      "quis": "est",
      "aut": "odit",
    },
    mysqlProfile: {
      hostname: "non",
      password: "voluptas",
      port: 4778690082005258714,
      sslConfig: {
        caCertificate: "aut",
        clientCertificate: "illo",
        clientKey: "sed",
      },
      username: "officiis",
    },
    oracleProfile: {
      connectionAttributes: {
        "consectetur": "nobis",
        "odio": "qui",
      },
      databaseService: "recusandae",
      hostname: "at",
      password: "ipsum",
      port: 8902041070398994519,
      username: "modi",
    },
    postgresqlProfile: {
      database: "sint",
      hostname: "inventore",
      password: "ut",
      port: 406703151708498928,
      username: "aut",
    },
    privateConnectivity: {
      privateConnection: "reprehenderit",
    },
    staticServiceIpConnectivity: {
      "maiores": "incidunt",
      "dolor": "beatae",
      "veritatis": "in",
    },
  },
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->