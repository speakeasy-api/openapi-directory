<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest{
        DollarXgafv: "2",
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "FRAUDULENT",
            HashedAccountID: "distinctio",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "INITIATED_TWO_FACTOR",
                "CORRECT_PASSWORD",
                "PAYMENT_HEURISTICS",
                "CORRECT_PASSWORD",
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: "vel",
                EventType: "FRAUD_NOTIFICATION",
                Reason: "deserunt",
                Value: 3843.82,
            },
        },
        AccessToken: "iure",
        Alt: "json",
        Callback: "debitis",
        Fields: "ipsa",
        Key: "delectus",
        Name: "tempora",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, req, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->