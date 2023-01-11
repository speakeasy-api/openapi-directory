package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationKey
 * Alternate/surrogate key references for a location.
**/
public class LocationKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitNoPlaceId")
    public Boolean explicitNoPlaceId;
    public LocationKey withExplicitNoPlaceId(Boolean explicitNoPlaceId) {
        this.explicitNoPlaceId = explicitNoPlaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public LocationKey withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plusPageId")
    public String plusPageId;
    public LocationKey withPlusPageId(String plusPageId) {
        this.plusPageId = plusPageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public LocationKey withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}