<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ParseAddressRequest, ParseAddressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ParseAddressRequest = {
  request: {
    address: {
      addressLine1: "sit",
      addressLine2: "voluptas",
      addressLine3: "culpa",
      addressResidentialIndicator: {
        "consequuntur": "dolor",
        "expedita": "voluptas",
      },
      cityLocality: "fugit",
      companyName: "et",
      countryCode: "nihil",
      name: "rerum",
      phone: "dicta",
      postalCode: "debitis",
      stateProvince: "voluptatum",
    },
    text: "et",
  },
};

sdk.addresses.parseAddress(req).then((res: ParseAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->