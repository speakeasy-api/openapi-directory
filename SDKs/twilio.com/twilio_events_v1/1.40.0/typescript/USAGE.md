<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSinkCreateSinkRequest,
  CreateSinkResponse
} from "openapi/dist/sdk/models/operations";
import {
  SinkEnumSinkTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateSinkCreateSinkRequest = {
  description: "corrupti",
  sinkConfiguration: "provident",
  sinkType: SinkEnumSinkTypeEnum.Segment,
};

sdk.createSink(req).then((res: CreateSinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->