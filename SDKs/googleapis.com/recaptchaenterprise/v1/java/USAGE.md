<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsAssessmentsAnnotateRequest req = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum.PASSWORD_CORRECT;
                    hashedAccountId = "quibusdam";
                    reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]{{
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CORRECT_PASSWORD),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.PAYMENT_HEURISTICS),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CORRECT_PASSWORD),
                    }};
                    transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent() {{
                        eventTime = "vel";
                        eventType = GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum.FRAUD_NOTIFICATION;
                        reason = "deserunt";
                        value = 3843.82;
                    }};;
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req, new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->