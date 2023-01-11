package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeScheduling
 * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
**/
public class ComputeScheduling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minNodeCpus")
    public Integer minNodeCpus;
    public ComputeScheduling withMinNodeCpus(Integer minNodeCpus) {
        this.minNodeCpus = minNodeCpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeAffinities")
    public SchedulingNodeAffinity[] nodeAffinities;
    public ComputeScheduling withNodeAffinities(SchedulingNodeAffinity[] nodeAffinities) {
        this.nodeAffinities = nodeAffinities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHostMaintenance")
    public ComputeSchedulingOnHostMaintenanceEnum onHostMaintenance;
    public ComputeScheduling withOnHostMaintenance(ComputeSchedulingOnHostMaintenanceEnum onHostMaintenance) {
        this.onHostMaintenance = onHostMaintenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restartType")
    public ComputeSchedulingRestartTypeEnum restartType;
    public ComputeScheduling withRestartType(ComputeSchedulingRestartTypeEnum restartType) {
        this.restartType = restartType;
        return this;
    }
}