# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v3beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v3beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  TranslateProjectsLocationsBatchTranslateDocumentRequest,
  TranslateProjectsLocationsBatchTranslateDocumentResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: TranslateProjectsLocationsBatchTranslateDocumentRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchTranslateDocumentRequest: {
    customizedAttribution: "provident",
    enableShadowRemovalNativePdf: false,
    formatConversions: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
    glossaries: {
      "deserunt": {
        glossary: "suscipit",
        ignoreCase: false,
      },
      "iure": {
        glossary: "magnam",
        ignoreCase: false,
      },
      "debitis": {
        glossary: "ipsa",
        ignoreCase: false,
      },
    },
    inputConfigs: [
      {
        gcsSource: {
          inputUri: "tempora",
        },
      },
      {
        gcsSource: {
          inputUri: "suscipit",
        },
      },
      {
        gcsSource: {
          inputUri: "molestiae",
        },
      },
      {
        gcsSource: {
          inputUri: "minus",
        },
      },
    ],
    models: {
      "voluptatum": "iusto",
      "excepturi": "nisi",
      "recusandae": "temporibus",
      "ab": "quis",
    },
    outputConfig: {
      gcsDestination: {
        outputUriPrefix: "veritatis",
      },
    },
    sourceLanguageCode: "deserunt",
    targetLanguageCodes: [
      "ipsam",
    ],
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

sdk.projects.translateProjectsLocationsBatchTranslateDocument(req).then((res: TranslateProjectsLocationsBatchTranslateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `translateProjectsLocationsBatchTranslateDocument` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsBatchTranslateText` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsDetectLanguage` - Detects the language of text within a request.
* `translateProjectsLocationsGetSupportedLanguages` - Returns a list of supported languages for translation.
* `translateProjectsLocationsGlossariesCreate` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsGlossariesList` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsList` - Lists information about the supported locations for this service.
* `translateProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `translateProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `translateProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `translateProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `translateProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `translateProjectsLocationsTranslateDocument` - Translates documents in synchronous mode.
* `translateProjectsLocationsTranslateText` - Translates input text and returns translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

