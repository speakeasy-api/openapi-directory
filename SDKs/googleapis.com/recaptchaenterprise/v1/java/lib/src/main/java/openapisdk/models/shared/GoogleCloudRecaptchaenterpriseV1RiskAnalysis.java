package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1RiskAnalysis
 * Risk analysis result for an event.
**/
public class GoogleCloudRecaptchaenterpriseV1RiskAnalysis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[] reasons;
    public GoogleCloudRecaptchaenterpriseV1RiskAnalysis withReasons(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudRecaptchaenterpriseV1RiskAnalysis withScore(Float score) {
        this.score = score;
        return this;
    }
}