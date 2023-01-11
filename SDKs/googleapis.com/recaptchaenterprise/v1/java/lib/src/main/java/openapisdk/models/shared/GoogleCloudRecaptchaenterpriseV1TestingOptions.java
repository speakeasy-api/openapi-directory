package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1TestingOptions
 * Options for user acceptance testing.
**/
public class GoogleCloudRecaptchaenterpriseV1TestingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingChallenge")
    public GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum testingChallenge;
    public GoogleCloudRecaptchaenterpriseV1TestingOptions withTestingChallenge(GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum testingChallenge) {
        this.testingChallenge = testingChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingScore")
    public Float testingScore;
    public GoogleCloudRecaptchaenterpriseV1TestingOptions withTestingScore(Float testingScore) {
        this.testingScore = testingScore;
        return this;
    }
}