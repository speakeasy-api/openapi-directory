package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculatepriceRequestBodyItemsTravellers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingCalculatepriceRequestBodyItemsTravellers withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
}