package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrixRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingAvailabilityTourgradesPricingmatrixRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public String month;
    public BookingAvailabilityTourgradesPricingmatrixRequestBody withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingAvailabilityTourgradesPricingmatrixRequestBody withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public BookingAvailabilityTourgradesPricingmatrixRequestBody withYear(String year) {
        this.year = year;
        return this;
    }
}