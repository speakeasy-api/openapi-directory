# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/genomics/v2alpha1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/genomics/v2alpha1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pipelines

* `genomicsPipelinesRun` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `genomicsProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `genomicsProjectsOperationsList` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `genomicsProjectsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `genomicsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

