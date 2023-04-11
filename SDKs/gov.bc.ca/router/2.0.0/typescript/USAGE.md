<!-- Start SDK Example Usage -->
```typescript
import {
  GetDirectionsOutputFormatRequest,
  GetDirectionsOutputFormatResponse,
  GetDirectionsOutputFormatCriteriaEnum,
  GetDirectionsOutputFormatDistanceUnitEnum,
  GetDirectionsOutputFormatOutputFormatEnum,
  GetDirectionsOutputFormatOutputSrsEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectionsOutputFormatRequest = {
  correctSide: false,
  criteria: GetDirectionsOutputFormatCriteriaEnum.Fastest,
  departure: "2021-07-27T21:52:56.087Z",
  disable: "quibusdam",
  distanceUnit: GetDirectionsOutputFormatDistanceUnitEnum.Mi,
  outputFormat: GetDirectionsOutputFormatOutputFormatEnum.Html,
  outputSRS: GetDirectionsOutputFormatOutputSrsEnum.TwentySixThousandNineHundredAndEight,
  points: "illum",
  roundTrip: false,
  routeDescription: "vel",
};

sdk.directions.getDirectionsOutputFormat(req).then((res: GetDirectionsOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->