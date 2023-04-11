<!-- Start SDK Example Usage -->
```typescript
import {
  ClassroomCoursesAliasesCreateRequest,
  ClassroomCoursesAliasesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClassroomCoursesAliasesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  courseAlias: {
    alias: "provident",
  },
  accessToken: "distinctio",
  alt: AltEnum.Proto,
  callback: "unde",
  courseId: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
};

sdk.courses.classroomCoursesAliasesCreate(req).then((res: ClassroomCoursesAliasesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->