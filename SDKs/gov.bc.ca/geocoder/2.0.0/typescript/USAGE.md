<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAddressesOutputFormatRequest, GetAddressesOutputFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAddressesOutputFormatRequest = {
  pathParams: {
    outputFormat: "csv",
  },
  queryParams: {
    addressString: "voluptas",
    autoComplete: true,
    bbox: "expedita",
    brief: true,
    centre: "dolor",
    civicNumber: "expedita",
    civicNumberSuffix: "voluptas",
    echo: true,
    extrapolate: false,
    interpolation: "adaptive",
    localities: "rerum",
    localityName: "dicta",
    locationDescriptor: "any",
    matchPrecision: "voluptatum",
    matchPrecisionNot: "et",
    maxDistance: 11.100000,
    maxResults: 7259475919510918339,
    minScore: 7373105480197164748,
    notLocalities: "iste",
    outputSRS: 3930927879439176946,
    parcelPoint: "totam",
    provinceCode: "dolores",
    setBack: 1929546706668609706,
    siteName: "debitis",
    streetDirection: "N",
    streetName: "odio",
    streetQualifier: "dolore",
    streetType: "id",
    unitDesignator: "TH",
    unitNumber: "accusantium",
    unitNumberSuffix: "totam",
  },
};

sdk.intersections.getAddressesOutputFormat(req).then((res: GetAddressesOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->