package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketCustomPlacementConfig
 * The bucket's custom placement configuration for Custom Dual Regions.
**/
public class BucketCustomPlacementConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLocations")
    public String[] dataLocations;
    public BucketCustomPlacementConfig withDataLocations(String[] dataLocations) {
        this.dataLocations = dataLocations;
        return this;
    }
}