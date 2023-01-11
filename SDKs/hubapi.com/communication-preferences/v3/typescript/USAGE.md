<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCommunicationPreferencesV3DefinitionsGetPageRequest, GetCommunicationPreferencesV3DefinitionsGetPageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCommunicationPreferencesV3DefinitionsGetPageRequest = {
  security: {
    hapikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
};

sdk.definition.getCommunicationPreferencesV3DefinitionsGetPage(req).then((res: GetCommunicationPreferencesV3DefinitionsGetPageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->