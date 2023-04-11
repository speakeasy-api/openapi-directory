<!-- Start SDK Example Usage -->
```typescript
import {
  RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest,
  RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRecommendationengineV1beta1CatalogItem: {
    categoryHierarchies: [
      {
        categories: [
          "quibusdam",
          "unde",
          "nulla",
        ],
      },
      {
        categories: [
          "illum",
          "vel",
          "error",
        ],
      },
      {
        categories: [
          "suscipit",
          "iure",
          "magnam",
        ],
      },
    ],
    description: "debitis",
    id: "ipsa",
    itemAttributes: {
      categoricalFeatures: {
        "tempora": {
          value: [
            "molestiae",
            "minus",
          ],
        },
        "placeat": {
          value: [
            "iusto",
            "excepturi",
            "nisi",
          ],
        },
        "recusandae": {
          value: [
            "ab",
            "quis",
            "veritatis",
            "deserunt",
          ],
        },
        "perferendis": {
          value: [
            "repellendus",
            "sapiente",
          ],
        },
      },
      numericalFeatures: {
        "odit": {
          value: [
            8700.88,
            9786.19,
            4736.08,
            7991.59,
          ],
        },
        "quod": {
          value: [
            5204.78,
            7805.29,
          ],
        },
        "dolorum": {
          value: [
            7206.33,
          ],
        },
        "officia": {
          value: [
            1433.53,
            5373.73,
            9446.69,
          ],
        },
      },
    },
    itemGroupId: "optio",
    languageCode: "totam",
    productMetadata: {
      availableQuantity: "beatae",
      canonicalProductUri: "commodi",
      costs: {
        "modi": 1863.32,
        "impedit": 7369.18,
      },
      currencyCode: "esse",
      exactPrice: {
        displayPrice: 2165.5,
        originalPrice: 5684.34,
      },
      images: [
        {
          height: 18789,
          uri: "http://perky-charset.name",
          width: 222321,
        },
      ],
      priceRange: {
        max: 6169.34,
        min: 3864.89,
      },
      stockState: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum.Backorder,
    },
    tags: [
      "fuga",
      "in",
      "corporis",
      "iste",
    ],
    title: "Ms.",
  },
  accessToken: "saepe",
  alt: AltEnum.Proto,
  callback: "architecto",
  fields: "ipsa",
  key: "reiciendis",
  oauthToken: "est",
  parent: "mollitia",
  prettyPrint: false,
  quotaUser: "laborum",
  uploadType: "dolores",
  uploadProtocol: "dolorem",
};

sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req).then((res: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->