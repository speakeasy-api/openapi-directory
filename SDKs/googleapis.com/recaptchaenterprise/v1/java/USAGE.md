<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = "LEGITIMATE";
                    hashedAccountId = "iure";
                    reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]{{
                        add("INCORRECT_PASSWORD"),
                        add("REASON_UNSPECIFIED"),
                    }};
                    transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent() {{
                        eventTime = "delectus";
                        eventType = "AUTHORIZATION_DECLINE";
                        reason = "suscipit";
                        value = 4776.65;
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