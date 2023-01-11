<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AndroiddeviceprovisioningCustomersConfigurationsCreateRequest, AndroiddeviceprovisioningCustomersConfigurationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroiddeviceprovisioningCustomersConfigurationsCreateRequest = {
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
    companyName: "dicta",
    configurationName: "debitis",
    contactEmail: "voluptatum",
    contactPhone: "et",
    customMessage: "ut",
    dpcExtras: "dolorem",
    dpcResourcePath: "et",
    isDefault: false,
  },
};

sdk.customers.androiddeviceprovisioningCustomersConfigurationsCreate(req).then((res: AndroiddeviceprovisioningCustomersConfigurationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->