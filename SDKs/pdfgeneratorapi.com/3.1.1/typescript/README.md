# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/pdfgeneratorapi.com/3.1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/pdfgeneratorapi.com/3.1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MergeTemplateRequest,
  MergeTemplateResponse
} from "openapi/dist/sdk/models/operations";
import {
  OutputEnum,
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jsonWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: MergeTemplateRequest = {
  data: {
    id: 12312,
    name: "Sample Data",
  },
  format: FormatEnum.Pdf,
  name: "My document",
  output: OutputEnum.Base64,
  templateId: 19375,
};

sdk.documents.mergeTemplate(req).then((res: MergeTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documents

* `mergeTemplate` - Generate document
* `mergeTemplates` - Generate document (multiple templates)

### templates

* `copyTemplate` - Copy template
* `createTemplate` - Create template
* `deleteTemplate` - Delete template
* `getEditorUrl` - Open editor
* `getTemplate` - Get template
* `getTemplates` - Get templates
* `updateTemplate` - Update template

### workspaces

* `deleteWorkspace` - Delete workspace
* `getWorkspace` - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

