package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandPrices")
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices[] ageBandPrices;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix withAgeBandPrices(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices[] ageBandPrices) {
        this.ageBandPrices = ageBandPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingUnit")
    public String pricingUnit;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix withPricingUnit(String pricingUnit) {
        this.pricingUnit = pricingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}