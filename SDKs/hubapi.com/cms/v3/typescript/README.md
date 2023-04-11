# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/cms/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hubapi.com/cms/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetCmsV3DomainsGetPageRequest,
  GetCmsV3DomainsGetPageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCmsV3DomainsGetPageRequest = {
  after: "corrupti",
  archived: false,
  createdAfter: "2021-07-27T21:52:56.087Z",
  createdAt: "2021-03-11T23:22:42.658Z",
  createdBefore: "2021-05-14T08:28:11.899Z",
  limit: 847252,
  sort: [
    "error",
    "deserunt",
  ],
  updatedAfter: "2022-07-25T06:44:09.184Z",
  updatedAt: "2022-02-09T12:04:06.508Z",
  updatedBefore: "2022-01-14T06:18:51.036Z",
};

sdk.domains.getCmsV3DomainsGetPage(req).then((res: GetCmsV3DomainsGetPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domains

* `getCmsV3DomainsGetPage` - Get current domains
* `getCmsV3DomainsDomainIdGetById` - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

