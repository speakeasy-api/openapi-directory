<!-- Start SDK Example Usage -->
```typescript
import {
  CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest,
  CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse,
  CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = {
  accept: "corrupti",
  destination: "provident",
  fromDate: "distinctio",
  origin: "quibusdam",
  productCode: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum.Ynb,
};

sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req).then((res: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->