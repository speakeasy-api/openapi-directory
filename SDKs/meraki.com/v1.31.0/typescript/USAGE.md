<!-- Start SDK Example Usage -->
```typescript
import {
  GetNetworkSwitchAccessControlListsRequest,
  GetNetworkSwitchAccessControlListsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    merakiApiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetNetworkSwitchAccessControlListsRequest = {
  networkId: "corrupti",
};

sdk.accessControlLists.getNetworkSwitchAccessControlLists(req).then((res: GetNetworkSwitchAccessControlListsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->