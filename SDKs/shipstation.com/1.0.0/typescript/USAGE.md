<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateANewQuestionRequest, CreateANewQuestionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateANewQuestionRequest = {
  request: {
    choices: [
      "voluptas",
    ],
    question: "culpa",
  },
};

sdk.createANewQuestion(req).then((res: CreateANewQuestionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->