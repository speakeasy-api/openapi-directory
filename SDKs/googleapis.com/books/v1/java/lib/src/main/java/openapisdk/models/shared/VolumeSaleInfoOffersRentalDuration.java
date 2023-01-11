package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSaleInfoOffersRentalDuration
 * The rental duration (for rental offers only).
**/
public class VolumeSaleInfoOffersRentalDuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Double count;
    public VolumeSaleInfoOffersRentalDuration withCount(Double count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public VolumeSaleInfoOffersRentalDuration withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}