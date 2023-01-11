<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest, CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest = {
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
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    deviceId: "dicta",
    gatewayId: "debitis",
  },
};

sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req).then((res: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->