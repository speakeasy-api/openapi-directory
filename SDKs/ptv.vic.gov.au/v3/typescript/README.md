# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ptv.vic.gov.au/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ptv.vic.gov.au/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeparturesGetForStopRequest,
  DeparturesGetForStopResponse,
  DeparturesGetForStopExpandEnum,
  DeparturesGetForStopRouteTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeparturesGetForStopRequest = {
  dateUtc: "2021-10-25T05:21:43.948Z",
  devid: "distinctio",
  directionId: 844266,
  expand: [
    DeparturesGetForStopExpandEnum.VehiclePosition,
    DeparturesGetForStopExpandEnum.Direction,
    DeparturesGetForStopExpandEnum.VehiclePosition,
  ],
  gtfs: false,
  includeCancelled: false,
  includeGeopath: false,
  lookBackwards: false,
  maxResults: 423655,
  platformNumbers: [
    645894,
    384382,
    437587,
  ],
  routeType: DeparturesGetForStopRouteTypeEnum.One,
  signature: "debitis",
  stopId: 56713,
  token: "delectus",
};

sdk.departures.departuresGetForStop(req).then((res: DeparturesGetForStopResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### departures

* `departuresGetForStop` - View departures for all routes from a stop
* `departuresGetForStopAndRoute` - View departures for a specific route from a stop

### directions

* `directionsForDirection` - View all routes for a direction of travel
* `directionsForDirectionAndType` - View all routes of a particular type for a direction of travel
* `directionsForRoute` - View directions that a route travels in

### disruptions

* `disruptionsGetAllDisruptions` - View all disruptions for all route types
* `disruptionsGetDisruptionById` - View a specific disruption
* `disruptionsGetDisruptionModes` - Get all disruption modes
* `disruptionsGetDisruptionsByRoute` - View all disruptions for a particular route
* `disruptionsGetDisruptionsByRouteAndStop` - View all disruptions for a particular route and stop
* `disruptionsGetDisruptionsByStop` - View all disruptions for a particular stop

### fareEstimate

* `fareEstimateGetFareEstimateByZone` - Estimate a fare by zone

### outlets

* `outletsGetAllOutlets` - List all ticket outlets
* `outletsGetOutletsByGeolocation` - List ticket outlets near a specific location

### patterns

* `patternsGetPatternByRun` - View the stopping pattern for a specific trip/service run

### routeTypes

* `routeTypesGetRouteTypes` - View all route types and their names

### routes

* `routesOneOrMoreRoutes` - View route names and numbers for all routes
* `routesRouteFromId` - View route name and number for specific route ID

### runs

* `runsForRoute` - View all trip/service runs for a specific route ID
* `runsForRouteAndRouteType` - View all trip/service runs for a specific route ID and route type
* `runsForRun` - View all trip/service runs for a specific run_ref
* `runsForRunAndRouteType` - View the trip/service run for a specific run_ref and route type

### search

* `searchSearch` - View stops, routes and myki ticket outlets that match the search term

### stops

* `stopsStopDetails` - View facilities at a specific stop (Metro and V/Line stations only)
* `stopsStopsByGeolocation` - View all stops near a specific location
* `stopsStopsForRoute` - View all stops on a specific route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

