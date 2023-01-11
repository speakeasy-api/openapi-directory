<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudkmsProjectsLocationsEkmConnectionsCreateRequest, CloudkmsProjectsLocationsEkmConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudkmsProjectsLocationsEkmConnectionsCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
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
    ekmConnectionId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    etag: "debitis",
    serviceResolvers: [
      {
        endpointFilter: "et",
        hostname: "ut",
        serverCertificates: [
          {
            rawDer: "et",
          },
          {
            rawDer: "voluptate",
          },
          {
            rawDer: "iste",
          },
        ],
        serviceDirectoryService: "vitae",
      },
    ],
  },
};

sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req).then((res: CloudkmsProjectsLocationsEkmConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->