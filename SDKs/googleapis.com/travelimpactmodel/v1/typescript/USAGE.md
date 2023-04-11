<!-- Start SDK Example Usage -->
```typescript
import {
  TravelimpactmodelFlightsComputeFlightEmissionsRequest,
  TravelimpactmodelFlightsComputeFlightEmissionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TravelimpactmodelFlightsComputeFlightEmissionsRequest = {
  dollarXgafv: XgafvEnum.Two,
  computeFlightEmissionsRequest: {
    flights: [
      {
        departureDate: {
          day: 715190,
          month: 844266,
          year: 602763,
        },
        destination: "nulla",
        flightNumber: 544883,
        operatingCarrierCode: "illum",
        origin: "vel",
      },
      {
        departureDate: {
          day: 623564,
          month: 645894,
          year: 384382,
        },
        destination: "iure",
        flightNumber: 297534,
        operatingCarrierCode: "debitis",
        origin: "ipsa",
      },
      {
        departureDate: {
          day: 963663,
          month: 272656,
          year: 383441,
        },
        destination: "molestiae",
        flightNumber: 791725,
        operatingCarrierCode: "placeat",
        origin: "voluptatum",
      },
    ],
  },
  accessToken: "iusto",
  alt: AltEnum.Media,
  callback: "nisi",
  fields: "recusandae",
  key: "temporibus",
  oauthToken: "ab",
  prettyPrint: false,
  quotaUser: "quis",
  uploadType: "veritatis",
  uploadProtocol: "deserunt",
};

sdk.flights.travelimpactmodelFlightsComputeFlightEmissions(req).then((res: TravelimpactmodelFlightsComputeFlightEmissionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->