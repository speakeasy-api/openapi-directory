<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAssociationFilterRequest, GetAssociationFilterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAssociationFilterRequest = {
  queryParams: {
    datasource: "sit",
    datastructure: "voluptas",
    datatype: "culpa",
    direct: false,
    disease: "consequuntur",
    facets: false,
    fields: "expedita",
    format: "voluptas",
    from: 88.099998,
    pathway: "nihil",
    scorevalueMax: 47.200001,
    scorevalueMin: 48.099998,
    scorevalueTypes: "et",
    search: "ut",
    size: 50.099998,
    sort: "voluptate",
    target: "iste",
    targetClass: "vitae",
    therapeuticArea: "totam",
    uniprotkw: "dolores",
  },
};

sdk.filter.getAssociationFilter(req).then((res: GetAssociationFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->