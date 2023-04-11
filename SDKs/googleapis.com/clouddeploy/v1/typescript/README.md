# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/clouddeploy/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/clouddeploy/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest,
  ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  deliveryPipelineInput: {
    annotations: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    condition: {
      pipelineReadyCondition: {
        status: false,
        updateTime: "vel",
      },
      targetsPresentCondition: {
        missingTargets: [
          "deserunt",
          "suscipit",
          "iure",
        ],
        status: false,
        updateTime: "magnam",
      },
      targetsTypeCondition: {
        errorDetails: "debitis",
        status: false,
      },
    },
    description: "ipsa",
    etag: "delectus",
    labels: {
      "suscipit": "molestiae",
      "minus": "placeat",
    },
    name: "voluptatum",
    serialPipeline: {
      stages: [
        {
          profiles: [
            "nisi",
            "recusandae",
            "temporibus",
          ],
          strategy: {
            canary: {
              canaryDeployment: {
                percentages: [
                  337396,
                ],
                verify: false,
              },
              customCanaryDeployment: {
                phaseConfigs: [
                  {
                    percentage: 648172,
                    phaseId: "perferendis",
                    profiles: [
                      "repellendus",
                      "sapiente",
                    ],
                    verify: false,
                  },
                ],
              },
              runtimeConfig: {
                cloudRun: {
                  automaticTrafficControl: false,
                },
                kubernetes: {
                  gatewayServiceMesh: {
                    deployment: "quo",
                    httpRoute: "odit",
                    service: "at",
                  },
                  serviceNetworking: {
                    deployment: "at",
                    service: "maiores",
                  },
                },
              },
            },
            standard: {
              verify: false,
            },
          },
          targetId: "molestiae",
        },
        {
          profiles: [
            "quod",
            "esse",
            "totam",
            "porro",
          ],
          strategy: {
            canary: {
              canaryDeployment: {
                percentages: [
                  118274,
                  720633,
                  639921,
                ],
                verify: false,
              },
              customCanaryDeployment: {
                phaseConfigs: [
                  {
                    percentage: 143353,
                    phaseId: "deleniti",
                    profiles: [
                      "optio",
                      "totam",
                      "beatae",
                      "commodi",
                    ],
                    verify: false,
                  },
                  {
                    percentage: 473600,
                    phaseId: "modi",
                    profiles: [
                      "impedit",
                    ],
                    verify: false,
                  },
                  {
                    percentage: 736918,
                    phaseId: "esse",
                    profiles: [
                      "excepturi",
                    ],
                    verify: false,
                  },
                ],
              },
              runtimeConfig: {
                cloudRun: {
                  automaticTrafficControl: false,
                },
                kubernetes: {
                  gatewayServiceMesh: {
                    deployment: "aspernatur",
                    httpRoute: "perferendis",
                    service: "ad",
                  },
                  serviceNetworking: {
                    deployment: "natus",
                    service: "sed",
                  },
                },
              },
            },
            standard: {
              verify: false,
            },
          },
          targetId: "iste",
        },
      ],
    },
    suspended: false,
  },
  accessToken: "dolor",
  alt: AltEnum.Media,
  callback: "laboriosam",
  deliveryPipelineId: "hic",
  fields: "saepe",
  key: "fuga",
  oauthToken: "in",
  parent: "corporis",
  prettyPrint: false,
  quotaUser: "iste",
  requestId: "iure",
  uploadType: "saepe",
  uploadProtocol: "quidem",
  validateOnly: false,
};

sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req).then((res: ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `clouddeployProjectsLocationsDeliveryPipelinesCreate` - Creates a new DeliveryPipeline in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesList` - Lists DeliveryPipelines in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon` - Abandons a Release in the Delivery Pipeline.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate` - Creates a new Release in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesList` - Lists Releases in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance` - Advances a Rollout in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove` - Approves a Rollout.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate` - Creates a new Rollout in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob` - Ignores the specified Job in a Rollout.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList` - Lists JobRuns in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate` - Terminates a Job Run in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList` - Lists Rollouts in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob` - Retries the specified Job in a Rollout.
* `clouddeployProjectsLocationsList` - Lists information about the supported locations for this service.
* `clouddeployProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `clouddeployProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `clouddeployProjectsLocationsTargetsCreate` - Creates a new Target in a given project and location.
* `clouddeployProjectsLocationsTargetsDelete` - Deletes a single Target.
* `clouddeployProjectsLocationsTargetsGet` - Gets details of a single Target.
* `clouddeployProjectsLocationsTargetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `clouddeployProjectsLocationsTargetsList` - Lists Targets in a given project and location.
* `clouddeployProjectsLocationsTargetsPatch` - Updates the parameters of a single Target.
* `clouddeployProjectsLocationsTargetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `clouddeployProjectsLocationsTargetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

