package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment
 * Account defender risk assessment.
**/
public class GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum[] labels;
    public GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment withLabels(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum[] labels) {
        this.labels = labels;
        return this;
    }
}