<!-- Start SDK Example Usage -->
```typescript
import {
  DatastreamProjectsLocationsConnectionProfilesCreateRequest,
  DatastreamProjectsLocationsConnectionProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastreamProjectsLocationsConnectionProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionProfileInput: {
    bigqueryProfile: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    displayName: "vel",
    forwardSshConnectivity: {
      hostname: "physical-pegboard.info",
      password: "iure",
      port: 297534,
      privateKey: "debitis",
      username: "Anahi38",
    },
    gcsProfile: {
      bucket: "molestiae",
      rootPath: "minus",
    },
    labels: {
      "voluptatum": "iusto",
      "excepturi": "nisi",
      "recusandae": "temporibus",
      "ab": "quis",
    },
    mysqlProfile: {
      hostname: "bountiful-pension.com",
      password: "ipsam",
      port: 832620,
      sslConfig: {
        caCertificate: "sapiente",
        clientCertificate: "quo",
        clientKey: "odit",
      },
      username: "Sarah.Strosin79",
    },
    oracleProfile: {
      connectionAttributes: {
        "esse": "totam",
        "porro": "dolorum",
        "dicta": "nam",
        "officia": "occaecati",
      },
      databaseService: "fugit",
      hostname: "miserly-usage.net",
      password: "totam",
      port: 105907,
      username: "Haskell18",
    },
    postgresqlProfile: {
      database: "impedit",
      hostname: "several-increase.biz",
      password: "excepturi",
      port: 135218,
      username: "Aiden.Hane",
    },
    privateConnectivity: {
      privateConnection: "iste",
    },
    staticServiceIpConnectivity: {
      "natus": "laboriosam",
    },
  },
  accessToken: "hic",
  alt: AltEnum.Proto,
  callback: "fuga",
  connectionProfileId: "in",
  fields: "corporis",
  force: false,
  key: "iste",
  oauthToken: "iure",
  parent: "saepe",
  prettyPrint: false,
  quotaUser: "quidem",
  requestId: "architecto",
  uploadType: "ipsa",
  uploadProtocol: "reiciendis",
  validateOnly: false,
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->