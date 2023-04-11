# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/appsactivity/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/appsactivity/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AppsactivityActivitiesListRequest,
  AppsactivityActivitiesListResponse,
  AppsactivityActivitiesListGroupingStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppsactivityActivitiesListRequest = {
  alt: AltEnum.Json,
  driveAncestorId: "corrupti",
  driveFileId: "provident",
  fields: "distinctio",
  groupingStrategy: AppsactivityActivitiesListGroupingStrategyEnum.None,
  key: "unde",
  oauthToken: "nulla",
  pageSize: 544883,
  pageToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  source: "error",
  userId: "deserunt",
  userIp: "suscipit",
};

sdk.activities.appsactivityActivitiesList(req).then((res: AppsactivityActivitiesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `appsactivityActivitiesList` - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

