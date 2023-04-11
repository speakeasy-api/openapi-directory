# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_oauth_v1/1.40.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_oauth_v1/1.40.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDeviceCodeCreateDeviceCodeRequest,
  CreateDeviceCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateDeviceCodeCreateDeviceCodeRequest = {
  audiences: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  clientSid: "unde",
  scopes: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
};

sdk.createDeviceCode(req).then((res: CreateDeviceCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDeviceCode` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `createToken` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `fetchCerts` - Fetches public JWKs
* `fetchOpenidDiscovery` - Fetch configuration details about the OpenID Connect Authorization Server
* `fetchUserInfo` - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

