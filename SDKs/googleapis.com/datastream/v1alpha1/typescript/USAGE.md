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
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    displayName: "voluptatum",
    forwardSshConnectivity: {
      hostname: "et",
      password: "ut",
      port: 161231572858529631,
      privateKey: "et",
      username: "voluptate",
    },
    gcsProfile: {
      bucketName: "iste",
      rootPath: "vitae",
    },
    labels: {
      "dolores": "illum",
      "debitis": "vel",
      "odio": "dolore",
    },
    mysqlProfile: {
      hostname: "id",
      password: "aspernatur",
      port: 2914295034816259174,
      sslConfig: {
        caCertificate: "totam",
        clientCertificate: "commodi",
        clientKey: "quis",
      },
      username: "est",
    },
    noConnectivity: {
      "odit": "non",
      "voluptas": "omnis",
      "aut": "illo",
    },
    oracleProfile: {
      connectionAttributes: {
        "officiis": "autem",
        "consectetur": "nobis",
        "odio": "qui",
      },
      databaseService: "recusandae",
      hostname: "at",
      password: "ipsum",
      port: 8902041070398994519,
      username: "modi",
    },
    privateConnectivity: {
      privateConnectionName: "sint",
    },
    staticServiceIpConnectivity: {
      "ut": "exercitationem",
    },
  },
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->