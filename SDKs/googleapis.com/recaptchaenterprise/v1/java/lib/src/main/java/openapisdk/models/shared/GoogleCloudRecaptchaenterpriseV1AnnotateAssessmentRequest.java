package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest
 * The request message to annotate an Assessment.
**/
public class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum annotation;
    public GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest withAnnotation(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedAccountId")
    public String hashedAccountId;
    public GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest withHashedAccountId(String hashedAccountId) {
        this.hashedAccountId = hashedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[] reasons;
    public GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest withReasons(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[] reasons) {
        this.reasons = reasons;
        return this;
    }
}