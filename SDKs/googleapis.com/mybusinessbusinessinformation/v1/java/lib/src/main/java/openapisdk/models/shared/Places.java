package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Places
 * Defines the union of areas represented by a set of places.
**/
public class Places {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeInfos")
    public PlaceInfo[] placeInfos;
    public Places withPlaceInfos(PlaceInfo[] placeInfos) {
        this.placeInfos = placeInfos;
        return this;
    }
}