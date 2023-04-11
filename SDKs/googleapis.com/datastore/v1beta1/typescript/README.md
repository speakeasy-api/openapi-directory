# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatastoreProjectsExportRequest,
  DatastoreProjectsExportResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastoreProjectsExportRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleDatastoreAdminV1beta1ExportEntitiesRequest: {
    entityFilter: {
      kinds: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      namespaceIds: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
    },
    labels: {
      "suscipit": "iure",
      "magnam": "debitis",
      "ipsa": "delectus",
    },
    outputUrlPrefix: "tempora",
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "minus",
  fields: "placeat",
  key: "voluptatum",
  oauthToken: "iusto",
  prettyPrint: false,
  projectId: "excepturi",
  quotaUser: "nisi",
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.projects.datastoreProjectsExport(req).then((res: DatastoreProjectsExportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `datastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

