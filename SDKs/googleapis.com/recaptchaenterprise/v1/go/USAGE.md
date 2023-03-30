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
        Security: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams{
            Name: "corrupti",
        },
        QueryParams: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "LEGITIMATE",
            HashedAccountID: "iure",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "INCORRECT_PASSWORD",
                "REASON_UNSPECIFIED",
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: "delectus",
                EventType: "AUTHORIZATION_DECLINE",
                Reason: "suscipit",
                Value: 4776.65,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->