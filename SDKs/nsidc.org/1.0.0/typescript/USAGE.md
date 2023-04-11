<!-- Start SDK Example Usage -->
```typescript
import {
  FacetsRequest,
  FacetsResponse,
  FacetsSortKeysEnum,
  FacetsSourceEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FacetsRequest = {
  count: 548814,
  endDate: "2021-07-27",
  facetFilters: "quibusdam",
  searchTerms: "unde",
  sortKeys: FacetsSortKeysEnum.UpdatedDesc,
  source: FacetsSourceEnum.Ade,
  spatial: "illum",
  startDate: "2022-05-18",
  startIndex: 645894,
};

sdk.swaggerDocs.facets(req).then((res: FacetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->