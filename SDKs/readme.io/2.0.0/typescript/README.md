# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/readme.io/2.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/readme.io/2.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAPISpecificationRequest,
  DeleteAPISpecificationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAPISpecificationRequest = {
  id: "corrupti",
};

sdk.apiSpecification.deleteAPISpecification(req).then((res: DeleteAPISpecificationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apiSpecification

* `deleteAPISpecification` - Delete an API specification in ReadMe
* `getAPISpecification` - Get API specification metadata
* `updateAPISpecification` - Update an API specification in ReadMe
* `uploadAPISpecification` - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### categories

* `getCategory` - Get category
* `getCategoryDocs` - Get docs for category

### changelog

* `createChangelog` - Create changelog
* `deleteChangelog` - Delete changelog
* `getChangelog` - Get changelog
* `getChangelogs` - Get changelogs
* `updateChangelog` - Update changelog

### customPages

* `createCustomPage` - Create custom page
* `deleteCustomPage` - Delete custom page
* `getCustomPage` - Get custom page
* `getCustomPages` - Get custom pages
* `updateCustomPage` - Update custom page

### docs

* `createDoc` - Create doc
* `deleteDoc` - Delete doc
* `getDoc` - Get doc
* `searchDocs` - Search docs
* `updateDoc` - Update doc

### errors

* `getErrors` - Get errors

### projects

* `getProject` - Get metadata about the current project

### swagger

* `deleteSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
* `updateSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
* `uploadSwagger` - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

### version

* `createVersion` - Create version
* `deleteVersion` - Delete version
* `getVersion` - Get version
* `getVersions` - Get versions
* `updateVersion` - Update version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

