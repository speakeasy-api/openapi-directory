package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPricingmatrix200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandPrices")
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices[] ageBandPrices;
    public BookingPricingmatrix200ApplicationJsonData withAgeBandPrices(BookingPricingmatrix200ApplicationJsonDataAgeBandPrices[] ageBandPrices) {
        this.ageBandPrices = ageBandPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingPricingmatrix200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingUnit")
    public String pricingUnit;
    public BookingPricingmatrix200ApplicationJsonData withPricingUnit(String pricingUnit) {
        this.pricingUnit = pricingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingPricingmatrix200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}