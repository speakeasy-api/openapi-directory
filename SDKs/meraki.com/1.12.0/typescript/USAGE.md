<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetNetworkSwitchAccessControlListsRequest, GetNetworkSwitchAccessControlListsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    merakiApiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetNetworkSwitchAccessControlListsRequest = {
  pathParams: {
    networkId: "sit",
  },
};

sdk.accessControlLists.getNetworkSwitchAccessControlLists(req).then((res: GetNetworkSwitchAccessControlListsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->