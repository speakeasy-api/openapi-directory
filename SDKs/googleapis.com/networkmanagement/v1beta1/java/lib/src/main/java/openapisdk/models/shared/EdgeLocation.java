package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EdgeLocation
 * Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
**/
public class EdgeLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metropolitanArea")
    public String metropolitanArea;
    public EdgeLocation withMetropolitanArea(String metropolitanArea) {
        this.metropolitanArea = metropolitanArea;
        return this;
    }
}