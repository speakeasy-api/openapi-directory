package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailability200ApplicationJsonDataAvailability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public BookingAvailability200ApplicationJsonDataAvailability withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingAvailability200ApplicationJsonDataAvailability withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingAvailability200ApplicationJsonDataAvailability withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCode")
    public String gradeCode;
    public BookingAvailability200ApplicationJsonDataAvailability withGradeCode(String gradeCode) {
        this.gradeCode = gradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingAvailability200ApplicationJsonDataAvailability withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingAvailability200ApplicationJsonDataAvailability withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPrice")
    public Double retailPrice;
    public BookingAvailability200ApplicationJsonDataAvailability withRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPriceFormatted")
    public String retailPriceFormatted;
    public BookingAvailability200ApplicationJsonDataAvailability withRetailPriceFormatted(String retailPriceFormatted) {
        this.retailPriceFormatted = retailPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailability200ApplicationJsonDataAvailability withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unavailableReason")
    public String unavailableReason;
    public BookingAvailability200ApplicationJsonDataAvailability withUnavailableReason(String unavailableReason) {
        this.unavailableReason = unavailableReason;
        return this;
    }
}