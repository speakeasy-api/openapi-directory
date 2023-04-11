<!-- Start SDK Example Usage -->
```typescript
import {
  AddressAutocompleteRequest,
  AddressAutocompleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  BiasIpParamEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddressAutocompleteRequest = {
  apiKey: "ak_test",
  biasCountry: "corrupti",
  biasIp: BiasIpParamEnum.True,
  biasLonlat: "-2.095,57.15,100",
  biasPostTown: "provident",
  biasPostcode: "/addresses?postcode=SW1A2AA&q=10",
  biasPostcodeArea: "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
  biasPostcodeOutward: "distinctio",
  biasPostcodeSector: "SW1A 2AA is SW1A 2",
  biasThoroughfare: "quibusdam",
  box: "2.095,57.15,-2.096,57.14",
  context: "unde",
  country: "England",
  limit: 5,
  postTown: "London",
  postcode: "SW1A 2AA",
  postcodeArea: "SW",
  postcodeOutward: "1AA",
  postcodeSector: "SW1A 2",
  postcodeType: "L",
  query: "nulla",
  suOrganisationIndicator: "Y",
  uprn: 100023336956,
};

sdk.addressSearch.addressAutocomplete(req).then((res: AddressAutocompleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->