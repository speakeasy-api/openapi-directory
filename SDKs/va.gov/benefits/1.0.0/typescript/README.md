# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/benefits/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/benefits/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetBenefitsDocumentUploadDownloadRequest,
  GetBenefitsDocumentUploadDownloadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBenefitsDocumentUploadDownloadRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.vbaDocuments.getBenefitsDocumentUploadDownload(req).then((res: GetBenefitsDocumentUploadDownloadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### vbaDocuments

* `getBenefitsDocumentUploadDownload` - Download zip of "what the server sees"
* `getBenefitsDocumentUploadStatus` - Get status for a previous benefits document upload
* `getBenefitsDocumentUploadStatusReport` - Get a bulk status report for a list of previous uploads
* `postBenefitsDocumentUpload` - Get a location for subsequent document upload PUT request
* `postBenefitsDocumentUploadValidateDocument` - Validate an individual document against system file requirements
* `putBenefitsDocumentUpload` - Accepts document upload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

