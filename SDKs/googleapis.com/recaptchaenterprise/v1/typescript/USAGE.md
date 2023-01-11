<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RecaptchaenterpriseProjectsAssessmentsAnnotateRequest, RecaptchaenterpriseProjectsAssessmentsAnnotateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RecaptchaenterpriseProjectsAssessmentsAnnotateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    annotation: "PASSWORD_INCORRECT",
    hashedAccountId: "debitis",
    reasons: [
      "TRANSACTION_ACCEPTED",
    ],
  },
};

sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req).then((res: RecaptchaenterpriseProjectsAssessmentsAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->