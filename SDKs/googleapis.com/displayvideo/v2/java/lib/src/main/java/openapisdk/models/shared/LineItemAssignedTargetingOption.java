package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemAssignedTargetingOption
 * Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
**/
public class LineItemAssignedTargetingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOption")
    public AssignedTargetingOption assignedTargetingOption;
    public LineItemAssignedTargetingOption withAssignedTargetingOption(AssignedTargetingOption assignedTargetingOption) {
        this.assignedTargetingOption = assignedTargetingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public LineItemAssignedTargetingOption withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
}