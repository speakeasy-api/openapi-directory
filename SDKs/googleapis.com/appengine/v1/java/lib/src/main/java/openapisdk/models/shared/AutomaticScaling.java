package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutomaticScaling
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
**/
public class AutomaticScaling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coolDownPeriod")
    public String coolDownPeriod;
    public AutomaticScaling withCoolDownPeriod(String coolDownPeriod) {
        this.coolDownPeriod = coolDownPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuUtilization")
    public CpuUtilization cpuUtilization;
    public AutomaticScaling withCpuUtilization(CpuUtilization cpuUtilization) {
        this.cpuUtilization = cpuUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskUtilization")
    public DiskUtilization diskUtilization;
    public AutomaticScaling withDiskUtilization(DiskUtilization diskUtilization) {
        this.diskUtilization = diskUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentRequests")
    public Integer maxConcurrentRequests;
    public AutomaticScaling withMaxConcurrentRequests(Integer maxConcurrentRequests) {
        this.maxConcurrentRequests = maxConcurrentRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxIdleInstances")
    public Integer maxIdleInstances;
    public AutomaticScaling withMaxIdleInstances(Integer maxIdleInstances) {
        this.maxIdleInstances = maxIdleInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPendingLatency")
    public String maxPendingLatency;
    public AutomaticScaling withMaxPendingLatency(String maxPendingLatency) {
        this.maxPendingLatency = maxPendingLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTotalInstances")
    public Integer maxTotalInstances;
    public AutomaticScaling withMaxTotalInstances(Integer maxTotalInstances) {
        this.maxTotalInstances = maxTotalInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minIdleInstances")
    public Integer minIdleInstances;
    public AutomaticScaling withMinIdleInstances(Integer minIdleInstances) {
        this.minIdleInstances = minIdleInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minPendingLatency")
    public String minPendingLatency;
    public AutomaticScaling withMinPendingLatency(String minPendingLatency) {
        this.minPendingLatency = minPendingLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minTotalInstances")
    public Integer minTotalInstances;
    public AutomaticScaling withMinTotalInstances(Integer minTotalInstances) {
        this.minTotalInstances = minTotalInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUtilization")
    public NetworkUtilization networkUtilization;
    public AutomaticScaling withNetworkUtilization(NetworkUtilization networkUtilization) {
        this.networkUtilization = networkUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestUtilization")
    public RequestUtilization requestUtilization;
    public AutomaticScaling withRequestUtilization(RequestUtilization requestUtilization) {
        this.requestUtilization = requestUtilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardSchedulerSettings")
    public StandardSchedulerSettings standardSchedulerSettings;
    public AutomaticScaling withStandardSchedulerSettings(StandardSchedulerSettings standardSchedulerSettings) {
        this.standardSchedulerSettings = standardSchedulerSettings;
        return this;
    }
}