package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SnowMonkeyConfig
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
**/
public class SnowMonkeyConfig {
    @JsonProperty("chaosConfig")
    public ChaosConfig chaosConfig;
    public SnowMonkeyConfig withChaosConfig(ChaosConfig chaosConfig) {
        this.chaosConfig = chaosConfig;
        return this;
    }
    @JsonProperty("dryRun")
    public Boolean dryRun;
    public SnowMonkeyConfig withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public SnowMonkeyConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("includeUserFacingDescriptors")
    public Boolean includeUserFacingDescriptors;
    public SnowMonkeyConfig withIncludeUserFacingDescriptors(Boolean includeUserFacingDescriptors) {
        this.includeUserFacingDescriptors = includeUserFacingDescriptors;
        return this;
    }
    @JsonProperty("outageDurationFrom")
    public Integer outageDurationFrom;
    public SnowMonkeyConfig withOutageDurationFrom(Integer outageDurationFrom) {
        this.outageDurationFrom = outageDurationFrom;
        return this;
    }
    @JsonProperty("outageDurationTo")
    public Integer outageDurationTo;
    public SnowMonkeyConfig withOutageDurationTo(Integer outageDurationTo) {
        this.outageDurationTo = outageDurationTo;
        return this;
    }
    @JsonProperty("outageStrategy")
    public OutageStrategyEnum outageStrategy;
    public SnowMonkeyConfig withOutageStrategy(OutageStrategyEnum outageStrategy) {
        this.outageStrategy = outageStrategy;
        return this;
    }
    @JsonProperty("startTime")
    public String startTime;
    public SnowMonkeyConfig withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("stopTime")
    public String stopTime;
    public SnowMonkeyConfig withStopTime(String stopTime) {
        this.stopTime = stopTime;
        return this;
    }
    @JsonProperty("targetGroups")
    public String[] targetGroups;
    public SnowMonkeyConfig withTargetGroups(String[] targetGroups) {
        this.targetGroups = targetGroups;
        return this;
    }
    @JsonProperty("timesPerDay")
    public Integer timesPerDay;
    public SnowMonkeyConfig withTimesPerDay(Integer timesPerDay) {
        this.timesPerDay = timesPerDay;
        return this;
    }
}