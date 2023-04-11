<!-- Start SDK Example Usage -->
```typescript
import {
  GetPersonasRequest,
  GetPersonasResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    accessToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetPersonasRequest = {
  count: 548814,
  expand: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  fields: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  name: "deserunt",
  page: 384382,
};

sdk.persona.getPersonas(req).then((res: GetPersonasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->