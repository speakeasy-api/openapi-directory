package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageSpeed")
    public Double averageSpeed;
    public ReportSummary withAverageSpeed(Double averageSpeed) {
        this.averageSpeed = averageSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public Long deviceId;
    public ReportSummary withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public ReportSummary withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public ReportSummary withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engineHours")
    public Long engineHours;
    public ReportSummary withEngineHours(Long engineHours) {
        this.engineHours = engineHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSpeed")
    public Double maxSpeed;
    public ReportSummary withMaxSpeed(Double maxSpeed) {
        this.maxSpeed = maxSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spentFuel")
    public Double spentFuel;
    public ReportSummary withSpentFuel(Double spentFuel) {
        this.spentFuel = spentFuel;
        return this;
    }
}