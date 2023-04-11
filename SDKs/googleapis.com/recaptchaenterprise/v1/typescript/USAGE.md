<!-- Start SDK Example Usage -->
```typescript
import {
  RecaptchaenterpriseProjectsAssessmentsAnnotateRequest,
  RecaptchaenterpriseProjectsAssessmentsAnnotateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum,
  GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum,
  GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RecaptchaenterpriseProjectsAssessmentsAnnotateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: {
    annotation: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum.Fraudulent,
    hashedAccountId: "distinctio",
    reasons: [
      GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.InitiatedTwoFactor,
      GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CorrectPassword,
      GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.PaymentHeuristics,
      GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CorrectPassword,
    ],
    transactionEvent: {
      eventTime: "vel",
      eventType: GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum.FraudNotification,
      reason: "deserunt",
      value: 3843.82,
    },
  },
  accessToken: "iure",
  alt: AltEnum.Json,
  callback: "debitis",
  fields: "ipsa",
  key: "delectus",
  name: "tempora",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req).then((res: RecaptchaenterpriseProjectsAssessmentsAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->