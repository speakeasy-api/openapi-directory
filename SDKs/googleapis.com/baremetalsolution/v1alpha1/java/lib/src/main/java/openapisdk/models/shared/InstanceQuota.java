package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceQuota
 * A resource budget.
**/
public class InstanceQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMachineCount")
    public Integer availableMachineCount;
    public InstanceQuota withAvailableMachineCount(Integer availableMachineCount) {
        this.availableMachineCount = availableMachineCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceType")
    public String instanceType;
    public InstanceQuota withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public InstanceQuota withLocation(String location) {
        this.location = location;
        return this;
    }
}