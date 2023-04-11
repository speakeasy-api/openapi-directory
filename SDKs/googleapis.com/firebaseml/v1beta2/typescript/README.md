# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebaseml/v1beta2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebaseml/v1beta2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasemlProjectsModelsCreateRequest,
  FirebasemlProjectsModelsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasemlProjectsModelsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  modelInput: {
    displayName: "provident",
    name: "distinctio",
    state: {
      published: false,
      validationError: {
        code: 844266,
        details: [
          {
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
          },
          {
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
          },
          {
            "excepturi": "nisi",
            "recusandae": "temporibus",
          },
        ],
        message: "ab",
      },
    },
    tags: [
      "veritatis",
      "deserunt",
    ],
    tfliteModel: {
      automlModel: "perferendis",
      gcsTfliteUri: "ipsam",
    },
  },
  accessToken: "repellendus",
  alt: AltEnum.Proto,
  callback: "quo",
  fields: "odit",
  key: "at",
  oauthToken: "at",
  parent: "maiores",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "quod",
  uploadProtocol: "quod",
};

sdk.projects.firebasemlProjectsModelsCreate(req).then((res: FirebasemlProjectsModelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firebasemlProjectsModelsCreate` - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* `firebasemlProjectsModelsDelete` - Deletes a model
* `firebasemlProjectsModelsDownload` - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* `firebasemlProjectsModelsList` - Lists the models
* `firebasemlProjectsModelsPatch` - Updates a model. The longrunning operation will eventually return a Model.
* `firebasemlProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

