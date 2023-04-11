# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mermade.org.uk/openapi-converter/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mermade.org.uk/openapi-converter/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertRequestBody,
  ConvertResponse,
  ConvertRequestBodyValidateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConvertRequestBody = {
  filename: "corrupti",
  source: "provident",
  validate: ConvertRequestBodyValidateEnum.On,
};

sdk.conversion.convert(req).then((res: ConvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### conversion

* `convert` - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* `convertUrl` - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### metadata

* `getStatus` - Get the status of the API

### validation

* `getBadge` - Return a redirect to a badge svg file depending on a source definition's validity
* `validate` - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* `validateUrl` - Validate an OpenAPI 3.0.x definition
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

