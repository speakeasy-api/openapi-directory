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