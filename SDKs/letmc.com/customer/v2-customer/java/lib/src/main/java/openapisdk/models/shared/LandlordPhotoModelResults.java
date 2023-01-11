package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordPhotoModelResults
 * Holds results from a paged query returning LandlordPhotoModel values
**/
public class LandlordPhotoModelResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Integer count;
    public LandlordPhotoModelResults withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public LandlordPhotoModel[] data;
    public LandlordPhotoModelResults withData(LandlordPhotoModel[] data) {
        this.data = data;
        return this;
    }
}