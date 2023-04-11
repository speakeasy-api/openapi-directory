# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/recommendationengine/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/recommendationengine/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `recommendationengineProjectsLocationsCatalogsCatalogItemsCreate` - Creates a catalog item.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsImport` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsList` - Gets a list of catalog items.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsPatch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate` - Register an API key for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete` - Unregister an apiKey from using for predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList` - List the registered apiKeys for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite` - Writes a single user event.
* `recommendationengineProjectsLocationsCatalogsList` - Lists all the catalog configurations associated with the project.
* `recommendationengineProjectsLocationsCatalogsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `recommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

