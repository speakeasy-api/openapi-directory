<!-- Start SDK Example Usage -->
```typescript
import {
  GetCountriesRequest,
  GetCountriesResponse,
  GetCountriesOrderEnum,
  GetCountriesSortEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCountriesRequest = {
  marketId: "corrupti",
  order: GetCountriesOrderEnum.Descending,
  regionName: "distinctio",
  regionTypeId: 844266,
  sort: GetCountriesSortEnum.Label,
};

sdk.v1.getCountries(req).then((res: GetCountriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->