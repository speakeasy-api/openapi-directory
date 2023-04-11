<!-- Start SDK Example Usage -->
```typescript
import {
  PlayByPlayRequest,
  PlayByPlayResponse,
  PlayByPlayFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: PlayByPlayRequest = {
  format: PlayByPlayFormatEnum.Json,
  hometeam: "provident",
  season: "distinctio",
  week: "quibusdam",
};

sdk.playByPlay(req).then((res: PlayByPlayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->