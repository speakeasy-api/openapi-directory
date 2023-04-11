<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse,
  GetAddonEnum,
  GetFormatEnum,
  GetLangEnum,
  GetPackageEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  addon: [
    GetAddonEnum.Geotargeting,
    GetAddonEnum.CountryGroupings,
    GetAddonEnum.CountryGroupings,
  ],
  format: GetFormatEnum.Xml,
  ip: "8.8.8.8",
  key: "nulla",
  lang: GetLangEnum.Ja,
  package: GetPackageEnum.Ws22,
};

sdk.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->