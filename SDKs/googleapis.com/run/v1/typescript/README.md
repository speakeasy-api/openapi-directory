# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RunNamespacesAuthorizeddomainsListRequest,
  RunNamespacesAuthorizeddomainsListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RunNamespacesAuthorizeddomainsListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.namespaces.runNamespacesAuthorizeddomainsList(req).then((res: RunNamespacesAuthorizeddomainsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### namespaces

* `runNamespacesAuthorizeddomainsList` - List authorized domains.
* `runNamespacesConfigurationsList` - List configurations.
* `runNamespacesDomainmappingsCreate` - Create a new domain mapping.
* `runNamespacesDomainmappingsDelete` - Delete a domain mapping.
* `runNamespacesDomainmappingsGet` - Get information about a domain mapping.
* `runNamespacesDomainmappingsList` - List all domain mappings.
* `runNamespacesExecutionsCancel` - Cancel an execution.
* `runNamespacesExecutionsList` - List executions.
* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsList` - List jobs.
* `runNamespacesJobsReplaceJob` - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesJobsRun` - Trigger creation of a new execution of this job.
* `runNamespacesRevisionsList` - List revisions.
* `runNamespacesRoutesList` - List routes.
* `runNamespacesServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runNamespacesServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runNamespacesServicesGet` - Gets information about a service.
* `runNamespacesServicesList` - Lists services for the given project and region.
* `runNamespacesServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesTasksGet` - Get information about a task.
* `runNamespacesTasksList` - List tasks.

### projects

* `runProjectsLocationsAuthorizeddomainsList` - List authorized domains.
* `runProjectsLocationsConfigurationsList` - List configurations.
* `runProjectsLocationsDomainmappingsCreate` - Create a new domain mapping.
* `runProjectsLocationsDomainmappingsList` - List all domain mappings.
* `runProjectsLocationsList` - Lists information about the supported locations for this service.
* `runProjectsLocationsRevisionsList` - List revisions.
* `runProjectsLocationsRoutesList` - List routes.
* `runProjectsLocationsServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runProjectsLocationsServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runProjectsLocationsServicesGet` - Gets information about a service.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists services for the given project and region.
* `runProjectsLocationsServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

