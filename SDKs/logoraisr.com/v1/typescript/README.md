# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/logoraisr.com/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/logoraisr.com/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PreviewsReadRequest,
  PreviewsReadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    token: "YOUR_API_KEY_HERE",
  },
});

const req: PreviewsReadRequest = {
  fileId: "corrupti",
};

sdk.previews.previewsRead(req).then((res: PreviewsReadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### previews

* `previewsRead` - Get preview image of uploaded file

### processes

* `processesList` - Get process list.

### projects

* `projectsCreate` - Create a new project.
* `projectsList` - Get user project list.
* `projectsRead` - Get project details.

### reports

* `reportsCreate` - Create a new report.
* `reportsList` - Get user report list.
* `reportsRead` - Get report details.

### results

* `resultsRead` - Get the result from image processing

### uploads

* `uploadsCreate` - Upload a new image
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

