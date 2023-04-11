<!-- Start SDK Example Usage -->
```typescript
import {
  MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest,
  MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  monitoredResourceContainer: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.locations.monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req).then((res: MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->