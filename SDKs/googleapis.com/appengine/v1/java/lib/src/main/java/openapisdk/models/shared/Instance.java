package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineRelease")
    public String appEngineRelease;
    public Instance withAppEngineRelease(String appEngineRelease) {
        this.appEngineRelease = appEngineRelease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public InstanceAvailabilityEnum availability;
    public Instance withAvailability(InstanceAvailabilityEnum availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageLatency")
    public Integer averageLatency;
    public Instance withAverageLatency(Integer averageLatency) {
        this.averageLatency = averageLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Integer errors;
    public Instance withErrors(Integer errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Instance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryUsage")
    public String memoryUsage;
    public Instance withMemoryUsage(String memoryUsage) {
        this.memoryUsage = memoryUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qps")
    public Float qps;
    public Instance withQps(Float qps) {
        this.qps = qps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public Integer requests;
    public Instance withRequests(Integer requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Instance withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmDebugEnabled")
    public Boolean vmDebugEnabled;
    public Instance withVmDebugEnabled(Boolean vmDebugEnabled) {
        this.vmDebugEnabled = vmDebugEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public Instance withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmIp")
    public String vmIp;
    public Instance withVmIp(String vmIp) {
        this.vmIp = vmIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmLiveness")
    public InstanceVmLivenessEnum vmLiveness;
    public Instance withVmLiveness(InstanceVmLivenessEnum vmLiveness) {
        this.vmLiveness = vmLiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmName")
    public String vmName;
    public Instance withVmName(String vmName) {
        this.vmName = vmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmStatus")
    public String vmStatus;
    public Instance withVmStatus(String vmStatus) {
        this.vmStatus = vmStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmZoneName")
    public String vmZoneName;
    public Instance withVmZoneName(String vmZoneName) {
        this.vmZoneName = vmZoneName;
        return this;
    }
}