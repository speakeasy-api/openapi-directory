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
            Name: "vel",
        },
        QueryParams: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sint",
            Alt: "json",
            Callback: "voluptatem",
            Fields: "eligendi",
            Key: "ratione",
            OauthToken: "exercitationem",
            PrettyPrint: false,
            QuotaUser: "voluptatem",
            UploadType: "qui",
            UploadProtocol: "cumque",
        },
        Request: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "FRAUDULENT",
            HashedAccountID: "ullam",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "INCORRECT_PASSWORD",
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