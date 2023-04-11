<!-- Start SDK Example Usage -->
```typescript
import {
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest,
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum,
  GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRetailV2alphaAddCatalogAttributeRequestInput: {
    catalogAttribute: {
      dynamicFacetableOption: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum.DynamicFacetableEnabled,
      exactSearchableOption: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum.ExactSearchableDisabled,
      indexableOption: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum.IndexableDisabled,
      key: "unde",
      recommendationsFilteringOption: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum.RecommendationsFilteringEnabled,
      retrievableOption: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum.RetrievableEnabled,
      searchableOption: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum.SearchableDisabled,
    },
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  attributesConfig: "deserunt",
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req).then((res: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->