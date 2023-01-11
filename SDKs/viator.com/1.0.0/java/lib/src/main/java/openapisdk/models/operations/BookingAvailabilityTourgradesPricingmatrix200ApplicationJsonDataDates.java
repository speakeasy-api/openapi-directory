package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callForLastMinAvailability")
    public Boolean callForLastMinAvailability;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates withCallForLastMinAvailability(Boolean callForLastMinAvailability) {
        this.callForLastMinAvailability = callForLastMinAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGrades")
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades[] tourGrades;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDates withTourGrades(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades[] tourGrades) {
        this.tourGrades = tourGrades;
        return this;
    }
}