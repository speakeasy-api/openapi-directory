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