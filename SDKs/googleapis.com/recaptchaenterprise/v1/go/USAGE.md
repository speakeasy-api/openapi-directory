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
            Name: "mollitia",
        },
        QueryParams: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams{
            DollarXgafv: "1",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "magnam",
            Fields: "facere",
            Key: "odio",
            OauthToken: "accusamus",
            PrettyPrint: false,
            QuotaUser: "autem",
            UploadType: "enim",
            UploadProtocol: "provident",
        },
        Request: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "FRAUDULENT",
            HashedAccountID: "adipisci",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "TRANSACTION_DECLINED",
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