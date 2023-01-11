<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = {
  security: {
    auth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    destination: "sit",
    fromDate: "voluptas",
    origin: "culpa",
    productCode: "FUN",
  },
  headers: {
    accept: "consequuntur",
  },
};

sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req).then((res: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->