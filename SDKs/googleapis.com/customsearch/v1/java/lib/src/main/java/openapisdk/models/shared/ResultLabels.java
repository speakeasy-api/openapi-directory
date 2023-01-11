package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultLabels
 * Refinement label associated with a custom search result.
**/
public class ResultLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ResultLabels withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_with_op")
    public String labelWithOp;
    public ResultLabels withLabelWithOp(String labelWithOp) {
        this.labelWithOp = labelWithOp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResultLabels withName(String name) {
        this.name = name;
        return this;
    }
}