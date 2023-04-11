# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/admin/reports_v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/admin/reports_v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ReportsActivitiesListRequest,
  ReportsActivitiesListResponse,
  ReportsActivitiesListApplicationNameEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ReportsActivitiesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  actorIpAddress: "distinctio",
  alt: AltEnum.Proto,
  applicationName: ReportsActivitiesListApplicationNameEnum.Mobile,
  callback: "nulla",
  customerId: "corrupti",
  endTime: "illum",
  eventName: "vel",
  fields: "error",
  filters: "deserunt",
  groupIdFilter: "suscipit",
  key: "iure",
  maxResults: 297534,
  oauthToken: "debitis",
  orgUnitID: "ipsa",
  pageToken: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  startTime: "suscipit",
  uploadType: "molestiae",
  uploadProtocol: "minus",
  userKey: "placeat",
};

sdk.activities.reportsActivitiesList(req).then((res: ReportsActivitiesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `reportsActivitiesList` - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* `reportsActivitiesWatch` - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### channels

* `adminChannelsStop` - Stop watching resources through this channel.

### customerUsageReports

* `reportsCustomerUsageReportsGet` - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### entityUsageReports

* `reportsEntityUsageReportsGet` - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### userUsageReport

* `reportsUserUsageReportGet` - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

