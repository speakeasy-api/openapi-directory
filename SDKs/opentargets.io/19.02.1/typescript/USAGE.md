<!-- Start SDK Example Usage -->
```typescript
import {
  GetAssociationFilterRequest,
  GetAssociationFilterResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAssociationFilterRequest = {
  datasource: "corrupti",
  datastructure: "provident",
  datatype: "distinctio",
  direct: false,
  disease: "quibusdam",
  facets: false,
  fields: "unde",
  format: "nulla",
  from: 5448.83,
  pathway: "illum",
  scorevalueMax: 4236.55,
  scorevalueMin: 6235.64,
  scorevalueTypes: "deserunt",
  search: "suscipit",
  size: 4375.87,
  sort: "magnam",
  target: "debitis",
  targetClass: "ipsa",
  therapeuticArea: "delectus",
  uniprotkw: "tempora",
};

sdk.filter.getAssociationFilter(req).then((res: GetAssociationFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->