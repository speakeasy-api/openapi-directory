package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1Metrics
 * Metrics for a single Key.
**/
public class GoogleCloudRecaptchaenterpriseV1Metrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeMetrics")
    public GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[] challengeMetrics;
    public GoogleCloudRecaptchaenterpriseV1Metrics withChallengeMetrics(GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[] challengeMetrics) {
        this.challengeMetrics = challengeMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecaptchaenterpriseV1Metrics withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreMetrics")
    public GoogleCloudRecaptchaenterpriseV1ScoreMetrics[] scoreMetrics;
    public GoogleCloudRecaptchaenterpriseV1Metrics withScoreMetrics(GoogleCloudRecaptchaenterpriseV1ScoreMetrics[] scoreMetrics) {
        this.scoreMetrics = scoreMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudRecaptchaenterpriseV1Metrics withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}