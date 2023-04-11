<!-- Start SDK Example Usage -->
```typescript
import {
  GetAddressesOutputFormatRequest,
  GetAddressesOutputFormatResponse,
  GetAddressesOutputFormatInterpolationEnum,
  GetAddressesOutputFormatLocationDescriptorEnum,
  GetAddressesOutputFormatOutputFormatEnum,
  GetAddressesOutputFormatOutputSrsEnum,
  GetAddressesOutputFormatStreetDirectionEnum,
  GetAddressesOutputFormatUnitDesignatorEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAddressesOutputFormatRequest = {
  addressString: "corrupti",
  autoComplete: false,
  bbox: "provident",
  brief: false,
  centre: "distinctio",
  civicNumber: "quibusdam",
  civicNumberSuffix: "unde",
  echo: false,
  extrapolate: false,
  interpolation: GetAddressesOutputFormatInterpolationEnum.None,
  localities: "corrupti",
  localityName: "illum",
  locationDescriptor: GetAddressesOutputFormatLocationDescriptorEnum.FrontDoorPoint,
  matchPrecision: "error",
  matchPrecisionNot: "deserunt",
  maxDistance: 3843.82,
  maxResults: 437587,
  minScore: 297534,
  notLocalities: "debitis",
  outputFormat: GetAddressesOutputFormatOutputFormatEnum.Json,
  outputSRS: GetAddressesOutputFormatOutputSrsEnum.TwentySixThousandNineHundredAndEleven,
  parcelPoint: "tempora",
  provinceCode: "suscipit",
  setBack: 477665,
  siteName: "minus",
  streetDirection: GetAddressesOutputFormatStreetDirectionEnum.Se,
  streetName: "voluptatum",
  streetQualifier: "iusto",
  streetType: "excepturi",
  unitDesignator: GetAddressesOutputFormatUnitDesignatorEnum.Pad,
  unitNumber: "recusandae",
  unitNumberSuffix: "temporibus",
};

sdk.intersections.getAddressesOutputFormat(req).then((res: GetAddressesOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->