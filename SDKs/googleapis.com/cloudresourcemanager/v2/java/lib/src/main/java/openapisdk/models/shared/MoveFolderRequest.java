package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveFolderRequest
 * The MoveFolder request message.
**/
public class MoveFolderRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationParent")
    public String destinationParent;
    public MoveFolderRequest withDestinationParent(String destinationParent) {
        this.destinationParent = destinationParent;
        return this;
    }
}