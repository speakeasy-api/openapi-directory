<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TravelimpactmodelFlightsComputeFlightEmissionsRequest, TravelimpactmodelFlightsComputeFlightEmissionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TravelimpactmodelFlightsComputeFlightEmissionsRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    flights: [
      {
        departureDate: {
          day: 7837839688282259259,
          month: 2518412263346885298,
          year: 5617773211005988520,
        },
        destination: "et",
        flightNumber: 7144924247938981575,
        operatingCarrierCode: "dolorem",
        origin: "et",
      },
      {
        departureDate: {
          day: 7373105480197164748,
          month: 3287288577352441706,
          year: 3930927879439176946,
        },
        destination: "totam",
        flightNumber: 2217592893536642650,
        operatingCarrierCode: "illum",
        origin: "debitis",
      },
      {
        departureDate: {
          day: 3706853784096366226,
          month: 2627038740284806767,
          year: 6303220950515014660,
        },
        destination: "id",
        flightNumber: 959367522974354090,
        operatingCarrierCode: "accusantium",
        origin: "totam",
      },
    ],
  },
};

sdk.flights.travelimpactmodelFlightsComputeFlightEmissions(req).then((res: TravelimpactmodelFlightsComputeFlightEmissionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->