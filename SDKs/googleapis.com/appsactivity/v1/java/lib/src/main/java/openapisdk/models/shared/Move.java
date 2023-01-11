package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Move
 * Contains information about changes in an object's parents as a result of a move type event.
**/
public class Move {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedParents")
    public Parent[] addedParents;
    public Move withAddedParents(Parent[] addedParents) {
        this.addedParents = addedParents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removedParents")
    public Parent[] removedParents;
    public Move withRemovedParents(Parent[] removedParents) {
        this.removedParents = removedParents;
        return this;
    }
}