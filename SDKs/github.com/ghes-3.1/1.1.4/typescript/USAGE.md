<!-- Start SDK Example Usage -->
```typescript
import {
  ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest,
  ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  org: "corrupti",
  repositoryId: 592845,
  runnerGroupId: 715190,
};

sdk.actions.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req).then((res: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->