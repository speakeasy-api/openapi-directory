package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingMonth")
    public String bookingMonth;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData withBookingMonth(String bookingMonth) {
        this.bookingMonth = bookingMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dates")
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates[] dates;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData withDates(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates[] dates) {
        this.dates = dates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingUnit")
    public String pricingUnit;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonData withPricingUnit(String pricingUnit) {
        this.pricingUnit = pricingUnit;
        return this;
    }
}