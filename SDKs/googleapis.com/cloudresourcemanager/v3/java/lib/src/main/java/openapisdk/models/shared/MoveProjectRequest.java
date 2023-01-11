package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveProjectRequest
 * The request sent to MoveProject method.
**/
public class MoveProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationParent")
    public String destinationParent;
    public MoveProjectRequest withDestinationParent(String destinationParent) {
        this.destinationParent = destinationParent;
        return this;
    }
}