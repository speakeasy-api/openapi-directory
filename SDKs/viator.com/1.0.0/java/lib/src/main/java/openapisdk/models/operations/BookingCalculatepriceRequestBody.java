package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculatepriceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingCalculatepriceRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BookingCalculatepriceRequestBodyItems[] items;
    public BookingCalculatepriceRequestBody withItems(BookingCalculatepriceRequestBodyItems[] items) {
        this.items = items;
        return this;
    }
}