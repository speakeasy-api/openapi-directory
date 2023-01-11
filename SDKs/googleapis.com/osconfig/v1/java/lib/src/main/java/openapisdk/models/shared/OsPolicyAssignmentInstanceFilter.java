package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentInstanceFilter
 * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
**/
public class OsPolicyAssignmentInstanceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all")
    public Boolean all;
    public OsPolicyAssignmentInstanceFilter withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionLabels")
    public OsPolicyAssignmentLabelSet[] exclusionLabels;
    public OsPolicyAssignmentInstanceFilter withExclusionLabels(OsPolicyAssignmentLabelSet[] exclusionLabels) {
        this.exclusionLabels = exclusionLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusionLabels")
    public OsPolicyAssignmentLabelSet[] inclusionLabels;
    public OsPolicyAssignmentInstanceFilter withInclusionLabels(OsPolicyAssignmentLabelSet[] inclusionLabels) {
        this.inclusionLabels = inclusionLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventories")
    public OsPolicyAssignmentInstanceFilterInventory[] inventories;
    public OsPolicyAssignmentInstanceFilter withInventories(OsPolicyAssignmentInstanceFilterInventory[] inventories) {
        this.inventories = inventories;
        return this;
    }
}