<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            RecaptchaenterpriseProjectsAssessmentsAnnotateRequest req = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest() {{
                security = new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams() {{
                    name = "quis";
                }};
                queryParams = new RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quasi";
                    alt = "media";
                    callback = "suscipit";
                    fields = "voluptates";
                    key = "ad";
                    oauthToken = "laborum";
                    prettyPrint = false;
                    quotaUser = "odio";
                    uploadType = "saepe";
                    uploadProtocol = "saepe";
                }};
                request = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = "PASSWORD_CORRECT";
                    hashedAccountId = "voluptate";
                    reasons = new openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]() {{
                        add("TRANSACTION_ACCEPTED"),
                    }};
                }};
            }};

            RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req);

            if (res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->