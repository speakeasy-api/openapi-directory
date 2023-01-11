<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest, DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = {
  security: {
    developerHapikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    appId: 8717895732742165505,
    cardId: "voluptas",
  },
};

sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req).then((res: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->