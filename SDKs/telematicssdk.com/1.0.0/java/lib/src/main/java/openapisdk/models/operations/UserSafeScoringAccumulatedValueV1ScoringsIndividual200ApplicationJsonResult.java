package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccelerationScore")
    public Double accelerationScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withAccelerationScore(Double accelerationScore) {
        this.accelerationScore = accelerationScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BrakingScore")
    public Double brakingScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withBrakingScore(Double brakingScore) {
        this.brakingScore = brakingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyId")
    public String companyId;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CorneringScore")
    public Double corneringScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withCorneringScore(Double corneringScore) {
        this.corneringScore = corneringScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceToken")
    public String deviceToken;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DistractedScore")
    public Double distractedScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withDistractedScore(Double distractedScore) {
        this.distractedScore = distractedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverallScore")
    public Double overallScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withOverallScore(Double overallScore) {
        this.overallScore = overallScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeedingScore")
    public Double speedingScore;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult withSpeedingScore(Double speedingScore) {
        this.speedingScore = speedingScore;
        return this;
    }
}