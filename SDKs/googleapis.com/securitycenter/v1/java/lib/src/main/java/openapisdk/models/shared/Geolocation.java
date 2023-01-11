package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Geolocation
 * Represents a geographical location for a given access.
**/
public class Geolocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public Geolocation withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}