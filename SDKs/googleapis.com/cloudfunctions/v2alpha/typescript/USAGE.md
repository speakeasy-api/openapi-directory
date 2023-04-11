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