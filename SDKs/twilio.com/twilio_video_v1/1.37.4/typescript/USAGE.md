<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCompositionRequest, CreateCompositionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateCompositionRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    audioSources: [
      "voluptas",
    ],
    audioSourcesExcluded: [
      "expedita",
      "consequuntur",
    ],
    format: "mp4",
    resolution: "expedita",
    roomSid: "voluptas",
    statusCallback: "fugit",
    statusCallbackMethod: "HEAD",
    trim: true,
    videoLayout: "rerum",
  },
};

sdk.createComposition(req).then((res: CreateCompositionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->