# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/artifactregistry/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/artifactregistry/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ArtifactregistryProjectsLocationsListRequest,
  ArtifactregistryProjectsLocationsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ArtifactregistryProjectsLocationsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  name: "illum",
  oauthToken: "vel",
  pageSize: 623564,
  pageToken: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.projects.artifactregistryProjectsLocationsList(req).then((res: ArtifactregistryProjectsLocationsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `artifactregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `artifactregistryProjectsLocationsRepositoriesCreate` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `artifactregistryProjectsLocationsRepositoriesFilesList` - Lists files.
* `artifactregistryProjectsLocationsRepositoriesGetIamPolicy` - Gets the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesList` - Lists repositories.
* `artifactregistryProjectsLocationsRepositoriesPackagesList` - Lists packages.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate` - Creates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsList` - Lists tags.
* `artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch` - Updates a tag.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet` - Gets a version
* `artifactregistryProjectsLocationsRepositoriesPackagesVersionsList` - Lists versions.
* `artifactregistryProjectsLocationsRepositoriesSetIamPolicy` - Updates the IAM policy for a given resource.
* `artifactregistryProjectsLocationsRepositoriesTestIamPermissions` - Tests if the caller has a list of permissions on a resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

