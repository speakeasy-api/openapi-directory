package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgrades200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBands")
    public Object[] ageBands;
    public BookingAvailabilityTourgrades200ApplicationJsonData withAgeBands(Object[] ageBands) {
        this.ageBands = ageBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBandsRequired")
    public BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired[][] ageBandsRequired;
    public BookingAvailabilityTourgrades200ApplicationJsonData withAgeBandsRequired(BookingAvailabilityTourgrades200ApplicationJsonDataAgeBandsRequired[][] ageBandsRequired) {
        this.ageBandsRequired = ageBandsRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public BookingAvailabilityTourgrades200ApplicationJsonData withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingAvailabilityTourgrades200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingAvailabilityTourgrades200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguageCode")
    public String defaultLanguageCode;
    public BookingAvailabilityTourgrades200ApplicationJsonData withDefaultLanguageCode(String defaultLanguageCode) {
        this.defaultLanguageCode = defaultLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCode")
    public String gradeCode;
    public BookingAvailabilityTourgrades200ApplicationJsonData withGradeCode(String gradeCode) {
        this.gradeCode = gradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeDepartureTime")
    public String gradeDepartureTime;
    public BookingAvailabilityTourgrades200ApplicationJsonData withGradeDepartureTime(String gradeDepartureTime) {
        this.gradeDepartureTime = gradeDepartureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeDescription")
    public String gradeDescription;
    public BookingAvailabilityTourgrades200ApplicationJsonData withGradeDescription(String gradeDescription) {
        this.gradeDescription = gradeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeTitle")
    public String gradeTitle;
    public BookingAvailabilityTourgrades200ApplicationJsonData withGradeTitle(String gradeTitle) {
        this.gradeTitle = gradeTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("langServices")
    public java.util.Map<String, Object> langServices;
    public BookingAvailabilityTourgrades200ApplicationJsonData withLangServices(java.util.Map<String, Object> langServices) {
        this.langServices = langServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingAvailabilityTourgrades200ApplicationJsonData withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingAvailabilityTourgrades200ApplicationJsonData withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPrice")
    public Double retailPrice;
    public BookingAvailabilityTourgrades200ApplicationJsonData withRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPriceFormatted")
    public String retailPriceFormatted;
    public BookingAvailabilityTourgrades200ApplicationJsonData withRetailPriceFormatted(String retailPriceFormatted) {
        this.retailPriceFormatted = retailPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailabilityTourgrades200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unavailableReason")
    public String unavailableReason;
    public BookingAvailabilityTourgrades200ApplicationJsonData withUnavailableReason(String unavailableReason) {
        this.unavailableReason = unavailableReason;
        return this;
    }
}