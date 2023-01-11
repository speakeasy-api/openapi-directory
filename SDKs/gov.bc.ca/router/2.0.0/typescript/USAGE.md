<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDirectionsOutputFormatRequest, GetDirectionsOutputFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetDirectionsOutputFormatRequest = {
  pathParams: {
    outputFormat: "json",
  },
  queryParams: {
    correctSide: false,
    criteria: "fastest",
    departure: "2019-04-21T07:38:14Z",
    disable: "consequuntur",
    distanceUnit: "km",
    outputSRS: 1774932891286980153,
    points: "voluptas",
    roundTrip: true,
    routeDescription: "et",
  },
};

sdk.directions.getDirectionsOutputFormat(req).then((res: GetDirectionsOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->