<!-- Start SDK Example Usage -->
```typescript
import {
  shared.RemoveBgJson,
  PostRemovebgFormResponse
} from "openapi/dist/sdk/models/operations";
import {
  RemoveBgJsonChannelsEnum,
  RemoveBgJsonFormatEnum,
  RemoveBgJsonSizeEnum,
  RemoveBgJsonTypeEnum,
  RemoveBgJsonTypeLevelEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.RemoveBgJson = {
  addShadow: false,
  bgColor: "corrupti",
  bgImageUrl: "provident",
  channels: RemoveBgJsonChannelsEnum.Alpha,
  crop: false,
  cropMargin: "quibusdam",
  format: RemoveBgJsonFormatEnum.Jpg,
  imageFileB64: "nulla",
  imageUrl: "https://www.remove.bg/example-hd.jpg",
  position: "corrupti",
  roi: "illum",
  scale: "vel",
  semitransparency: false,
  size: RemoveBgJsonSizeEnum.Full,
  type: RemoveBgJsonTypeEnum.Product,
  typeLevel: RemoveBgJsonTypeLevelEnum.One,
};

sdk.backgroundRemoval.postRemovebgForm(req).then((res: PostRemovebgFormResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->