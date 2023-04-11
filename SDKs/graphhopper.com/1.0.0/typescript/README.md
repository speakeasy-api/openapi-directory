# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/graphhopper.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/graphhopper.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### clusterAPI

* `asyncClusteringProblem` - Batch Cluster Endpoint
* `getClusterSolution` - GET Batch Solution Endpoint
* `solveClusteringProblem` - POST Cluster Endpoint

### geocodingAPI

* `getGeocode` - Geocoding Endpoint

### isochroneAPI

* `getIsochrone` - Isochrone Endpoint

### mapMatchingAPI

* `postGPX` - Map-match a GPX file

### matrixAPI

* `calculateMatrix` - Batch Matrix Endpoint
* `getMatrix` - GET Matrix Endpoint
* `getMatrixSolution` - GET Batch Matrix Endpoint
* `postMatrix` - POST Matrix Endpoint

### routeOptimizationAPI

* `asyncVRP` - POST route optimization problem (batch mode)
* `getSolution` - GET the solution (batch mode)
* `solveVRP` - POST route optimization problem

### routingAPI

* `getRoute` - GET Route Endpoint
* `getRouteInfo` - Coverage information
* `postRoute` - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

