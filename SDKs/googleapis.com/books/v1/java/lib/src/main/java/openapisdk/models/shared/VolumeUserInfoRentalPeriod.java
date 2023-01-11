package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeUserInfoRentalPeriod
 * Period during this book is/was a valid rental.
**/
public class VolumeUserInfoRentalPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endUtcSec")
    public String endUtcSec;
    public VolumeUserInfoRentalPeriod withEndUtcSec(String endUtcSec) {
        this.endUtcSec = endUtcSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startUtcSec")
    public String startUtcSec;
    public VolumeUserInfoRentalPeriod withStartUtcSec(String startUtcSec) {
        this.startUtcSec = startUtcSec;
        return this;
    }
}