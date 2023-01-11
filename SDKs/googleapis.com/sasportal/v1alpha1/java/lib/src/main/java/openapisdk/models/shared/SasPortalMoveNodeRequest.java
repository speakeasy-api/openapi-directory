package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalMoveNodeRequest
 * Request for MoveNode.
**/
public class SasPortalMoveNodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public SasPortalMoveNodeRequest withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}