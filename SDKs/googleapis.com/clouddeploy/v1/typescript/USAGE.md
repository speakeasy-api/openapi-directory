<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest, ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest = {
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
    deliveryPipelineId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
    validateOnly: true,
  },
  request: {
    annotations: {
      "ut": "dolorem",
    },
    condition: {
      pipelineReadyCondition: {
        status: false,
        updateTime: "voluptate",
      },
      targetsPresentCondition: {
        missingTargets: [
          "vitae",
          "totam",
          "dolores",
        ],
        status: false,
        updateTime: "debitis",
      },
    },
    description: "vel",
    etag: "odio",
    labels: {
      "id": "aspernatur",
      "accusantium": "totam",
    },
    name: "commodi",
    serialPipeline: {
      stages: [
        {
          profiles: [
            "aut",
            "odit",
          ],
          strategy: {
            standard: {
              verify: true,
            },
          },
          targetId: "voluptas",
        },
        {
          profiles: [
            "aut",
            "illo",
          ],
          strategy: {
            standard: {
              verify: false,
            },
          },
          targetId: "officiis",
        },
        {
          profiles: [
            "consectetur",
            "nobis",
          ],
          strategy: {
            standard: {
              verify: false,
            },
          },
          targetId: "qui",
        },
      ],
    },
    suspended: true,
  },
};

sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req).then((res: ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->