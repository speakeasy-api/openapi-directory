package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccelerationScore")
    public Double accelerationScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withAccelerationScore(Double accelerationScore) {
        this.accelerationScore = accelerationScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BrakingScore")
    public Double brakingScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withBrakingScore(Double brakingScore) {
        this.brakingScore = brakingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalcDate")
    public String calcDate;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withCalcDate(String calcDate) {
        this.calcDate = calcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyId")
    public String companyId;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CorneringScore")
    public Double corneringScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withCorneringScore(Double corneringScore) {
        this.corneringScore = corneringScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceToken")
    public String deviceToken;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DistractedScore")
    public Double distractedScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withDistractedScore(Double distractedScore) {
        this.distractedScore = distractedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverallScore")
    public Double overallScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withOverallScore(Double overallScore) {
        this.overallScore = overallScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeedingScore")
    public Double speedingScore;
    public UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult withSpeedingScore(Double speedingScore) {
        this.speedingScore = speedingScore;
        return this;
    }
}