<!-- Start SDK Example Usage -->
```typescript
import {
  CloudkmsProjectsLocationsEkmConnectionsCreateRequest,
  CloudkmsProjectsLocationsEkmConnectionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EkmConnectionKeyManagementModeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudkmsProjectsLocationsEkmConnectionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  ekmConnectionInput: {
    cryptoSpacePath: "provident",
    etag: "distinctio",
    keyManagementMode: EkmConnectionKeyManagementModeEnum.CloudKms,
    serviceResolvers: [
      {
        endpointFilter: "nulla",
        hostname: "moral-star.info",
        serverCertificates: [
          {
            rawDer: "deserunt",
          },
          {
            rawDer: "suscipit",
          },
          {
            rawDer: "iure",
          },
        ],
        serviceDirectoryService: "magnam",
      },
      {
        endpointFilter: "debitis",
        hostname: "awesome-voter.biz",
        serverCertificates: [
          {
            rawDer: "molestiae",
          },
          {
            rawDer: "minus",
          },
        ],
        serviceDirectoryService: "placeat",
      },
      {
        endpointFilter: "voluptatum",
        hostname: "lawful-missionary.info",
        serverCertificates: [
          {
            rawDer: "temporibus",
          },
          {
            rawDer: "ab",
          },
          {
            rawDer: "quis",
          },
          {
            rawDer: "veritatis",
          },
        ],
        serviceDirectoryService: "deserunt",
      },
    ],
  },
  accessToken: "perferendis",
  alt: AltEnum.Media,
  callback: "repellendus",
  ekmConnectionId: "sapiente",
  fields: "quo",
  key: "odit",
  oauthToken: "at",
  parent: "at",
  prettyPrint: false,
  quotaUser: "maiores",
  uploadType: "molestiae",
  uploadProtocol: "quod",
};

sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req).then((res: CloudkmsProjectsLocationsEkmConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->