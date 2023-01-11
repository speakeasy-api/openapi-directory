package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageRegionCreateBatch
 * Batch of image region information to create.
**/
public class ImageRegionCreateBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public ImageRegionCreateEntry[] regions;
    public ImageRegionCreateBatch withRegions(ImageRegionCreateEntry[] regions) {
        this.regions = regions;
        return this;
    }
}