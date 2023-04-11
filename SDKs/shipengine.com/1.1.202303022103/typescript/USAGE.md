<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ParseAddressRequestBody,
  ParseAddressResponse
} from "openapi/dist/sdk/models/operations";
import {
  PartialAddressAddressResidentialIndicatorEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ParseAddressRequestBody = {
  address: {
    addressLine1: "1999 Bishop Grandin Blvd.",
    addressLine2: "Unit 408",
    addressLine3: "Building #7",
    addressResidentialIndicator: PartialAddressAddressResidentialIndicatorEnum.No,
    cityLocality: "Winnipeg",
    companyName: "The Home Depot",
    countryCode: "CA",
    email: "example@example.com",
    name: "John Doe",
    phone: "+1 204-253-9411 ext. 123",
    postalCode: "78756-3717",
    stateProvince: "Manitoba",
  },
  text: "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
};

sdk.addresses.parseAddress(req).then((res: ParseAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->