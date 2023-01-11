package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneStep
 * CloneStep holds information about the clone step progress.
**/
public class CloneStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaptingOs")
    public java.util.Map<String, Object> adaptingOs;
    public CloneStep withAdaptingOs(java.util.Map<String, Object> adaptingOs) {
        this.adaptingOs = adaptingOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CloneStep withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instantiatingMigratedVm")
    public java.util.Map<String, Object> instantiatingMigratedVm;
    public CloneStep withInstantiatingMigratedVm(java.util.Map<String, Object> instantiatingMigratedVm) {
        this.instantiatingMigratedVm = instantiatingMigratedVm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparingVmDisks")
    public java.util.Map<String, Object> preparingVmDisks;
    public CloneStep withPreparingVmDisks(java.util.Map<String, Object> preparingVmDisks) {
        this.preparingVmDisks = preparingVmDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public CloneStep withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}