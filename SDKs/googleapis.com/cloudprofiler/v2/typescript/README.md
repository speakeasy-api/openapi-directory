# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudprofiler/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudprofiler/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudprofilerProjectsProfilesCreateRequest,
  CloudprofilerProjectsProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  CreateProfileRequestProfileTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudprofilerProjectsProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  createProfileRequest: {
    deployment: {
      labels: {
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
      },
      projectId: "vel",
      target: "error",
    },
    profileType: [
      CreateProfileRequestProfileTypeEnum.Heap,
      CreateProfileRequestProfileTypeEnum.Heap,
      CreateProfileRequestProfileTypeEnum.Wall,
    ],
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  fields: "tempora",
  key: "suscipit",
  oauthToken: "molestiae",
  parent: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.projects.cloudprofilerProjectsProfilesCreate(req).then((res: CloudprofilerProjectsProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudprofilerProjectsProfilesCreate` - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* `cloudprofilerProjectsProfilesCreateOffline` - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* `cloudprofilerProjectsProfilesPatch` - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

