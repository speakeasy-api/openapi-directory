<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnumFraudulent.ToPointer(),
            HashedAccountID: sdk.String("distinctio"),
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumInitiatedTwoFactor,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumCorrectPassword,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumPaymentHeuristics,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumCorrectPassword,
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: sdk.String("vel"),
                EventType: shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnumFraudNotification.ToPointer(),
                Reason: sdk.String("deserunt"),
                Value: sdk.Float64(3843.82),
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        Name: "Laurie Kreiger",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
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