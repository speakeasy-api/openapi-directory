package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceAddress
 * The physical address of the place.
**/
public class PlaceAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public PlaceAddress withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
}