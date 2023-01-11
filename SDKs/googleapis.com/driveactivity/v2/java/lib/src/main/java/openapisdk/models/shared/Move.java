package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Move
 * An object was moved.
**/
public class Move {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedParents")
    public TargetReference[] addedParents;
    public Move withAddedParents(TargetReference[] addedParents) {
        this.addedParents = addedParents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedParents")
    public TargetReference[] removedParents;
    public Move withRemovedParents(TargetReference[] removedParents) {
        this.removedParents = removedParents;
        return this;
    }
}