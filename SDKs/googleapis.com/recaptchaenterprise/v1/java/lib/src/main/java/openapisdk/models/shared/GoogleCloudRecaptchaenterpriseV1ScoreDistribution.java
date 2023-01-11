package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecaptchaenterpriseV1ScoreDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreBuckets")
    public java.util.Map<String, String> scoreBuckets;
    public GoogleCloudRecaptchaenterpriseV1ScoreDistribution withScoreBuckets(java.util.Map<String, String> scoreBuckets) {
        this.scoreBuckets = scoreBuckets;
        return this;
    }
}