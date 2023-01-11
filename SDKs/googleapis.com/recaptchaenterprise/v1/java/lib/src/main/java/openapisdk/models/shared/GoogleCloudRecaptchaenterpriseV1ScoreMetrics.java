package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1ScoreMetrics
 * Metrics related to scoring.
**/
public class GoogleCloudRecaptchaenterpriseV1ScoreMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionMetrics")
    public java.util.Map<String, GoogleCloudRecaptchaenterpriseV1ScoreDistribution> actionMetrics;
    public GoogleCloudRecaptchaenterpriseV1ScoreMetrics withActionMetrics(java.util.Map<String, GoogleCloudRecaptchaenterpriseV1ScoreDistribution> actionMetrics) {
        this.actionMetrics = actionMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overallMetrics")
    public GoogleCloudRecaptchaenterpriseV1ScoreDistribution overallMetrics;
    public GoogleCloudRecaptchaenterpriseV1ScoreMetrics withOverallMetrics(GoogleCloudRecaptchaenterpriseV1ScoreDistribution overallMetrics) {
        this.overallMetrics = overallMetrics;
        return this;
    }
}