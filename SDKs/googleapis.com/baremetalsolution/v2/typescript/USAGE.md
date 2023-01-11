<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest, BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    location: "sit",
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
};

sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req).then((res: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->