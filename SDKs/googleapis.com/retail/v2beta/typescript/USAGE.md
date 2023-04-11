<!-- Start SDK Example Usage -->
```typescript
import {
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest,
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum,
  GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum,
  GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum,
  GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum,
  GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum,
  GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRetailV2betaAddCatalogAttributeRequestInput: {
    catalogAttribute: {
      dynamicFacetableOption: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum.DynamicFacetableEnabled,
      exactSearchableOption: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum.ExactSearchableDisabled,
      indexableOption: GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum.IndexableDisabled,
      key: "unde",
      recommendationsFilteringOption: GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum.RecommendationsFilteringEnabled,
      retrievableOption: GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum.RetrievableEnabled,
      searchableOption: GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum.SearchableDisabled,
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