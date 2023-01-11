<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateLicenseRequest, CreateLicenseResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateLicenseRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    active: false,
    currency: "voluptas",
    hidden: true,
    licenseTemplateNumber: "expedita",
    licenseeNumber: "consequuntur",
    name: "dolor",
    number: "expedita",
    parentfeature: "voluptas",
    price: 88.099998,
    quantity: "nihil",
    startDate: "2004-06-02T10:14:12Z",
    timeVolume: "voluptatum",
    timeVolumePeriod: "et",
    usedQuantity: "ut",
  },
};

sdk.license.createLicense(req).then((res: CreateLicenseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->