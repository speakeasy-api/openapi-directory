package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteItemRequest
 * Delete an item in a form.
**/
public class DeleteItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public DeleteItemRequest withLocation(Location location) {
        this.location = location;
        return this;
    }
}