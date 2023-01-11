<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AsyncClusteringProblemRequest, AsyncClusteringProblemResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AsyncClusteringProblemRequest = {
  request: {
    configuration: {
      clustering: {
        maxQuantity: 74.099998,
        minQuantity: 53.099998,
        numClusters: 15.100000,
      },
      responseType: "expedita",
      routing: {
        costPerMeter: 77.099998,
        costPerSecond: 28.100000,
        profile: "rerum",
      },
    },
    customers: [
      {
        address: {
          lat: 48.099998,
          lon: 26.200001,
          streetHint: "dolorem",
        },
        id: "et",
        quantity: 94.199997,
      },
      {
        address: {
          lat: 68.099998,
          lon: 80.199997,
          streetHint: "debitis",
        },
        id: "vel",
        quantity: 20.200001,
      },
      {
        address: {
          lat: 12.200000,
          lon: 88.199997,
          streetHint: "commodi",
        },
        id: "quis",
        quantity: 93.099998,
      },
    ],
  },
};

sdk.clusterAPI.asyncClusteringProblem(req).then((res: AsyncClusteringProblemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->