<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest,
  DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest = {
  appId: 548814,
  cardId: "provident",
};

sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req).then((res: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->