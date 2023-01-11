<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetABatchOfConsumerTransactionClassificationResultsRequest, GetABatchOfConsumerTransactionClassificationResultsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetABatchOfConsumerTransactionClassificationResultsRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.batch.getABatchOfConsumerTransactionClassificationResults(req).then((res: GetABatchOfConsumerTransactionClassificationResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->