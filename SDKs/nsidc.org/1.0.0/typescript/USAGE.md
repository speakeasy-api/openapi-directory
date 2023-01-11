<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FacetsRequest, FacetsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FacetsRequest = {
  queryParams: {
    count: 8717895732742165505,
    endDate: "2006-05-01",
    facetFilters: "culpa",
    searchTerms: "expedita",
    sortKeys: "updated,,desc",
    source: "NSIDC",
    spatial: "expedita",
    startDate: "1978-05-28",
    startIndex: 8274930044578894929,
  },
};

sdk.swaggerDocs.facets(req).then((res: FacetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->