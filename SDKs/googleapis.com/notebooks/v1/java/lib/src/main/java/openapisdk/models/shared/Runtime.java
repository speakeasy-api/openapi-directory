package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Runtime
 * The definition of a Runtime for a managed notebook instance.
**/
public class Runtime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessConfig")
    public RuntimeAccessConfig accessConfig;
    public Runtime withAccessConfig(RuntimeAccessConfig accessConfig) {
        this.accessConfig = accessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Runtime withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthState")
    public RuntimeHealthStateEnum healthState;
    public Runtime withHealthState(RuntimeHealthStateEnum healthState) {
        this.healthState = healthState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public RuntimeMetrics metrics;
    public Runtime withMetrics(RuntimeMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Runtime withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareConfig")
    public RuntimeSoftwareConfig softwareConfig;
    public Runtime withSoftwareConfig(RuntimeSoftwareConfig softwareConfig) {
        this.softwareConfig = softwareConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public RuntimeStateEnum state;
    public Runtime withState(RuntimeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Runtime withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachine")
    public VirtualMachine virtualMachine;
    public Runtime withVirtualMachine(VirtualMachine virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}