package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RootV1ScoringsConsolidatedDaily200ApplicationJsonResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccelerationScore")
    public Double accelerationScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withAccelerationScore(Double accelerationScore) {
        this.accelerationScore = accelerationScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BrakingScore")
    public Double brakingScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withBrakingScore(Double brakingScore) {
        this.brakingScore = brakingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyId")
    public String companyId;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CorneringScore")
    public Double corneringScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withCorneringScore(Double corneringScore) {
        this.corneringScore = corneringScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceToken")
    public String deviceToken;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DistractedScore")
    public Double distractedScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withDistractedScore(Double distractedScore) {
        this.distractedScore = distractedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverallScore")
    public Double overallScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withOverallScore(Double overallScore) {
        this.overallScore = overallScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportDate")
    public String reportDate;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withReportDate(String reportDate) {
        this.reportDate = reportDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeedingScore")
    public Double speedingScore;
    public RootV1ScoringsConsolidatedDaily200ApplicationJsonResult withSpeedingScore(Double speedingScore) {
        this.speedingScore = speedingScore;
        return this;
    }
}