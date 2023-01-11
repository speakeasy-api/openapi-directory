package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBands")
    public BookingAvailabilityTourgradesRequestBodyAgeBands[] ageBands;
    public BookingAvailabilityTourgradesRequestBody withAgeBands(BookingAvailabilityTourgradesRequestBodyAgeBands[] ageBands) {
        this.ageBands = ageBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingAvailabilityTourgradesRequestBody withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingAvailabilityTourgradesRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingAvailabilityTourgradesRequestBody withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}