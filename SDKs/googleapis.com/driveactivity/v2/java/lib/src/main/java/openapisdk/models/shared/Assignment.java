package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Assignment
 * A comment with an assignment.
**/
public class Assignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedUser")
    public User assignedUser;
    public Assignment withAssignedUser(User assignedUser) {
        this.assignedUser = assignedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public AssignmentSubtypeEnum subtype;
    public Assignment withSubtype(AssignmentSubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
}