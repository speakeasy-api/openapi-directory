package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booker")
    public BookingBookRequestBodyBooker booker;
    public BookingBookRequestBody withBooker(BookingBookRequestBodyBooker booker) {
        this.booker = booker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingBookRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demo")
    public Boolean demo;
    public BookingBookRequestBody withDemo(Boolean demo) {
        this.demo = demo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BookingBookRequestBodyItems[] items;
    public BookingBookRequestBody withItems(BookingBookRequestBodyItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerDetail")
    public BookingBookRequestBodyPartnerDetail partnerDetail;
    public BookingBookRequestBody withPartnerDetail(BookingBookRequestBodyPartnerDetail partnerDetail) {
        this.partnerDetail = partnerDetail;
        return this;
    }
}