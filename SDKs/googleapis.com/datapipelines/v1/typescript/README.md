# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datapipelines/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datapipelines/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatapipelinesProjectsLocationsPipelinesCreateRequest,
  DatapipelinesProjectsLocationsPipelinesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudDatapipelinesV1PipelineStateEnum,
  GoogleCloudDatapipelinesV1PipelineTypeEnum,
  GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum,
  GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum,
  GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatapipelinesProjectsLocationsPipelinesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDatapipelinesV1PipelineInput: {
    displayName: "provident",
    name: "distinctio",
    pipelineSources: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    scheduleInfo: {
      schedule: "iure",
      timeZone: "magnam",
    },
    schedulerServiceAccountEmail: "debitis",
    state: GoogleCloudDatapipelinesV1PipelineStateEnum.StateUnspecified,
    type: GoogleCloudDatapipelinesV1PipelineTypeEnum.PipelineTypeStreaming,
    workload: {
      dataflowFlexTemplateRequest: {
        launchParameter: {
          containerSpecGcsPath: "tempora",
          environment: {
            additionalExperiments: [
              "molestiae",
              "minus",
            ],
            additionalUserLabels: {
              "voluptatum": "iusto",
              "excepturi": "nisi",
              "recusandae": "temporibus",
              "ab": "quis",
            },
            enableStreamingEngine: false,
            flexrsGoal: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FlexrsUnspecified,
            ipConfiguration: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WorkerIpPublic,
            kmsKeyName: "perferendis",
            machineType: "ipsam",
            maxWorkers: 832620,
            network: "sapiente",
            numWorkers: 778157,
            serviceAccountEmail: "odit",
            subnetwork: "at",
            tempLocation: "at",
            workerRegion: "maiores",
            workerZone: "molestiae",
            zone: "quod",
          },
          jobName: "quod",
          launchOptions: {
            "totam": "porro",
            "dolorum": "dicta",
          },
          parameters: {
            "officia": "occaecati",
            "fugit": "deleniti",
            "hic": "optio",
          },
          transformNameMappings: {
            "beatae": "commodi",
            "molestiae": "modi",
            "qui": "impedit",
          },
          update: false,
        },
        location: "cum",
        projectId: "esse",
        validateOnly: false,
      },
      dataflowLaunchTemplateRequest: {
        gcsPath: "ipsum",
        launchParameters: {
          environment: {
            additionalExperiments: [
              "aspernatur",
              "perferendis",
              "ad",
            ],
            additionalUserLabels: {
              "sed": "iste",
              "dolor": "natus",
              "laboriosam": "hic",
            },
            bypassTempDirValidation: false,
            enableStreamingEngine: false,
            ipConfiguration: GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum.WorkerIpPrivate,
            kmsKeyName: "fuga",
            machineType: "in",
            maxWorkers: 359508,
            network: "iste",
            numWorkers: 437032,
            serviceAccountEmail: "saepe",
            subnetwork: "quidem",
            tempLocation: "architecto",
            workerRegion: "ipsa",
            workerZone: "reiciendis",
            zone: "est",
          },
          jobName: "mollitia",
          parameters: {
            "dolores": "dolorem",
            "corporis": "explicabo",
            "nobis": "enim",
          },
          transformNameMapping: {
            "nemo": "minima",
            "excepturi": "accusantium",
            "iure": "culpa",
          },
          update: false,
        },
        location: "doloribus",
        projectId: "sapiente",
        validateOnly: false,
      },
    },
  },
  accessToken: "architecto",
  alt: AltEnum.Media,
  callback: "dolorem",
  fields: "culpa",
  key: "consequuntur",
  oauthToken: "repellat",
  parent: "mollitia",
  prettyPrint: false,
  quotaUser: "occaecati",
  uploadType: "numquam",
  uploadProtocol: "commodi",
};

sdk.projects.datapipelinesProjectsLocationsPipelinesCreate(req).then((res: DatapipelinesProjectsLocationsPipelinesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datapipelinesProjectsLocationsPipelinesCreate` - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* `datapipelinesProjectsLocationsPipelinesDelete` - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* `datapipelinesProjectsLocationsPipelinesGet` - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesJobsList` - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesList` - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesPatch` - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* `datapipelinesProjectsLocationsPipelinesRun` - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* `datapipelinesProjectsLocationsPipelinesStop` - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

