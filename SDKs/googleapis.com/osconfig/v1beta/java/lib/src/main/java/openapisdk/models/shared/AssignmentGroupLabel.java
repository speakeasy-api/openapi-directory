package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentGroupLabel
 * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
**/
public class AssignmentGroupLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AssignmentGroupLabel withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}