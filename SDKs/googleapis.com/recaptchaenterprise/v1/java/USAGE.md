<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsAssessmentsAnnotateRequest req = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest() {{
                dollarXgafv = "2";
                googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = "FRAUDULENT";
                    hashedAccountId = "distinctio";
                    reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]{{
                        add("INITIATED_TWO_FACTOR"),
                        add("CORRECT_PASSWORD"),
                        add("PAYMENT_HEURISTICS"),
                        add("CORRECT_PASSWORD"),
                    }};
                    transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent() {{
                        eventTime = "vel";
                        eventType = "FRAUD_NOTIFICATION";
                        reason = "deserunt";
                        value = 3843.82;
                    }};
                }};
                accessToken = "iure";
                alt = "json";
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                name = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }}            

            RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req, new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->