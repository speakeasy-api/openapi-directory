package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesRequestBodyAgeBands {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingAvailabilityTourgradesRequestBodyAgeBands withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BookingAvailabilityTourgradesRequestBodyAgeBands withCount(Long count) {
        this.count = count;
        return this;
    }
}