<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest, RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest = {
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
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    categoryHierarchies: [
      {
        categories: [
          "voluptatum",
        ],
      },
      {
        categories: [
          "ut",
        ],
      },
      {
        categories: [
          "et",
          "voluptate",
          "iste",
        ],
      },
    ],
    description: "vitae",
    id: "totam",
    itemAttributes: {
      categoricalFeatures: {
        "illum": {
          value: [
            "vel",
          ],
        },
      },
      numericalFeatures: {
        "dolore": {
          value: [
            57.099998,
            45.099998,
          ],
        },
      },
    },
    itemGroupId: "quis",
    languageCode: "est",
    productMetadata: {
      availableQuantity: "aut",
      canonicalProductUri: "odit",
      costs: {
        "voluptas": 87.099998,
        "illo": 78.199997,
        "autem": 68.099998,
      },
      currencyCode: "odio",
      exactPrice: {
        displayPrice: 77.099998,
        originalPrice: 88.099998,
      },
      images: [
        {
          height: 303089054982227392,
          uri: "sint",
          width: 5392504858645185670,
        },
        {
          height: 7847956203786849690,
          uri: "exercitationem",
          width: 4756106358532488297,
        },
      ],
      priceRange: {
        max: 30.200001,
        min: 97.099998,
      },
      stockState: "BACKORDER",
    },
    tags: [
      "veritatis",
      "in",
      "et",
    ],
    title: "omnis",
  },
};

sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req).then((res: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->