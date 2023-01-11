package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppliedLabelChange
 * Label changes that were made on the Target.
**/
public class AppliedLabelChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changes")
    public AppliedLabelChangeDetail[] changes;
    public AppliedLabelChange withChanges(AppliedLabelChangeDetail[] changes) {
        this.changes = changes;
        return this;
    }
}