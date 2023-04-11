<!-- Start SDK Example Usage -->
```typescript
import {
  GenomicsPipelinesRunRequest,
  GenomicsPipelinesRunResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ActionFlagsEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GenomicsPipelinesRunRequest = {
  dollarXgafv: XgafvEnum.Two,
  runPipelineRequest: {
    labels: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    pipeline: {
      actions: [
        {
          commands: [
            "deserunt",
            "suscipit",
            "iure",
          ],
          credentials: {
            cipherText: "magnam",
            keyName: "debitis",
          },
          encryptedEnvironment: {
            cipherText: "ipsa",
            keyName: "delectus",
          },
          entrypoint: "tempora",
          environment: {
            "molestiae": "minus",
            "placeat": "voluptatum",
          },
          flags: [
            ActionFlagsEnum.PublishExposedPorts,
            ActionFlagsEnum.AlwaysRun,
          ],
          imageUri: "recusandae",
          labels: {
            "ab": "quis",
            "veritatis": "deserunt",
            "perferendis": "ipsam",
            "repellendus": "sapiente",
          },
          mounts: [
            {
              disk: "odit",
              path: "at",
              readOnly: false,
            },
            {
              disk: "at",
              path: "maiores",
              readOnly: false,
            },
            {
              disk: "molestiae",
              path: "quod",
              readOnly: false,
            },
            {
              disk: "quod",
              path: "esse",
              readOnly: false,
            },
          ],
          name: "totam",
          pidNamespace: "porro",
          portMappings: {
            "dicta": 720633,
            "officia": 582020,
            "fugit": 537373,
          },
          timeout: "hic",
        },
        {
          commands: [
            "totam",
            "beatae",
            "commodi",
            "molestiae",
          ],
          credentials: {
            cipherText: "modi",
            keyName: "qui",
          },
          encryptedEnvironment: {
            cipherText: "impedit",
            keyName: "cum",
          },
          entrypoint: "esse",
          environment: {
            "excepturi": "aspernatur",
          },
          flags: [
            ActionFlagsEnum.RunInBackground,
          ],
          imageUri: "natus",
          labels: {
            "iste": "dolor",
          },
          mounts: [
            {
              disk: "laboriosam",
              path: "hic",
              readOnly: false,
            },
            {
              disk: "saepe",
              path: "fuga",
              readOnly: false,
            },
            {
              disk: "in",
              path: "corporis",
              readOnly: false,
            },
          ],
          name: "iste",
          pidNamespace: "iure",
          portMappings: {
            "quidem": 99280,
            "ipsa": 969810,
            "est": 653140,
            "laborum": 170909,
          },
          timeout: "dolorem",
        },
      ],
      encryptedEnvironment: {
        cipherText: "corporis",
        keyName: "explicabo",
      },
      environment: {
        "enim": "omnis",
        "nemo": "minima",
        "excepturi": "accusantium",
        "iure": "culpa",
      },
      resources: {
        projectId: "doloribus",
        regions: [
          "architecto",
          "mollitia",
          "dolorem",
          "culpa",
        ],
        virtualMachine: {
          accelerators: [
            {
              count: "repellat",
              type: "mollitia",
            },
          ],
          bootDiskSizeGb: 581850,
          bootImage: "numquam",
          cpuPlatform: "commodi",
          disks: [
            {
              name: "molestiae",
              sizeGb: 244425,
              sourceImage: "error",
              type: "quia",
            },
            {
              name: "quis",
              sizeGb: 110375,
              sourceImage: "laborum",
              type: "animi",
            },
          ],
          dockerCacheImages: [
            "odit",
            "quo",
          ],
          enableStackdriverMonitoring: false,
          labels: {
            "tenetur": "ipsam",
          },
          machineType: "id",
          network: {
            name: "possimus",
            subnetwork: "aut",
            usePrivateAddress: false,
          },
          nvidiaDriverVersion: "quasi",
          preemptible: false,
          reservation: "error",
          serviceAccount: {
            email: "Margie_Boyer87@hotmail.com",
            scopes: [
              "praesentium",
              "voluptatibus",
            ],
          },
          volumes: [
            {
              existingDisk: {
                disk: "omnis",
              },
              nfsMount: {
                target: "voluptate",
              },
              persistentDisk: {
                sizeGb: 739264,
                sourceImage: "perferendis",
                type: "doloremque",
              },
              volume: "reprehenderit",
            },
          ],
        },
        zones: [
          "maiores",
          "dicta",
        ],
      },
      timeout: "corporis",
    },
    pubSubTopic: "dolore",
  },
  accessToken: "iusto",
  alt: AltEnum.Json,
  callback: "harum",
  fields: "enim",
  key: "accusamus",
  oauthToken: "commodi",
  prettyPrint: false,
  quotaUser: "repudiandae",
  uploadType: "quae",
  uploadProtocol: "ipsum",
};

sdk.pipelines.genomicsPipelinesRun(req).then((res: GenomicsPipelinesRunResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->