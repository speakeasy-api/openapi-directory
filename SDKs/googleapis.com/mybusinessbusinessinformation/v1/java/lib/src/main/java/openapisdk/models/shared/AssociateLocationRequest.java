package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssociateLocationRequest
 * Request message for Locations.AssociateLocationRequest.
**/
public class AssociateLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public AssociateLocationRequest withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
}