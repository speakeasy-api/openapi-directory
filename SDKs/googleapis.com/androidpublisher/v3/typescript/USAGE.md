<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AndroidpublisherApplicationsDeviceTierConfigsCreateRequest, AndroidpublisherApplicationsDeviceTierConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidpublisherApplicationsDeviceTierConfigsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    packageName: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    allowUnknownDevices: false,
    alt: "proto",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    deviceGroups: [
      {
        deviceSelectors: [
          {
            deviceRam: {
              maxBytes: "et",
              minBytes: "ut",
            },
            excludedDeviceIds: [
              {
                buildBrand: "et",
                buildDevice: "voluptate",
              },
              {
                buildBrand: "iste",
                buildDevice: "vitae",
              },
              {
                buildBrand: "totam",
                buildDevice: "dolores",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "debitis",
              },
              {
                name: "vel",
              },
              {
                name: "odio",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "id",
                buildDevice: "aspernatur",
              },
              {
                buildBrand: "accusantium",
                buildDevice: "totam",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "quis",
              },
              {
                name: "est",
              },
            ],
          },
        ],
        name: "aut",
      },
    ],
    deviceTierSet: {
      deviceTiers: [
        {
          deviceGroupNames: [
            "voluptas",
            "omnis",
            "aut",
          ],
          level: 6972732843819909978,
        },
        {
          deviceGroupNames: [
            "officiis",
            "autem",
            "consectetur",
          ],
          level: 8683452355129068124,
        },
      ],
    },
  },
};

sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req).then((res: AndroidpublisherApplicationsDeviceTierConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->