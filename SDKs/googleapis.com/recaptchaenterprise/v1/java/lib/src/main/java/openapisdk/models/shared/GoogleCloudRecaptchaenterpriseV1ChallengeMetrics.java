package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1ChallengeMetrics
 * Metrics related to challenges.
**/
public class GoogleCloudRecaptchaenterpriseV1ChallengeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedCount")
    public String failedCount;
    public GoogleCloudRecaptchaenterpriseV1ChallengeMetrics withFailedCount(String failedCount) {
        this.failedCount = failedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nocaptchaCount")
    public String nocaptchaCount;
    public GoogleCloudRecaptchaenterpriseV1ChallengeMetrics withNocaptchaCount(String nocaptchaCount) {
        this.nocaptchaCount = nocaptchaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageloadCount")
    public String pageloadCount;
    public GoogleCloudRecaptchaenterpriseV1ChallengeMetrics withPageloadCount(String pageloadCount) {
        this.pageloadCount = pageloadCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passedCount")
    public String passedCount;
    public GoogleCloudRecaptchaenterpriseV1ChallengeMetrics withPassedCount(String passedCount) {
        this.passedCount = passedCount;
        return this;
    }
}