<!-- Start SDK Example Usage -->
```typescript
import {
  CardsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.cards.cards().then((res: CardsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->