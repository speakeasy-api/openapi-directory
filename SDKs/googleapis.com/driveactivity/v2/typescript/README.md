# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/driveactivity/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/driveactivity/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DriveactivityActivityQueryRequest,
  DriveactivityActivityQueryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DriveactivityActivityQueryRequest = {
  dollarXgafv: XgafvEnum.Two,
  queryDriveActivityRequest: {
    ancestorName: "provident",
    consolidationStrategy: {
      legacy: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      none: {
        "deserunt": "suscipit",
        "iure": "magnam",
        "debitis": "ipsa",
      },
    },
    filter: "delectus",
    itemName: "tempora",
    pageSize: 383441,
    pageToken: "molestiae",
  },
  accessToken: "minus",
  alt: AltEnum.Proto,
  callback: "voluptatum",
  fields: "iusto",
  key: "excepturi",
  oauthToken: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  uploadType: "temporibus",
  uploadProtocol: "ab",
};

sdk.activity.driveactivityActivityQuery(req).then((res: DriveactivityActivityQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activity

* `driveactivityActivityQuery` - Query past activity in Google Drive.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

