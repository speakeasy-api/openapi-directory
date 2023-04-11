<!-- Start SDK Example Usage -->
```typescript
import {
  ActionsAddSelectedRepoToOrgSecretRequest,
  ActionsAddSelectedRepoToOrgSecretResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActionsAddSelectedRepoToOrgSecretRequest = {
  org: "corrupti",
  repositoryId: 592845,
  secretName: "distinctio",
};

sdk.actions.actionsAddSelectedRepoToOrgSecret(req).then((res: ActionsAddSelectedRepoToOrgSecretResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->