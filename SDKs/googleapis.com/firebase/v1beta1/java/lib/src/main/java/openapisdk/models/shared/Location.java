package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * A GCP resource location that can be selected for a FirebaseProject.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public LocationFeaturesEnum[] features;
    public Location withFeatures(LocationFeaturesEnum[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public Location withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LocationTypeEnum type;
    public Location withType(LocationTypeEnum type) {
        this.type = type;
        return this;
    }
}