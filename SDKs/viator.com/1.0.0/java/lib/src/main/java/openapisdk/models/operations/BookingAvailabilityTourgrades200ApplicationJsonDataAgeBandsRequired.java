package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumCountRequired")
    public Long maximumCountRequired;
    public BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired withMaximumCountRequired(Long maximumCountRequired) {
        this.maximumCountRequired = maximumCountRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumCountRequired")
    public Long minimumCountRequired;
    public BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired withMinimumCountRequired(Long minimumCountRequired) {
        this.minimumCountRequired = minimumCountRequired;
        return this;
    }
}