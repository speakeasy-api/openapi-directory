<!-- Start SDK Example Usage -->
```typescript
import {
  GetABatchOfConsumerTransactionClassificationResultsRequest,
  GetABatchOfConsumerTransactionClassificationResultsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetABatchOfConsumerTransactionClassificationResultsRequest = {
  id: "247ee045-3d04-4b3c-872b-a9160b810f33",
};

sdk.batch.getABatchOfConsumerTransactionClassificationResults(req).then((res: GetABatchOfConsumerTransactionClassificationResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->