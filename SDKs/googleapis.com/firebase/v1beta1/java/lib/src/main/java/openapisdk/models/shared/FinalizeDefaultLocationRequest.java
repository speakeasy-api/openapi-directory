package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FinalizeDefaultLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public FinalizeDefaultLocationRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}