package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddFirebaseRequest
 * All fields are required.
**/
public class AddFirebaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public AddFirebaseRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}