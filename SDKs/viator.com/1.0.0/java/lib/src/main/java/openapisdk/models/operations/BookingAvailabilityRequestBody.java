package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBands")
    public BookingAvailabilityRequestBodyAgeBands[] ageBands;
    public BookingAvailabilityRequestBody withAgeBands(BookingAvailabilityRequestBodyAgeBands[] ageBands) {
        this.ageBands = ageBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingAvailabilityRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public String month;
    public BookingAvailabilityRequestBody withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingAvailabilityRequestBody withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public BookingAvailabilityRequestBody withYear(String year) {
        this.year = year;
        return this;
    }
}