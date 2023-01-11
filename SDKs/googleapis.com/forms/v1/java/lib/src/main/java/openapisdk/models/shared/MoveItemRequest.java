package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveItemRequest
 * Move an item in a form.
**/
public class MoveItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newLocation")
    public Location newLocation;
    public MoveItemRequest withNewLocation(Location newLocation) {
        this.newLocation = newLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalLocation")
    public Location originalLocation;
    public MoveItemRequest withOriginalLocation(Location originalLocation) {
        this.originalLocation = originalLocation;
        return this;
    }
}