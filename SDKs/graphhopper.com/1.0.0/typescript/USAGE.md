<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ClusterRequest,
  AsyncClusteringProblemResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ClusterRequest = {
  configuration: {
    clustering: {
      maxQuantity: 50,
      minQuantity: 30,
      numClusters: 10,
    },
    responseType: "json",
    routing: {
      costPerMeter: 5488.14,
      costPerSecond: 1,
      profile: "car",
    },
  },
  customers: [
    {
      address: {
        lat: 48.118434,
        lon: 11.53941,
        streetHint: "Lindenschmitstraße 52",
      },
      id: "GraphHopper GmbH",
      quantity: 10,
    },
    {
      address: {
        lat: 48.118434,
        lon: 11.53941,
        streetHint: "Lindenschmitstraße 52",
      },
      id: "GraphHopper GmbH",
      quantity: 10,
    },
    {
      address: {
        lat: 48.118434,
        lon: 11.53941,
        streetHint: "Lindenschmitstraße 52",
      },
      id: "GraphHopper GmbH",
      quantity: 10,
    },
  ],
};

sdk.clusterAPI.asyncClusteringProblem(req).then((res: AsyncClusteringProblemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->