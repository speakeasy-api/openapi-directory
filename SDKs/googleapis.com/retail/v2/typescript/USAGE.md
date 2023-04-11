<!-- Start SDK Example Usage -->
```typescript
import {
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest,
  RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum,
  GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum,
  GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum,
  GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum,
  GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRetailV2AddCatalogAttributeRequestInput: {
    catalogAttribute: {
      dynamicFacetableOption: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum.DynamicFacetableEnabled,
      exactSearchableOption: GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum.ExactSearchableDisabled,
      indexableOption: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum.IndexableDisabled,
      key: "unde",
      retrievableOption: GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum.RetrievableDisabled,
      searchableOption: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum.SearchableEnabled,
    },
  },
  accessToken: "illum",
  alt: AltEnum.Media,
  attributesConfig: "error",
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req).then((res: RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->