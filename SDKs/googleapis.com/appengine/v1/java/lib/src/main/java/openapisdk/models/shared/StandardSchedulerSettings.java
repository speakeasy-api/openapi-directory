package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardSchedulerSettings
 * Scheduler settings for standard environment.
**/
public class StandardSchedulerSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstances")
    public Integer maxInstances;
    public StandardSchedulerSettings withMaxInstances(Integer maxInstances) {
        this.maxInstances = maxInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minInstances")
    public Integer minInstances;
    public StandardSchedulerSettings withMinInstances(Integer minInstances) {
        this.minInstances = minInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCpuUtilization")
    public Double targetCpuUtilization;
    public StandardSchedulerSettings withTargetCpuUtilization(Double targetCpuUtilization) {
        this.targetCpuUtilization = targetCpuUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetThroughputUtilization")
    public Double targetThroughputUtilization;
    public StandardSchedulerSettings withTargetThroughputUtilization(Double targetThroughputUtilization) {
        this.targetThroughputUtilization = targetThroughputUtilization;
        return this;
    }
}