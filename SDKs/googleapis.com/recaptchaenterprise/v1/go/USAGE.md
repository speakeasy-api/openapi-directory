<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Name: "sit",
        },
        QueryParams: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "PASSWORD_INCORRECT",
            HashedAccountID: "debitis",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "TRANSACTION_ACCEPTED",
            },
        },
    }
    
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->