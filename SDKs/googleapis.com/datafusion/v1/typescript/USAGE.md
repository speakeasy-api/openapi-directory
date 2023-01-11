<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DatafusionProjectsLocationsInstancesCreateRequest, DatafusionProjectsLocationsInstancesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatafusionProjectsLocationsInstancesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    instanceId: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    accelerators: [
      {
        acceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
        state: "DISABLED",
      },
    ],
    availableVersion: [
      {
        availableFeatures: [
          "et",
          "voluptate",
          "iste",
        ],
        defaultVersion: true,
        type: "TYPE_GENERAL_AVAILABILITY",
        versionNumber: "dolores",
      },
      {
        availableFeatures: [
          "debitis",
          "vel",
          "odio",
        ],
        defaultVersion: true,
        type: "TYPE_PREVIEW",
        versionNumber: "aspernatur",
      },
      {
        availableFeatures: [
          "totam",
          "commodi",
          "quis",
        ],
        defaultVersion: false,
        type: "TYPE_GENERAL_AVAILABILITY",
        versionNumber: "odit",
      },
    ],
    cryptoKeyConfig: {
      keyReference: "non",
    },
    dataprocServiceAccount: "voluptas",
    description: "omnis",
    displayName: "aut",
    enableRbac: true,
    enableStackdriverLogging: false,
    enableStackdriverMonitoring: false,
    eventPublishConfig: {
      enabled: true,
      topic: "consectetur",
    },
    labels: {
      "odio": "qui",
    },
    networkConfig: {
      ipAllocation: "recusandae",
      network: "at",
    },
    options: {
      "eveniet": "modi",
    },
    privateInstance: true,
    type: "BASIC",
    version: "ut",
    zone: "exercitationem",
  },
};

sdk.projects.datafusionProjectsLocationsInstancesCreate(req).then((res: DatafusionProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->