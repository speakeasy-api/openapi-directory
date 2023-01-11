package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackTargetedCountry
 * Representation of a single country where the contents of a track are available.
**/
public class TrackTargetedCountry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public TrackTargetedCountry withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}