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
    displayName: "provident",
    forwardSshConnectivity: {
      hostname: "salty-stag.name",
      password: "nulla",
      port: 544883,
      privateKey: "illum",
      username: "Henry.Mueller",
    },
    gcsProfile: {
      bucketName: "iure",
      rootPath: "magnam",
    },
    labels: {
      "ipsa": "delectus",
      "tempora": "suscipit",
      "molestiae": "minus",
      "placeat": "voluptatum",
    },
    mysqlProfile: {
      hostname: "lawful-missionary.info",
      password: "recusandae",
      port: 836079,
      sslConfig: {
        caCertificate: "ab",
        clientCertificate: "quis",
        clientKey: "veritatis",
      },
      username: "Lydia_Aufderhar",
    },
    noConnectivity: {
      "quo": "odit",
      "at": "at",
      "maiores": "molestiae",
      "quod": "quod",
    },
    oracleProfile: {
      connectionAttributes: {
        "totam": "porro",
        "dolorum": "dicta",
      },
      databaseService: "nam",
      hostname: "posh-muffin.com",
      password: "deleniti",
      port: 944669,
      username: "Nina41",
    },
    privateConnectivity: {
      privateConnectionName: "molestiae",
    },
    staticServiceIpConnectivity: {
      "qui": "impedit",
      "cum": "esse",
    },
  },
  accessToken: "ipsum",
  alt: AltEnum.Media,
  callback: "aspernatur",
  connectionProfileId: "perferendis",
  fields: "ad",
  key: "natus",
  oauthToken: "sed",
  parent: "iste",
  prettyPrint: false,
  quotaUser: "dolor",
  requestId: "natus",
  uploadType: "laboriosam",
  uploadProtocol: "hic",
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->