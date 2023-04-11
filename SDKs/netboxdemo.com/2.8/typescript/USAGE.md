<!-- Start SDK Example Usage -->
```typescript
import {
  shared.WritableCircuitTerminationInput,
  CircuitsCircuitTerminationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  WritableCircuitTerminationConnectionStatusEnum,
  WritableCircuitTerminationTerminationEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

const req: shared.WritableCircuitTerminationInput = {
  cable: {
    label: "corrupti",
  },
  circuit: 592845,
  connectionStatus: WritableCircuitTerminationConnectionStatusEnum.True,
  description: "quibusdam",
  portSpeed: 602763,
  ppInfo: "nulla",
  site: 544883,
  termSide: WritableCircuitTerminationTerminationEnum.Z,
  upstreamSpeed: 423655,
  xconnectId: "error",
};

sdk.circuits.circuitsCircuitTerminationsCreate(req).then((res: CircuitsCircuitTerminationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->