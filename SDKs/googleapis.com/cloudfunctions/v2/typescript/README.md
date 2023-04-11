# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudfunctions/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudfunctions/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudfunctionsProjectsLocationsFunctionsCreateRequest,
  CloudfunctionsProjectsLocationsFunctionsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  FunctionEnvironmentEnum,
  ServiceConfigIngressSettingsEnum,
  ServiceConfigSecurityLevelEnum,
  ServiceConfigVpcConnectorEgressSettingsEnum,
  EventTriggerRetryPolicyEnum,
  BuildConfigDockerRegistryEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudfunctionsProjectsLocationsFunctionsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  functionInput: {
    buildConfig: {
      buildpackStack: "provident",
      dockerRegistry: BuildConfigDockerRegistryEnum.ArtifactRegistry,
      dockerRepository: "quibusdam",
      entryPoint: "unde",
      environmentVariables: {
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
        "iure": "magnam",
      },
      runtime: "debitis",
      source: {
        repoSource: {
          branchName: "ipsa",
          commitSha: "delectus",
          dir: "tempora",
          invertRegex: false,
          projectId: "suscipit",
          repoName: "molestiae",
          tagName: "minus",
        },
        storageSource: {
          bucket: "placeat",
          generation: "voluptatum",
          object: "iusto",
        },
      },
      sourceProvenance: {
        resolvedRepoSource: {
          branchName: "excepturi",
          commitSha: "nisi",
          dir: "recusandae",
          invertRegex: false,
          projectId: "temporibus",
          repoName: "ab",
          tagName: "quis",
        },
        resolvedStorageSource: {
          bucket: "veritatis",
          generation: "deserunt",
          object: "perferendis",
        },
      },
      workerPool: "ipsam",
    },
    description: "repellendus",
    environment: FunctionEnvironmentEnum.Gen2,
    eventTrigger: {
      channel: "quo",
      eventFilters: [
        {
          attribute: "at",
          operator: "at",
          value: "maiores",
        },
      ],
      eventType: "molestiae",
      pubsubTopic: "quod",
      retryPolicy: EventTriggerRetryPolicyEnum.RetryPolicyRetry,
      serviceAccountEmail: "esse",
      triggerRegion: "totam",
    },
    kmsKeyName: "porro",
    labels: {
      "dicta": "nam",
      "officia": "occaecati",
      "fugit": "deleniti",
    },
    name: "hic",
    serviceConfig: {
      allTrafficOnLatestRevision: false,
      availableCpu: "optio",
      availableMemory: "totam",
      environmentVariables: {
        "commodi": "molestiae",
      },
      ingressSettings: ServiceConfigIngressSettingsEnum.AllowAll,
      maxInstanceCount: 186332,
      maxInstanceRequestConcurrency: 774234,
      minInstanceCount: 736918,
      secretEnvironmentVariables: [
        {
          key: "ipsum",
          projectId: "excepturi",
          secret: "aspernatur",
          version: "perferendis",
        },
        {
          key: "ad",
          projectId: "natus",
          secret: "sed",
          version: "iste",
        },
      ],
      secretVolumes: [
        {
          mountPath: "natus",
          projectId: "laboriosam",
          secret: "hic",
          versions: [
            {
              path: "fuga",
              version: "in",
            },
            {
              path: "corporis",
              version: "iste",
            },
            {
              path: "iure",
              version: "saepe",
            },
            {
              path: "quidem",
              version: "architecto",
            },
          ],
        },
      ],
      securityLevel: ServiceConfigSecurityLevelEnum.SecurityLevelUnspecified,
      serviceAccountEmail: "reiciendis",
      timeoutSeconds: 666767,
      vpcConnector: "mollitia",
      vpcConnectorEgressSettings: ServiceConfigVpcConnectorEgressSettingsEnum.AllTraffic,
    },
  },
  accessToken: "dolores",
  alt: AltEnum.Json,
  callback: "corporis",
  fields: "explicabo",
  functionId: "nobis",
  key: "enim",
  oauthToken: "omnis",
  parent: "nemo",
  prettyPrint: false,
  quotaUser: "minima",
  uploadType: "excepturi",
  uploadProtocol: "accusantium",
};

sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req).then((res: CloudfunctionsProjectsLocationsFunctionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudfunctionsProjectsLocationsFunctionsCreate` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctionsProjectsLocationsFunctionsDelete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctionsProjectsLocationsFunctionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudfunctionsProjectsLocationsFunctionsList` - Returns a list of functions that belong to the requested project.
* `cloudfunctionsProjectsLocationsFunctionsPatch` - Updates existing function.
* `cloudfunctionsProjectsLocationsFunctionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudfunctionsProjectsLocationsFunctionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudfunctionsProjectsLocationsList` - Lists information about the supported locations for this service.
* `cloudfunctionsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `cloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

