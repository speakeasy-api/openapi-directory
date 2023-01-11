package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchedulingNodeAffinity
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
**/
public class SchedulingNodeAffinity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SchedulingNodeAffinity withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public SchedulingNodeAffinityOperatorEnum operator;
    public SchedulingNodeAffinity withOperator(SchedulingNodeAffinityOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SchedulingNodeAffinity withValues(String[] values) {
        this.values = values;
        return this;
    }
}