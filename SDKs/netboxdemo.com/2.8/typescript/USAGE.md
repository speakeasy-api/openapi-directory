<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CircuitsCircuitTerminationsCreateRequest, CircuitsCircuitTerminationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CircuitsCircuitTerminationsCreateRequest = {
  request: {
    cable: {
      label: "sit",
    },
    circuit: 2259404117704393152,
    connectionStatus: true,
    description: "expedita",
    portSpeed: 3390393562759376202,
    ppInfo: "dolor",
    site: 1774932891286980153,
    termSide: "Z",
    upstreamSpeed: 8274930044578894929,
    xconnectId: "et",
  },
};

sdk.circuits.circuitsCircuitTerminationsCreate(req).then((res: CircuitsCircuitTerminationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->