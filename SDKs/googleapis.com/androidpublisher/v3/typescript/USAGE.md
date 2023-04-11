<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidpublisherApplicationsDeviceTierConfigsCreateRequest,
  AndroidpublisherApplicationsDeviceTierConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidpublisherApplicationsDeviceTierConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  deviceTierConfigInput: {
    deviceGroups: [
      {
        deviceSelectors: [
          {
            deviceRam: {
              maxBytes: "quibusdam",
              minBytes: "unde",
            },
            excludedDeviceIds: [
              {
                buildBrand: "corrupti",
                buildDevice: "illum",
              },
              {
                buildBrand: "vel",
                buildDevice: "error",
              },
              {
                buildBrand: "deserunt",
                buildDevice: "suscipit",
              },
              {
                buildBrand: "iure",
                buildDevice: "magnam",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "ipsa",
              },
              {
                name: "delectus",
              },
              {
                name: "tempora",
              },
              {
                name: "suscipit",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "minus",
                buildDevice: "placeat",
              },
              {
                buildBrand: "voluptatum",
                buildDevice: "iusto",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "nisi",
              },
              {
                name: "recusandae",
              },
              {
                name: "temporibus",
              },
            ],
          },
          {
            deviceRam: {
              maxBytes: "ab",
              minBytes: "quis",
            },
            excludedDeviceIds: [
              {
                buildBrand: "deserunt",
                buildDevice: "perferendis",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "repellendus",
              },
              {
                name: "sapiente",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "odit",
                buildDevice: "at",
              },
              {
                buildBrand: "at",
                buildDevice: "maiores",
              },
              {
                buildBrand: "molestiae",
                buildDevice: "quod",
              },
              {
                buildBrand: "quod",
                buildDevice: "esse",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "porro",
              },
              {
                name: "dolorum",
              },
              {
                name: "dicta",
              },
            ],
          },
          {
            deviceRam: {
              maxBytes: "nam",
              minBytes: "officia",
            },
            excludedDeviceIds: [
              {
                buildBrand: "fugit",
                buildDevice: "deleniti",
              },
              {
                buildBrand: "hic",
                buildDevice: "optio",
              },
              {
                buildBrand: "totam",
                buildDevice: "beatae",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "molestiae",
              },
              {
                name: "modi",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "impedit",
                buildDevice: "cum",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "ipsum",
              },
              {
                name: "excepturi",
              },
            ],
          },
        ],
        name: "aspernatur",
      },
      {
        deviceSelectors: [
          {
            deviceRam: {
              maxBytes: "ad",
              minBytes: "natus",
            },
            excludedDeviceIds: [
              {
                buildBrand: "iste",
                buildDevice: "dolor",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "laboriosam",
              },
              {
                name: "hic",
              },
              {
                name: "saepe",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "in",
                buildDevice: "corporis",
              },
              {
                buildBrand: "iste",
                buildDevice: "iure",
              },
              {
                buildBrand: "saepe",
                buildDevice: "quidem",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "ipsa",
              },
            ],
          },
        ],
        name: "reiciendis",
      },
      {
        deviceSelectors: [
          {
            deviceRam: {
              maxBytes: "mollitia",
              minBytes: "laborum",
            },
            excludedDeviceIds: [
              {
                buildBrand: "dolorem",
                buildDevice: "corporis",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "nobis",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "omnis",
                buildDevice: "nemo",
              },
              {
                buildBrand: "minima",
                buildDevice: "excepturi",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "iure",
              },
            ],
          },
          {
            deviceRam: {
              maxBytes: "culpa",
              minBytes: "doloribus",
            },
            excludedDeviceIds: [
              {
                buildBrand: "architecto",
                buildDevice: "mollitia",
              },
              {
                buildBrand: "dolorem",
                buildDevice: "culpa",
              },
              {
                buildBrand: "consequuntur",
                buildDevice: "repellat",
              },
              {
                buildBrand: "mollitia",
                buildDevice: "occaecati",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "commodi",
              },
              {
                name: "quam",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "velit",
                buildDevice: "error",
              },
              {
                buildBrand: "quia",
                buildDevice: "quis",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "laborum",
              },
            ],
          },
          {
            deviceRam: {
              maxBytes: "animi",
              minBytes: "enim",
            },
            excludedDeviceIds: [
              {
                buildBrand: "quo",
                buildDevice: "sequi",
              },
            ],
            forbiddenSystemFeatures: [
              {
                name: "ipsam",
              },
              {
                name: "id",
              },
              {
                name: "possimus",
              },
              {
                name: "aut",
              },
            ],
            includedDeviceIds: [
              {
                buildBrand: "error",
                buildDevice: "temporibus",
              },
            ],
            requiredSystemFeatures: [
              {
                name: "quasi",
              },
              {
                name: "reiciendis",
              },
              {
                name: "voluptatibus",
              },
            ],
          },
        ],
        name: "vero",
      },
    ],
    deviceTierSet: {
      deviceTiers: [
        {
          deviceGroupNames: [
            "voluptatibus",
            "ipsa",
            "omnis",
          ],
          level: 451159,
        },
        {
          deviceGroupNames: [
            "perferendis",
            "doloremque",
            "reprehenderit",
          ],
          level: 282807,
        },
      ],
    },
    userCountrySets: [
      {
        countryCodes: [
          "corporis",
        ],
        name: "dolore",
      },
      {
        countryCodes: [
          "dicta",
          "harum",
        ],
        name: "enim",
      },
      {
        countryCodes: [
          "commodi",
          "repudiandae",
          "quae",
          "ipsum",
        ],
        name: "quidem",
      },
      {
        countryCodes: [
          "excepturi",
          "pariatur",
          "modi",
        ],
        name: "praesentium",
      },
    ],
  },
  accessToken: "rem",
  allowUnknownDevices: false,
  alt: AltEnum.Proto,
  callback: "quasi",
  fields: "repudiandae",
  key: "sint",
  oauthToken: "veritatis",
  packageName: "itaque",
  prettyPrint: false,
  quotaUser: "incidunt",
  uploadType: "enim",
  uploadProtocol: "consequatur",
};

sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req).then((res: AndroidpublisherApplicationsDeviceTierConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->